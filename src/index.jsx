import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);

import App from './components/App';

root.render(<App />);
