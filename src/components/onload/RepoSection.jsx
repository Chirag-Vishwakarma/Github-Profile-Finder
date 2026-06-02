import styles from './RepoSection.module.css';
import { RepoCard } from './RepoCard';

const arr = [1, 2, 3, 4];

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

            <div className={styles.repos}>
                {arr.map((value, index) => {
                    return <RepoCard key={index} />;
                })}
            </div>
        </div>
    );
}
