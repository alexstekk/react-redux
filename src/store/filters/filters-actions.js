import { SET_FILTER } from './filters-const';

export const setFilter = (filter) => {
	return {
		type: SET_FILTER,
		filter,
	};
};
