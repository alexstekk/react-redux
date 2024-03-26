import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './todos-const';

//action creators
export const addTodo = (title) => {
	return {
		type: ADD_TODO,
		title,
	};
};

export const removeTodo = (id) => {
	return {
		type: REMOVE_TODO,
		id,
	};
};

export const toggleTodo = (id) => {
	return {
		type: TOGGLE_TODO,
		id,
	};
};
