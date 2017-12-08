import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import AciveUserReducer from './reducer-active-user';

//this is where you place all of the reducer files
const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
//movies: MovieReducer
});

export default allReducers;
