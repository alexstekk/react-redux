export const selectAllTodos = (state) => state.todos;

export const selectActiveTodos = (state) => state.todos.filter((todo) => !todo.completed);

export const selectVisibleTodos = (state, filter) => {
	switch (filter) {
		case 'All': {
			return state.todos;
		}
		case 'Active': {
			return state.todos.filter((todo) => !todo.completed);
		}
		case 'Completed': {
			return state.todos.filter((todo) => todo.completed);
		}
		default: {
			return state.todos;
		}
	}
};
