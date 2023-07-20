import './index.css';

import { DevTools, FormatSimple, Tolgee, TolgeeProvider } from '@tolgee/react';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const tolgee = Tolgee()
  .use(
    DevTools({
      credentials: {
        apiUrl: 'https://app.tolgee.io',
        apiKey: 'tgpak_gmydons7nnvgcntumzrtc3tvgizws3ztorshc4jynn2ds3zxou',
        projectId: '3076',
      },
    }),
  )
  .use(FormatSimple())
  .init({
    language: 'en',
    apiUrl: 'https://app.tolgee.io',
    apiKey: 'tgpak_gmydons7nnvgcntumzrtc3tvgizws3ztorshc4jynn2ds3zxou',
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
