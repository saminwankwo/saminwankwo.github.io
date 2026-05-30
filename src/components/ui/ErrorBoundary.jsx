import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.warn('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback
      return (
        <div style={{
          background: 'var(--bg2)',
          border: '1px solid var(--border)',
          color: 'var(--text3)',
          fontFamily: 'var(--mono)',
          fontSize: '12px',
          padding: '1.5rem',
          textAlign: 'center'
        }}>
          Something went wrong loading this section.
        </div>
      )
    }

    return this.props.children
  }
}
