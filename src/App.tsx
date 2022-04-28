import React from 'react';

import logo from 'src/logo.svg';
import styles from 'src/App.module.scss';

function App() {
  const url: string = 'https://reactjs.org';
  
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          Edit
          {' '}
          <code>
            src/App.js
          </code>
          {' '}
          and save to reload.
        </p>
        <a
          className={styles['App-link']}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
