import React from "react";
import StackNavigation from "./src/routes/Stack";
import { PersistGate } from 'redux-persist/integration/react';
import { Store, persistor } from './src/config/Redux/store';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackNavigation />
      </PersistGate>
    </Provider>
  )
}
export default App;