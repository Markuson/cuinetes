/**
 * Store config file, structure the store.
 */
import { combineReducers } from 'redux';
// import loginReducer from '../core/login/reducers/login-reducer';
/* Redux: Root Reducer 

    has all reducers which are combined using
    combineReducers and exported as rootReducer
*/
const rootReducer = (state, action) => {
  //Check if the action is Login Reset.
  // if (action.type === 'LOGIN_RESET') {
  //   /* Remove all the data from Store except the below Objects
  //    * If any data needs to be persisted even after logout
  //    * that relevant object can be taken out below and specify it in the redux state initializer
  //    */
  //   let { login, settings, notification } = state;
  //   return appReducer({ login, settings, notification }, action);
  // }
  return appReducer(state, action);
};

const appReducer = combineReducers({
  // login: loginReducer,
});

export default rootReducer;
