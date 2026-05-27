import { useState } from 'react';
import { Header } from './components/Header.jsx';
import styles from './App.module.css';

function App() {
    return (
        <div class={styles.app}>
            <Header />
        </div>
    );
}

export default App;
