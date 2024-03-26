export const selectAllTodos = (state) => state.todos;

export const selectActiveTodos = (state) => state.todos.filter(todo => !todo.completed );