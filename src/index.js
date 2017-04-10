import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';			//loading main component
import { createStore } from 'redux';

import reducer from './reducers';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// 取得 local data _username_recipes 的既有資料
const persistedState = localStorage.getItem(' _username_recipes') ? JSON.parse(localStorage.getItem(' _username_recipes')) : {}
/*
const data = {
	user: {},
	product: {},
	order:{}
}
*/
// above means if yes then return json.. if not return {}
// original: (data ===1) ? if yes return -->'yes'message :or else return-->'no'
/***
	createStore - https://rhadow.github.io/2015/07/30/beginner-redux/
*/
const store = createStore(reducer, persistedState);
//reducer is 防呆機制 , e.g., preventing two duplcate variables/
// reducer will perform/execute certain actions with the variable in the store.  
// store中數據有任何異動時，觸發的callback
store.subscribe( ()=> {
	//覆蓋到原本的資料庫中
  	localStorage.setItem(' _username_recipes', JSON.stringify(store.getState()))
})
/*
above localstorage is object(object can be many things, 
they look very different) and .setItem is method. 
	tyepof(store)
	console.log(typeof(aa))
*/

/*above is the block/closure system in es6, preventing the 
variable in it being polluted by the global enviornment (e.g., fb example)*/
ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
);

//redux just means we will store wutever data
// (whtther its from the server or local storage)
// to store(which is stored in bundle.js)
// the guaridan is reducer
// the connector(wire)is provider