import styles from './Searchbar.module.css';

export function Searchbar({ query, setQuery, search }) {
    function queryUpdate(e) {
        setQuery(e.target.value);
    }
    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                value={query}
                onChange={queryUpdate}
                className={styles.input}
                placeholder="Type a github username"
            />
            <button type="submit" className={styles.btn} onClick={search}>
                Search
            </button>
        </div>
    );
}
