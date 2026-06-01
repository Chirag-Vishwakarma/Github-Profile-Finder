import styles from './RepoSection.module.css';
import { RepoCard } from './RepoCard';

export function RepoSection() {
    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <div className={styles.title}>
                    Repositories
                    <span className={styles.badge}>4</span>
                </div>
                <input
                    className={styles.filter}
                    placeholder="filter repos..."
                />
            </div>
            <RepoCard />
        </div>
    );
}
