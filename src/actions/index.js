import {SIGNED_IN , SET_GOALS, SET_REMOVED_GOALS, DELETED_GOALS, DELETE_REMOVED_GOALS, DELETE_ALL } from '../constants';
export const logUser = (email) =>
{
    return {
        type: SIGNED_IN,
        email
    }

}

export const setGoals = (goals) => 
{
    return{
        type: SET_GOALS,
        goals
    }
}

export const setRemovedGoals = (goalsRemoved) =>
{
    return {
        type: SET_REMOVED_GOALS,
        goalsRemoved
    }
}

export const deletedGoals = (goalsId) =>
{
    return {
        type: DELETED_GOALS,
        goalsId
    }
}

export const deleteRemovedGoals = (goalsId) =>
{
    return {
        type: DELETE_REMOVED_GOALS,
        goalsId
    }
}

export const deleteAll = () =>
{
    return {
        type: DELETE_ALL
    }
}

