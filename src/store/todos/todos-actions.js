import { client } from '../../api';

export const ADD_TODOS = '@@todos/ADD_TODOS';
export const SET_LOADING = '@@todos/SET_LOADING';
export const SET_ERROR = '@@todos/SET_ERROR';
export const ADD_TODO = '@@todos/ADD_TODO';
export const TOGGLE_TODO = '@@todos/TOGGLE_TODO';

const addTodos = (todos) => ({ type: ADD_TODOS, payload: todos });

const setLoading = () => ({ type: SET_LOADING });

const setError = (error) => ({
	type: SET_ERROR,
	payload: error,
});

const addTodo = (todo) => ({
	type: ADD_TODO,
	payload: todo,
});

const toggleTodo = (todoId) => ({ type: TOGGLE_TODO, payload: todoId });

export const loadTodos = () => (dispatch) => {
	dispatch(setLoading());
	client
		.get('https://jsonplaceholder.typicode.com/todos')
		.then((data) => dispatch(addTodos(data)))
		.catch((err) => dispatch(setError(err)));
};

export const createTodo = (title) => (dispatch) => {
	client
		.post('https://jsonplaceholder.typicode.com/todos', {
			body: title,
			completed: false,
			userId: 1,
		})
		.then((newTodo) => dispatch(addTodo(newTodo)))
		.catch((err) => dispatch(setError(err)));
};

export const onToggleTodo = (todoId) => (dispatch) => {
	client
		.patch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
			completed: true,
		})
		.then(dispatch(toggleTodo(todoId)))
		.catch((err) => dispatch(setError(err)));
};
