import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducers from './reducers';
import { authSaga } from '../services/templates';

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(logger, saga),
});

const persistor = persistStore(store);
saga.run(authSaga);

export { store, persistor };
