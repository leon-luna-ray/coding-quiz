import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);

import App from './App';

root.render(<App />);
