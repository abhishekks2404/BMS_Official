import React from 'react';
import ReactDOM from 'react-dom';

import '/Users/abhishek_admin/Desktop/BC_APPLICATION/bc-app/src/index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);