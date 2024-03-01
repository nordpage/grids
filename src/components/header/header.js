import React from 'react';
import styles from './header.module.css';

function Header(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.Filters}>Filters</div>
            <div className={styles.Results}>Results</div>
            <div className={styles.Buttons}>Buttons</div>
        </div>
    );
}

export default Header;