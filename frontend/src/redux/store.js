// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./userSlice";

// const store = configureStore({
//     reducer:{
//         user:userSlice
//     }
// })

// export default store


// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import userReducer from "./slices/userSlice";
// import userSlice from "./userSlice";

// const rootReducer = combineReducers({
//     user:userSlice
// })

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, userReducer);
// export const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== "production",
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
//       },
//     }),
// });

// export const persistor = persistStore(store);

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    FLUSH, PAUSE,
    PERSIST, persistReducer, persistStore, PURGE,
    REGISTER, REHYDRATE
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./userSlice";

// Combine reducers
const rootReducer = combineReducers({
    user: userSlice,
});

const persistConfig = {
    key: "Nep-ai",
    storage:storage.default, 
    whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);