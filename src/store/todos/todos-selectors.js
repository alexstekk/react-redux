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
