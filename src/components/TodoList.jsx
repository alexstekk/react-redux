import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleTodos } from '../store/todos/todos-selectors';
import { selectActiveFilter } from '../store/filters/filters-selectors';
import { toggleTodo, removeTodo } from '../store/todos/todos-actions';

export const TodoList = () => {
	const activeFilter = useSelector(selectActiveFilter);
	const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));
	const dispatch = useDispatch();

	return (
		<ul>
			{todos.map((todo) => {
				return (
					<li key={todo.id}>
						<input
							type='checkbox'
							checked={todo.completed}
							onChange={() => dispatch(toggleTodo(todo.id))}
						/>
						{todo.title}
						<button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
					</li>
				);
			})}
		</ul>
	);
};
