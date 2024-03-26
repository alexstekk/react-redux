import { useSelector, useDispatch } from 'react-redux';
import { selectActiveFilter } from '../store/filters/filters-selectors';
import { setFilter } from '../store/filters/filters-actions';

export const Filters = () => {
	const dispatch = useDispatch();
	const activeFilter = useSelector(selectActiveFilter);

	return (
		<div>
			<button
				onClick={()=>{dispatch(setFilter('All'))}}
				style={{ color: activeFilter === 'All' ? 'red' : 'black' }}
			>
				All
			</button>
			<button
				onClick={()=>{dispatch(setFilter('Active'))}}
				style={{ color: activeFilter === 'Active' ? 'red' : 'black' }}
			>
				Active
			</button>
			<button
				onClick={()=>{dispatch(setFilter('Completed'))}}
				style={{ color: activeFilter === 'Completed' ? 'red' : 'black' }}
			>
				Completed
			</button>
		</div>
	);
};
