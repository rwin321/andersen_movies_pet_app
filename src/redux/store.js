import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export let persistor = persistStore(store);

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// import authSlice from "./slices/authSlice";
// import moviesSlice from "./slices/moviesSlice";
// import storage from "redux-persist/lib/storage";

// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// const rootReducer = {
//   movies: moviesSlice,
//   auth: authSlice,
// };

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// export const store = configureStore({
//   reducer: persistReducer(persistConfig, rootReducer),
//   middleware: getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

// export let persistor = persistStore(store);

// export default {
//   store,
//   persistor,
// };
