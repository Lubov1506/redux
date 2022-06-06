import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initState = {
  count: 0,
  step: 1
}

 const reducer = (state = initState, action) => {
  switch(action.type){
    case 'INCREMENT_COUNT':{
     return {...state,
      count: state.count + state.step}
    }
    case 'DECREMENT_COUNT':{
      return {...state,
       count: state.count - state.step}
     }
     case 'SET_STEP' : {
       return {
         ...state, 
         step: action.value
       }
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

