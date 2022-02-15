import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from "./modules/slice/rootSlice";
import rootSaga from './modules/sagas/rootSaga';
import history from "./utils/history";



const sagaMiddleware = createSagaMiddleware({
    context: { history: history },
});
const initialState = {};


const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, logger],
    devTools: true,
    preloadedState: initialState,
});

sagaMiddleware.run(rootSaga);

export default store;