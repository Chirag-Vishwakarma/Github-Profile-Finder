import { useState } from 'react';
import styles from './RepoSection.module.css';
import { RepoCard } from './RepoCard';

export function RepoSection({ repos, loading, profileURL }) {
    const [filter, setFilter] = useState('');
    const filtered = repos.filter((r) => {
        return (
            r.name.toLowerCase().includes(filter.toLowerCase()) ||
            (r.description || '').toLowerCase().includes(filter.toLowerCase())
        );
    });

    const visible = filtered.slice(0, 6);

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Repositories
                    <span className={styles.badge}>{repos.length}</span>
                </div>

                {repos.length > 0 && (
                    <input
                        className={styles.filter}
                        placeholder="filter repos..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                )}
            </div>

            {loading && (
                <div className={styles.loadSection}>
                    <span className={styles.spinner}></span>
                    <div style={{ marginBlock: '1rem' }}>
                        Loading repositories...
                    </div>
                </div>
            )}

            {!loading && repos.length > 0 && filtered == 0 && (
                <div className={styles.noRepos}>No Repos found</div>
            )}

            {!loading && (
                <div className={styles.repos}>
                    {visible.map((repo) => {
                        return <RepoCard repo={repo} key={repo.id} />;
                    })}
                </div>
            )}

            {!loading && filtered.length > 6 && (
                <div className={styles.allRepo}>
                    <a
                        href={
                            profileURL.startsWith('http')
                                ? `${profileURL}?tab=repositories`
                                : `https://${profileURL}?tab=repositories`
                        }
                        className={styles.linkBtn}
                        target="_blank"
                    >
                        View all {filtered.length} Repositories {`->`}
                    </a>
                </div>
            )}
        </div>
    );
}
