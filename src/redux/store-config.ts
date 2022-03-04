import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer-config';
import rootSaga from './middleware-config';
/**
 * Store configuration file.
 * library used (redux-persist, redux-logger, redux-saga).
 * @constant persistConfig keep the reducer in 'whitelist' to save it to persisted state.
 */

//creates a Redux middleware and connects the sagas to the Redux store
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    timeout: 15000,
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['login'], // socketConnect , landingDevice
    //blacklist: [''],
};
/*Middleware: Redux Persist Persisted Reducer */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/* Redux: Store */
const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware, thunk, createLogger()),
);
/* Middleware: Redux redux-saga  */
sagaMiddleware.run(rootSaga);

/* Middleware: Redux Persist Persister */
let persistor = persistStore(store);

export { store, persistor };
