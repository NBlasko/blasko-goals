import { SET_REMOVED_GOALS, DELETE_REMOVED_GOALS,   DELETE_ALL } from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SET_REMOVED_GOALS:
            const { goalsRemoved } = action;
            return [...state, goalsRemoved];

        case DELETE_REMOVED_GOALS:
            const { goalsId } = action;
            const goalsFiltered = state.filter(item => item.serverKeyElement !== goalsId);
            return goalsFiltered;
        case DELETE_ALL:
            return [];
        default:
            return state;
    }
}