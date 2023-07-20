import './App.css';

import { useTolgee, useTranslate } from '@tolgee/react';
import React, { useState } from 'react';

import logo from './logo.svg';

function App() {
  const { changeLanguage, getLanguage } = useTolgee(['language']);
  const { t } = useTranslate();
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <select onChange={(e) => changeLanguage(e.target.value)} value={getLanguage()}>
          <option value="en">En</option>
          <option value="fr">Fr</option>
        </select>
        <p className="header">
          🚀 Vite + React + Typescript 🤘 & <br />
          Eslint 🔥+ Prettier
        </p>

        <div className="body">
          <button onClick={() => setCount((count) => count + 1)}>
            🪂 Click me : {count}
          </button>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </div>
      </header>
      <p>{t('main.paragraph')}</p>
      <button>{t('main.button.changeLanguage')}</button>
    </div>
  );
}

export default App;
