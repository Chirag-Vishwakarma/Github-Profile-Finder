import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/main/Header.jsx';
import { Searchbar } from './components/main/Searchbar.jsx';
import { ProfileCard } from './components/onload/ProfileCard.jsx';
import { RepoSection } from './components/onload/RepoSection.jsx';
import { ThemeChanger } from './components/main/ThemeChanger.jsx';

function App() {
    const [query, setQuery] = useState('');
    const [theme, setTheme] = useState('light');
    // const [user, setUser] = useState(null);
    // const [repos, setRepos] = useState([]);

    useEffect(() => {
        document.documentElement.style.colorScheme = theme;
    }, [theme]);

    const search = async () => {
        const userName = query.trim();
        const res = await fetch(
            `https://api.github.com/users/${encodeURIComponent(userName)}`
        );
        const data = await res.json();
    };

    return (
        <div className={styles.app}>
            <ThemeChanger theme={theme} setTheme={setTheme} />
            <Header />
            <Searchbar query={query} setQuery={setQuery} search={search} />
            <ProfileCard />
            <RepoSection />
            {/* <div className={styles.placeholderSection}>
                <div className={styles.placeholderIcon}>{'{ }'}</div>
                <div className={styles.placeholdertext}>
                    Search any github username above
                    <br />
                    Try: torvalds · gaearon · sindresorhus
                </div>
            </div> */}
        </div>
    );
}

export default App;
