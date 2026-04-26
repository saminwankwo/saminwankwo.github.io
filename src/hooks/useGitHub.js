import { useState, useEffect } from 'react'
import { CONFIG } from '../data/config'

export function useGitHub() {
  const [user, setUser] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${CONFIG.github}`),
          fetch(`https://api.github.com/users/${CONFIG.github}/repos?sort=updated&per_page=6&type=public`)
        ]);

        if (userRes.status === 403 || reposRes.status === 403) {
          throw new Error('Rate limit exceeded');
        }

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        setUser(userData);
        setRepos(reposData);
        setLoading(false);
      } catch (err) {
        console.warn('GitHub fetch error:', err.message);
        setError(true);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { user, repos, loading, error };
}
