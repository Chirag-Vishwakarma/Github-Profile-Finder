import styles from './Searchbar.module.css';

export function Searchbar({ query, setQuery, search, loading }) {
    function handleKey(e) {
        if (e.key == 'Enter') {
            search();
        }
        return;
    }

    const searchActive = loading || query.trim() !== '';
    const opacity = searchActive ? 0.8 : 0.5;
    const hoverOpacity = searchActive ? 1 : 0.5;

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKey}
                className={styles.input}
                placeholder="Type a Github username & press Enter..."
                autoFocus
            />
            <button
                type="submit"
                className={`${styles.btn}`}
                onClick={search}
                style={{ '--opacity': opacity, '--hoverOpacity': hoverOpacity }}
                disabled={searchActive}
            >
                {loading ? '...' : 'Search'}
            </button>
        </div>
    );
}
