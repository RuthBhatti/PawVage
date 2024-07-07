import {View, StatusBar, Text} from 'react-native';
import React from 'react';
import Root from './src/navigation';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{flex: 1}}>
          <StatusBar
            backgroundColor="#ffffff"
            translucent
            barStyle="dark-content"
          />
          <Root />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
