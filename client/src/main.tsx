import React from 'react';
import { createRoot } from 'react-dom/client';
import { CivicAuthProvider } from '@civic/auth/react';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const clientId = import.meta.env.VITE_CIVIC_AUTH_CLIENT_ID;

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <CivicAuthProvider clientId={clientId}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CivicAuthProvider>
  </React.StrictMode>
);
