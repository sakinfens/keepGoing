// src/App.js
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import {PaperProvider} from 'react-native-paper';

const App = () => (
  <Provider store={store}>
    <PaperProvider>
      <PersistGate loading={null} persistor={persistor}>
        <HomeScreen />
      </PersistGate>
    </PaperProvider>
  </Provider>
);

export default App;
