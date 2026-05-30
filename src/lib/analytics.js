export function init() {
  // Plausible is usually loaded via script tag in index.html
  // This is a placeholder for programmatic init if needed.
}

export function trackEvent(eventName, props = {}) {
  if (window.plausible) {
    window.plausible(eventName, { props })
  } else {
    // console.debug('[analytics]', eventName, props)
  }
}

export function trackPageView() {
  // Plausible auto-tracks pageviews on history state change
}
