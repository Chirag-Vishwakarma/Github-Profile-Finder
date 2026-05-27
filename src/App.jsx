import { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header.jsx';
import { Searchbar } from './components/Searchbar.jsx';

function App() {
    const [query, setQuery] = useState('');

    function search() {
        return;
    }

    return (
        <div className={styles.app}>
            <Header />
            <Searchbar query={query} setQuery={setQuery} search={search} />
            <div className={styles.placeholderSection}>
                <div className={styles.placeholderIcon}>{'{ }'}</div>
                <div className={styles.placeholdertext}>
                    Search any github username above
                    <br />
                    Try: torvalds · gaearon · sindresorhus
                </div>
            </div>
        </div>
    );
}

export default App;
