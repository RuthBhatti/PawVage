// import {configureStore} from '@reduxjs/toolkit';

// import MyUserCArt from './userdata';

// const mystore = configureStore({
//   reducer: {
//     user: MyUserCArt.reducer,
//   },
// });

// export default mystore;

import {configureStore} from '@reduxjs/toolkit';
import storage from '@react-native-async-storage/async-storage';

import {persistReducer, persistStore} from 'redux-persist';

import MyUserCart from './userdata';

// Persist config
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, MyUserCart.reducer);

// Configure store with persisted reducer
const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
});

// Create a persistor
const persistor = persistStore(store);

// Export the store and persistor
export {store, persistor};
