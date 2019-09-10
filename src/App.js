import React, {Component} from 'react';
import {Provider} from 'react-redux';
import CreateAppContainer from './common/navigation';
import storeCreator from './common/store';
import {PersistGate} from 'redux-persist/integration/react';

const store = storeCreator();
export default class App extends Component {
  render() {
    return (
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <CreateAppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
