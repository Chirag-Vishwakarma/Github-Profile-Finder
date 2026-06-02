import styles from './RepoSection.module.css';
import { RepoCard } from './RepoCard';

export function RepoSection({ repos }) {
    const visible = repos.slice(0, 6);
    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Repositories
                    <span className={styles.badge}>{repos.length}</span>
                </div>
                <input
                    className={styles.filter}
                    placeholder="filter repos..."
                />
            </div>

            <div className={styles.repos}>
                {visible.map((repo, index) => {
                    return <RepoCard key={index} repo={repo} />;
                })}
            </div>

            <div className={styles.allRepo}>
                <a
                    href={
                        repos.html_url.startsWith('http')
                            ? repos.html_url
                            : `https://${repos.html_url}`
                    }
                    className={styles.linkBtn}
                    target="_blank"
                >
                    View all {repos.length} Repositories {`->`}
                </a>
            </div>
        </div>
    );
}
