import {combineReducers} from 'redux';
import authenticationReducer from '../../../modules/auth/store/authentication-reducer';

const appReducers = combineReducers({
  authentication: authenticationReducer,
});

export default appReducers;
