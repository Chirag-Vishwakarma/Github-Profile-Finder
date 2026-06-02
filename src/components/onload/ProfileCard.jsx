import styles from './ProfileCard.module.css';

function fmtDate(d) {
    if (!d) return '';
    return new Date(d).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        date: 'numeric',
    });
}

export function ProfileCard({ user }) {
    return (
        <div className={styles.card}>
            {/* profile detail */}
            <div className={styles.top}>
                <img src={user.avatar_url} className={styles.avatar} />

                <div className={styles.info}>
                    <div className={styles.name}>{user.name}</div>
                    <div className={styles.login}>@{user.login}</div>
                    <div className={styles.bio}>{user.bio}</div>

                    <div className={styles.meta}>
                        {user.location && (
                            <span className={styles.metaItem}>
                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                {user.location}
                            </span>
                        )}
                        {user.company && (
                            <span className={styles.metaItem}>
                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                                {user.company}
                            </span>
                        )}
                        {user.blog && (
                            <span className={styles.metaItem}>
                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                </svg>
                                <a
                                    className={styles.linkText}
                                    href={
                                        user.blog.startsWith('http')
                                            ? user.blog
                                            : `http://${user.blog}`
                                    }
                                    target="_blank"
                                >
                                    {user.blog.replace(/^https?:\/\//, '')}
                                </a>
                            </span>
                        )}

                        <span className={styles.metaItem}>
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <rect
                                    x="3"
                                    y="4"
                                    width="18"
                                    height="18"
                                    rx="2"
                                />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            Joined {fmtDate(user.created_at)}
                        </span>
                    </div>

                    <a
                        className={styles.linkBtn}
                        href={user.html_url}
                        target="_blank"
                    >
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
                    </a>
                </div>
            </div>

            {/* count section */}
            <div className={styles.bottom}>
                <div className={styles.stat}>
                    <div className={styles.statCard}>
                        <div className={styles.statNum}>
                            {user.public_repos}
                        </div>
                        <div className={styles.statLabel}>Repos</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statNum}>{user.followers}</div>
                        <div className={styles.statLabel}>Followers</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statNum}>{user.following}</div>
                        <div className={styles.statLabel}>Following</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statNum}>
                            {user.public_gists}
                        </div>
                        <div className={styles.statLabel}>Gist</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
