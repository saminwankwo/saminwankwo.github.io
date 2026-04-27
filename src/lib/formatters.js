export function formatDate(isoString, options = {}) {
  try {
    const date = new Date(isoString)
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      ...options
    }).format(date)
  } catch (e) {
    return isoString
  }
}

export function formatShortDate(isoString) {
  return formatDate(isoString, { month: 'short' })
}

export function timeAgo(isoString) {
  try {
    const date = new Date(isoString)
    const now = new Date()
    const diff = now - date
    
    const seconds = Math.floor(diff / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const months = Math.floor(days / 30)
    const years = Math.floor(days / 365)

    if (seconds < 60) return 'just now'
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    if (days < 30) return `${days}d ago`
    if (months < 12) return `${months}mo ago`
    return `${years}y ago`
  } catch (e) {
    return isoString
  }
}

export function truncate(str, maxLen) {
  if (!str || str.length <= maxLen) return str
  const truncated = str.substring(0, maxLen)
  return truncated.substring(0, truncated.lastIndexOf(' ')) + '...'
}

export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function capitalise(str) {
  if (!str) return str
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export function formatReadTime(minutes) {
  if (typeof minutes === 'string' && minutes.includes('min')) return minutes
  return `${minutes} min read`
}
