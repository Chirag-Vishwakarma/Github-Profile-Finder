import { useEffect, useState, useCallback } from 'react';

import styles from './App.module.css';

import { ThemeChanger } from './components/main/ThemeChanger.jsx';
import { Header } from './components/main/Header.jsx';
import { Searchbar } from './components/main/Searchbar.jsx';
import { ProfileCard } from './components/onload/ProfileCard.jsx';
import { RepoSection } from './components/onload/RepoSection.jsx';

function App() {
    const [theme, setTheme] = useState('light');

    const [query, setQuery] = useState('');

    const [loading, setLoading] = useState(false);
    const [reposLoading, setReposLoading] = useState(false);

    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);

    const [error, setError] = useState('');

    useEffect(() => {
        document.documentElement.style.colorScheme = theme;
        document.body.style.backgroundColor =
            theme === 'light' ? 'rgb(245, 245, 245)' : 'rgb(13, 17, 23)';
    }, [theme]);

    // ___________________________

    // const search = useCallback(() => {
    //     setLoading(true);
    //     setReposLoading(true);
    // }, [query]);
    // ___________________________

    const search = useCallback(async () => {
        const userName = query.trim();
        if (!userName) return;

        setLoading(true);
        setUser(null);
        setRepos([]);
        setError('');

        try {
            const res = await fetch(
                `https://api.github.com/users/${encodeURIComponent(userName)}`
            );

            if (res.status === 404) {
                setError(`User ${userName} not found on Github`);
                setLoading(false);
                return;
            }
            if (res.status === 429) {
                setError(
                    `Github API Rate limit exceeded. Please wait a minute & try again`
                );
                setLoading(false);
                return;
            }
            if (!res.ok) {
                setError(`Something went wrong. Please try again.`);
                setLoading(false);
                return;
            }

            const data = await res.json();
            setUser(data);
            setLoading(false);

            setReposLoading(true);
            const repoRes = await fetch(
                `https://api.github.com/users/${encodeURIComponent(
                    userName
                )}/repos?sort=updated&per_page=100`
            );

            if (repoRes.ok) {
                const repoData = await repoRes.json();
                const sorted = [...repoData].sort((a, b) => {
                    return a.stargazers_count - b.stargazers_count;
                });
                setRepos(sorted);
            }
            setReposLoading(false);
        } catch (e) {
            console.error(e);
            setError('Network error. Please try after sometime');
            setLoading(false);
            setReposLoading(false);
        }
    }, [query]);

    return (
        <div
            className={`${styles.app} ${
                theme == 'light' ? styles.light : styles.dark
            }`}
        >
            <ThemeChanger theme={theme} setTheme={setTheme} />
            <Header theme={theme} />

            <Searchbar
                query={query}
                setQuery={setQuery}
                search={search}
                loading={loading}
            />

            {error && <div className={styles.error}>⚠ {error}</div>}

            {loading && (
                <div className={styles.loadSection}>
                    <span className={styles.spinner}></span>
                    <div style={{ marginBlock: '1rem' }}>
                        fetching profile...
                    </div>
                </div>
            )}

            {user && (
                <>
                    <ProfileCard user={user} />
                    <RepoSection
                        repos={repos}
                        loading={reposLoading}
                        profileURL={user.html_url}
                    />
                </>
            )}

            {!user && !loading && !error && (
                <div className={styles.placeholderSection}>
                    <div className={styles.placeholderIcon}>{'{ }'}</div>
                    <div className={styles.placeholdertext}>
                        Search any github username above
                        <br />
                        Try: torvalds · gaearon · sindresorhus
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
