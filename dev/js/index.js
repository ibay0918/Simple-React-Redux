import 'babel-polyfill'; //makes compatable with older browser
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux'; //wraap things in {} to import single variable
import allReducers from './reducers/index';
import App from './components/app'


const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  ,document.getElementById('root'));
