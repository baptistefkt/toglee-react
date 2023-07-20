import './index.css';

import { DevTools, FormatSimple, Tolgee, TolgeeProvider } from '@tolgee/react';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const tolgee = Tolgee()
  .use(
    DevTools({
      credentials: {
        apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
        apiKey: import.meta.env.VITE_TOLGEE_API_KEY,
        projectId: '3076',
      },
    }),
  )
  .use(FormatSimple())
  .init({
    language: 'en',
    apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
    apiKey: import.meta.env.VITE_TOLGEE_API_KEY,
  });

ReactDOM.render(
  <React.StrictMode>
    <TolgeeProvider
      tolgee={tolgee}
      fallback="Loading..." // loading fallback
    >
      <App />
    </TolgeeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
