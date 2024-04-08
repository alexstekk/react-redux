import { ADD_TODOS } from './todos-actions';

export const todosReducer = (state = [], { type, payload }) => {
	switch (type) {
		case ADD_TODOS: {
			return payload;
		}
		default: {
			return state;
		}
	}
};
