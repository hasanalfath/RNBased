import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import appReducers from '../store/reducer';

import storage from 'redux-persist/lib/storage';

export default () => {
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authentication'],
  };

  const persistedReducer = persistReducer(persistConfig, appReducers);
  const store = createStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};
