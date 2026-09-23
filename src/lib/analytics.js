/**
 * Analytics helper with an outgoing event queue.
 *
 * - Events fired before the analytics provider has loaded are queued and
 *   flushed as soon as a provider appears (Plausible or GA4), instead of
 *   silently no-op'ing.
 * - `trackPageView(path)` is called on every react-router pathname change so
 *   SPA navigations are tracked, not just the first page load.
 * - Both providers are injected from env vars (optional):
 *     VITE_PLAUSIBLE_DOMAIN  → loads https://plausible.io/js/script.js
 *     VITE_GA_ID             → loads gtag.js (send_page_view disabled; we
 *                               send pageviews explicitly from the router)
 */

const QUEUE_LIMIT = 50;
const POLL_INTERVAL_MS = 400;
const POLL_MAX_ATTEMPTS = 75; // ~30s, then give up waiting for the provider

const isBrowser = typeof window !== 'undefined';

/** @type {Array<{type: 'event'|'pageview', name?: string, path?: string, props?: object}>} */
const queue = [];
let initialized = false;
let watcher = null;
let pollAttempts = 0;

function getProviders() {
  if (!isBrowser) return { plausible: null, gtag: null };
  return {
    plausible: typeof window.plausible === 'function' ? window.plausible : null,
    gtag: typeof window.gtag === 'function' ? window.gtag : null,
  };
}

function hasProvider() {
  const { plausible, gtag } = getProviders();
  return Boolean(plausible || gtag);
}

function dispatch(entry) {
  const { plausible, gtag } = getProviders();

  if (entry.type === 'pageview') {
    const path = entry.path || (isBrowser ? window.location.pathname : '/');
    if (plausible) plausible('pageview', { props: { path } });
    if (gtag) {
      gtag('event', 'page_view', {
        page_path: path,
        page_location: isBrowser ? window.location.href : path,
        page_title: isBrowser ? document.title : '',
      });
    }
    return;
  }

  if (plausible) plausible(entry.name, { props: entry.props });
  if (gtag) gtag('event', entry.name, entry.props);
}

/** Flush the queue once at least one provider is available. */
function flush() {
  if (!isBrowser || !hasProvider() || queue.length === 0) return false;
  while (queue.length > 0) dispatch(queue.shift());
  return true;
}

/** Poll until the provider script finishes loading (or we time out). */
function ensureWatcher() {
  if (!isBrowser || watcher) return;
  pollAttempts = 0;
  watcher = setInterval(() => {
    pollAttempts += 1;
    if (flush() || pollAttempts >= POLL_MAX_ATTEMPTS) {
      clearInterval(watcher);
      watcher = null;
    }
  }, POLL_INTERVAL_MS);
}

function enqueue(entry) {
  if (!isBrowser) return;
  queue.push(entry);
  if (queue.length > QUEUE_LIMIT) queue.shift();
  if (!flush()) ensureWatcher();
}

function injectPlausible() {
  const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
  if (!domain || window.__sn_plausible_injected) return;
  const script = document.createElement('script');
  script.defer = true;
  script.dataset.domain = domain;
  script.src = 'https://plausible.io/js/script.js';
  script.onerror = () => console.warn('[analytics] Plausible failed to load');
  document.head.appendChild(script);
  window.__sn_plausible_injected = true;
}

function injectGA4() {
  const id = import.meta.env.VITE_GA_ID;
  if (!id || window.__sn_ga_injected) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  // Pageviews are sent explicitly from the router (see trackPageView).
  window.gtag('config', id, { send_page_view: false });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);
  window.__sn_ga_injected = true;
}

/** Idempotent init — called once from main.jsx. */
export function init() {
  if (initialized || !isBrowser) return;
  initialized = true;
  injectPlausible();
  injectGA4();
  if (!flush()) ensureWatcher();
}

export function trackEvent(eventName, props = {}) {
  enqueue({ type: 'event', name: eventName, props });
}

export function trackPageView(path) {
  enqueue({ type: 'pageview', path });
}
