import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { put, takeLatest } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import axios from 'axios';


const petReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PETS':
      return action.payload
    default:
      return state;
  }
};

const ownerReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_OWNERS':
      return action.payload
    default:
      return state;
  }
};

function* addOwner(action) {
    try {
      //posts new owner
      yield axios.post('/owner', action.payload);
      //requests the owners again
      yield put({ type: 'FETCH_OWNERS' })

  } catch(error){
    console.log('error in posting owner', error);
  }};

function* fetchOwners() {
    try {
      //gets owners
      let owners = yield axios.get('/owner');
      //sets the reducer
      yield put({ type: 'SET_OWNERS', payload: owners })

  } catch(error){
    console.log('error in getting owners', error);
  }};



function* watcherSaga() {
  yield takeLatest('ADD_OWNER', addOwner);
  yield takeLatest('FETCH_OWNERS', fetchOwners)
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    petReducer,
    ownerReducer
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga);




ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
