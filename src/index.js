import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initState = {
  count: 0
}
const reducer = (state = initState, action) => {
  switch(action.type){
    case 'INCREMENT_COUNT':{
     return {...state,
      count: state.count + 1}
    }
    case 'DECREMENT_COUNT':{
      return {...state,
       count: state.count - 1}
     }
     default: {
       return state
     }
  }
};
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>  
  </React.StrictMode>
);

