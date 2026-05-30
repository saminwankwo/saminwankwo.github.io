import { useState, useEffect } from 'react'
import CONFIG from '@config'

export function useGitHub() {
  const [data, setData] = useState({ user: null, repos: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [rateLimited, setRateLimited] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${CONFIG.githubUser}`),
          fetch(`https://api.github.com/users/${CONFIG.githubUser}/repos?sort=updated&per_page=6&type=public`)
        ])

        if (userRes.status === 403 || reposRes.status === 403) {
          setRateLimited(true)
          setError(true)
          setLoading(false)
          return
        }

        const [userData, reposData] = await Promise.all([
          userRes.json(),
          reposRes.json()
        ])

        setData({ user: userData, repos: reposData })
      } catch (err) {
        console.warn('GitHub fetch failed:', err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { ...data, loading, error, rateLimited }
}
