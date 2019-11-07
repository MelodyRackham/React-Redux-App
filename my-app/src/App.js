import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware());

function App() {
  return (
    <div className='App'>
      <h1> Kanye West Quotes </h1>
    </div>
  );
}

export default App;
