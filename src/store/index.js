import { createStore } from 'redux';
import { rootReducer } from './root-reducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
