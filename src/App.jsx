import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { addTodo, removeTodo, toggleTodo } from './store/todos/todos-actions';
import {selectActiveTodos,selectAllTodos} from './store/todos/todos-selectors'

function App() {
	return (
		<div className='App'>
			<h1>React + Redux</h1>
			<NewTodo />
			<TodoList />
		</div>
	);
}

const NewTodo = () => {
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

const TodoList = () => {
	const todos = useSelector(selectAllTodos);
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

export default App;
