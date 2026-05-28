import { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/main/Header.jsx';
import { Searchbar } from './components/main/Searchbar.jsx';
import { ProfileCard } from './components/onload/ProfileCard.jsx';
import { RepoCard } from './components/onload/RepoCard.jsx';

function App() {
    const [query, setQuery] = useState('');

    function search() {
        return;
    }

    return (
        <div className={styles.app}>
            <Header />
            <Searchbar query={query} setQuery={setQuery} search={search} />
            <ProfileCard />
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
