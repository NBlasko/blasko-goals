import { combineReducers } from 'redux';
import  goals  from './reducer_goals';
import  user  from './reducer_user';
import  goalsRemoved  from './reducer_goals_removed';
export default combineReducers(
    {goals, user, goalsRemoved }
);