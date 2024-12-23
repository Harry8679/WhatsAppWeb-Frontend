import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/userSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';
import chatSlice from '../features/chatSlice';

// Save User Only Filter
// const saveUserOnlyFilter = createFilter('user', ['user.user']);
const saveUserOnlyFilter = createFilter('user', ['user']);

// Persist config
const persistConfig = {
    key: 'user',
    storage,
    whitelist: ['user'],
    transforms: [saveUserOnlyFilter]
}

const rootReducer = combineReducers({
    user: userSlice,
    chat: chatSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: true,
});

export const persistor = persistStore(store);
