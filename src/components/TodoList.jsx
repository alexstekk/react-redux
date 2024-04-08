import { useSelector } from 'react-redux';

export const TodoList = () => {
	const todos = useSelector((state) => state.todos);
	return (
		<div>
			Todos: {todos.length}
		</div>
	);
};
