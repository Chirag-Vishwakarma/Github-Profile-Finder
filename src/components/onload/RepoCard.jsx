import styles from './RepoCard.module.css';

export function RepoCard() {
    return (
        <div className={styles.repoSection}>
            <span className={styles.stat}>
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {/* {fmt(repo.stargazers_count)} */}
            </span>
            <span className={styles.stat}>
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="18" cy="6" r="3" />
                    <circle cx="12" cy="18" r="3" />
                    <line x1="6" y1="9" x2="6" y2="15" />
                    <line x1="18" y1="9" x2="18" y2="15" />
                    <line x1="6" y1="15" x2="12" y2="18" />
                    <line x1="18" y1="15" x2="12" y2="18" />
                </svg>
                {/* {fmt(repo.forks_count)} */}
            </span>
        </div>
    );
}
