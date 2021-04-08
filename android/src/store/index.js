import RootReducers from '../reducers/RootReducer';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authPersistConfig = {
    key: 'exc',
    storage: AsyncStorage,
    // blacklist: ['exc'],
};

const persistedReducer = persistReducer(authPersistConfig, RootReducers);



export const store = createStore(
    persistedReducer,
    applyMiddleware(Thunk)
);
export const persistor = persistStore(store);