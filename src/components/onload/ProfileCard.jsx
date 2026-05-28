import reactLogo from '../../assets/react.svg';
import styles from './ProfileCard.module.css';

export function ProfileCard() {
    return (
        <div className={styles.card}>
            {/* profile detail */}
            <div className={styles.top}>
                <div>
                    <img src={reactLogo} className={styles.img} />
                </div>
                <div>
                    <div className={styles.name}>Chirag Vishwakarma</div>
                    <div className={styles.login}>@Chirag-Vishwakarma</div>
                    <div className={styles.bio}>
                        Passionate React.js Developer skilled in HTML, CSS,
                        JavaScript & React, focused on building responsive,
                        scalable & user-friendly apps.
                    </div>
                    <span className={styles.metaItem}>
                        <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        Joined Jan 18, 2021
                    </span>
                    <button className={styles.ghBtn}>
                        <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        View on Github
                    </button>
                </div>
            </div>

            {/* count section */}
            <div className={styles.bottom}>
                <div className={styles.stat}>
                    <div className={styles.statCard}>
                        <div className={styles.statNum}>1</div>
                        <div className={styles.statLabel}>Repos</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statNum}>2</div>
                        <div className={styles.statLabel}>Followers</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statNum}>3</div>
                        <div className={styles.statLabel}>Following</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statNum}>4</div>
                        <div className={styles.statLabel}>Gist</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
