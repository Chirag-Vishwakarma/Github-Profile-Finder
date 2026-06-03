import styles from './RepoCard.module.css';

export function RepoCard({ repo }) {
    const langColor = {
        JavaScript: '#f1e05a',
        TypeScript: '#3178c6',
        Python: '#3572A5',
        Java: '#b07219',
        HTML: '#e34c26',
        CSS: '#563d7c',
        'C++': '#f34b7d',
        C: '#555555',
        Go: '#00add8',
        Rust: '#dea584',
        Ruby: '#701516',
        PHP: '#4F5D95',
        Swift: '#ffac45',
        Kotlin: '#A97BFF',
        Shell: '#89e051',
        Dart: '#00B4AB',
        Vue: '#41b883',
        Svelte: '#ff3e00',
        'C#': '#178600',
    };

    const color = langColor[repo.language] || 'rgb(200,200,200)';
    return (
        <a className={styles.card} href={repo.html_url} target="_blank">
            <div className={styles.name}>{repo.name}</div>
            <div className={styles.desc}>
                {repo.description} || "No description"
            </div>
            <div className={styles.footer}>
                {repo.language && (
                    <span className={styles.lang}>
                        <span
                            className={styles.dot}
                            style={{ backgroundColor: color }}
                        ></span>
                        {repo.language}
                    </span>
                )}
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
                    {repo.stargazers_count}
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
                    {repo.forks_count}
                </span>
            </div>
        </a>
    );
}
