import { useEffect, useState, useCallback } from 'react';
import styles from './App.module.css';
import { Header } from './components/main/Header.jsx';
import { Searchbar } from './components/main/Searchbar.jsx';
import { ProfileCard } from './components/onload/ProfileCard.jsx';
import { RepoSection } from './components/onload/RepoSection.jsx';
import { ThemeChanger } from './components/main/ThemeChanger.jsx';

function App() {
    const [query, setQuery] = useState('');
    const [theme, setTheme] = useState('light');

    const [loading, setLoading] = useState(false);
    const [reposLoading, setReposLoading] = useState(false);

    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState('');

    const [error, setError] = useState('');

    // const [user, setUser] = useState(null);
    // const [repos, setRepos] = useState([]);

    useEffect(() => {
        document.documentElement.style.colorScheme = theme;
        document.body.style.backgroundColor =
            theme === 'light' ? 'rgb(245, 245, 245)' : 'rgb(13, 17, 23)';
    }, [theme]);

    const search = useCallback(async () => {
        const userName = query.trim();
        if (!userName) return;

        setUser(null);
        setRepos('');
        setLoading(true);

        try {
            const res = await fetch(
                `https://api.github.com/users/${encodeURIComponent(userName)}`
            );

            if (res == 404) {
                setError(`User ${userName} not found on Github`);
                setLoading(false);
                return;
            }
            if (res == 429) {
                setError(
                    `Github API Rate limit exceeded. Please wait a minute & try again`
                );
                setLoading(false);
                return;
            }
            if (!res.ok) {
                setError(`Something went wrong. Please try after sometime.`);
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
                )}/repos?sort=updated&per_page=10`
            );

            if (repoRes.ok) {
                const repoData = await repoRes.json();
                setRepos(repoData);
                setReposLoading(false);
                return;
            }
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
            <Searchbar query={query} setQuery={setQuery} search={search} />

            {user && <ProfileCard user={user} loading={loading} />}
            {repos && <RepoSection repos={repos} />}

            {!user && (
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
