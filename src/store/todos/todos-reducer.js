import {
	ADD_TODO,
	ADD_TODOS,
	SET_ERROR,
	SET_LOADING,
	TOGGLE_TODO,
} from './todos-actions';

const initialState = {
	status: 'idle',
	list: [],
	error: null,
};

export const todosReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case TOGGLE_TODO: {
			return {
				...state,
				list: state.list.map((todo) =>
					todo.id === payload ? { ...todo, completed: !todo.completed } : todo
				),
			};
		}
		case ADD_TODO: {
			return { ...state, list: [...state.list, payload] };
		}
		case ADD_TODOS: {
			return {
				...state,
				list: payload,
				status: 'fulfilled',
			};
		}
		case SET_LOADING: {
			return {
				...state,
				status: 'loading',
				error: null,
			};
		}
		case SET_ERROR: {
			return {
				...state,
				status: 'rejected',
				error: payload,
			};
		}
		default: {
			return state;
		}
	}
};
