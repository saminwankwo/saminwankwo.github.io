import { useState, useEffect } from 'react';
import { CONFIG } from '../data/config';

export function useGitHub() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${CONFIG.github}`),
          fetch(`https://api.github.com/users/${CONFIG.github}/repos?sort=updated&per_page=6`)
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('Failed to fetch GitHub data');
        }

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        setUser(userData);
        setRepos(reposData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { user, repos, loading, error };
}
