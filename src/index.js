import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Root } from './Root';
import { configureStore } from './store/';

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<Root store={store} />
	</StrictMode>
);
