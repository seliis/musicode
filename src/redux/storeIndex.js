// import toolkit of redux
import {
    configureStore,
    combineReducers
} from "@reduxjs/toolkit"

// import redux-persist
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist"

// must be declared only "storage" or occur error.
import storage from "redux-persist/lib/storage" 

// import each reducers
import storeHeader from "./storeHeader"
import storeApp from "./storeApp"

// make store and export
export const Store = configureStore({
    reducer: persistReducer(
        {
            key: "root",
            version: 1,
            storage
        },
        combineReducers(
            {
                app: storeApp,
                header: storeHeader
            }
        )
    ),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        }
    )
})

// make persistor and export (using const or let?)
export const Persistor = persistStore(
    Store
)