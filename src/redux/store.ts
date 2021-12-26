import {createStore, applyMiddleware} from "redux";
import RootReducer from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }

const enhancers = process.env.NODE_ENV === 'production'
? applyMiddleware(thunk)
: composeWithDevTools(applyMiddleware(thunk));
const persistedReducer = persistReducer(persistConfig, RootReducer)
const Store = createStore(persistedReducer, enhancers);

export type RootStore = ReturnType<typeof RootReducer>
export let Persistor = persistStore(Store)
export default Store