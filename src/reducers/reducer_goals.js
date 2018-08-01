import { SET_GOALS, DELETE_ALL, DELETED_GOALS } from '../constants';

export default (state = [], action) => {
    switch (action.type) {

        case SET_GOALS:
            const { goals } = action;
            return [...state, goals];

        case DELETED_GOALS:
            const { goalsId } = action;
            const goalsFiltered = state.filter(item => item.serverKey !== goalsId);
            return goalsFiltered;
        case DELETE_ALL:
            return [];   
        default:
            return state;
    }
}
