import React from 'react';

import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer class={styles.footer}>
            <div class="container">
                <span class="text-muted">
                    Place sticky footer content here.
                </span>
            </div>
        </footer>
    );
}
