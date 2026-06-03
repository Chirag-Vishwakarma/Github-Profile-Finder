import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import styles from './ThemeChanger.module.css';

export function ThemeChanger({ theme, setTheme }) {
    function themehandler() {
        setTheme((prev) => (prev == 'light' ? 'dark' : 'light'));
    }

    const dataTooltip = theme == 'light' ? 'On Dark mode' : 'On Light mode';

    return (
        <span
            className={styles.theme}
            data-tooltip={dataTooltip}
            onClick={themehandler}
        >
            {theme === 'light' ? (
                <Moon size={30} fill="#black" strokeWidth="0.5" />
            ) : (
                <Sun size={35} fill="#FFFF00" strokeWidth="0.5" />
            )}
        </span>
    );
}
// e1ff00
// facc15
