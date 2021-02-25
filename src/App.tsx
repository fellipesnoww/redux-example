import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store';
import Catalog from './components/Catalog';
import Cart from './components/Cart';

function App() {
  
  return (
    <Provider store={store}>
      <Catalog />   
      <Cart />
    </Provider>
  );
}

export default App;
