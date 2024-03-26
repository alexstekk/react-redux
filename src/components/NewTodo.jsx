import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todos/todos-actions';

export const NewTodo = () => {
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTodo(e.target.title.value));
		e.target.reset();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='title'
			/>
			<button>Add todo</button>
		</form>
	);
};
