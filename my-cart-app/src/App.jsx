import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Cart from './components/Cart';
import './App.css';  

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
