import './App.css';
import { TodoList } from './components/TodoList';
import { UserList } from './components/UserList';
import { useEffect } from 'react';
import { loadUsers } from './Store/users/users-actions';
import { loadTodos } from './Store/todos/todos-actions';
import { useDispatch } from 'react-redux';
import { NewTodo } from './components/NewTodo';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadUsers());
		dispatch(loadTodos());
	}, [dispatch]);
	return (
		<>
			<h1>React + Redux</h1>
			<NewTodo />
			<TodoList />
			<UserList />
		</>
	);
}

export default App;
