import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import CatFacts from './components/CatFacts';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className='App'>
      <h1> Kanye West Quotes </h1>
      <CatFacts />
    </div>
  );
}

export default App;
