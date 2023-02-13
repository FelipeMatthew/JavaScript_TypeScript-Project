import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistReducers = persistReducer(
    {
      key: 'APICONSUME',
      storage,
      whitelist: ['auth'], // nome da pasta
    },
    reducers
  );

  return persistReducers;
};
