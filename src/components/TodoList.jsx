import { useSelector, useDispatch } from 'react-redux';
import { onToggleTodo } from '../Store/todos/todos-actions';

export const TodoList = () => {
	const { list: todos, status, error } = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	return (
		<div>
			<p>Todos: {todos.length}</p>
			<p>Status: {status}</p>
			{error && <p>{error}</p>}
			{todos.slice(0, 5).map((todo) => (
				<li key={todo.id}>
					<input
						type='checkbox'
						checked={todo.completed}
						onChange={() => {dispatch(onToggleTodo(todo.id))}}
					/>
					{todo.title}
					{/* <button>Remove Todo</button> */}
				</li>
			))}
		</div>
	);
};
