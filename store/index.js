import {applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';

import RobotReducer from './Reducer/RobotsReducer';
import RobotSaga from './Saga/RobotSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const reducer = {
  robot: RobotReducer,
};

// The store now has redux-thunk added and the Redux DevTools Extension is turned on
const store = configureStore({reducer: RobotReducer, middleware: middlewares});

sagaMiddleware.run(RobotSaga);

export {store};
