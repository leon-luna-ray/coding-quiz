import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
const container = document.getElementById('app');
const root = createRoot(container);

import App from './App';

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
