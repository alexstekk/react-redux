import './App.css';
import { Filters } from './components/Filters';
import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';

function App() {
	return (
		<div className='App'>
			<h1>React + Redux</h1>
			<NewTodo />
			<Filters />
			<TodoList />
		</div>
	);
}

export default App;
