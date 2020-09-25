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

function* fetchPets() {
  try {
    const response = yield axios.get('/pets')
    console.log(response.data);

    yield put({ type: 'SET_PETS', payload: response.data});
  } catch (err) {
    console.log('Error in fetchPets saga');
    
  }
}

function* addPet(action) {
  console.log(action.payload);
  try {
    yield axios.post('/pets', action.payload);

    // yield put({ type: 'FETCH_PETS'});
  } catch (err) {
    console.log('Error in addPet saga', err);
    
  }
}

function* addOwner(action) {
    try {
      //posts new owner
      console.log(action.payload)
      yield axios.post('/owner', action.payload);
      //requests the owners again
      yield put({ type: 'FETCH_OWNERS' })

  } catch(error){
    console.log('error in posting owner', error);
  }};

function* fetchOwners() {
    try {
      //gets owners
      let response = yield axios.get('/owner');
      //sets the reducer
      yield put({ type: 'SET_OWNERS', payload: response.data })

  } catch(error){
    console.log('error in getting owners', error);
  }};

function* deleteOwner(action) {
    try {
      //sends delete request with owner id
      yield axios.delete(`/owner/${action.payload}`);
      //requests the owners again
      yield put({ type: 'FETCH_OWNERS' })

  } catch(error){
    console.log('error in deleting owner', error);
  }};

function* checkIn(action) {
  try {
    console.log(action.payload);
    yield axios.put(`/pets/${action.payload}`, {check: "in"})
    yield put({ type: 'FETCH_PETS' })
  } catch (error) {
    console.log('error in checking in pet', error);
  }  
}

function* checkOut(action) {
  try {
    console.log(action.payload);
    yield axios.put(`/pets/${action.payload}`, {check: "out"})
    yield put({ type: 'FETCH_PETS' })
  } catch (error) {
    console.log('error in checking out pet', error);
  }  
}

function* watcherSaga() {
  yield takeLatest('ADD_OWNER', addOwner);
  yield takeLatest('FETCH_OWNERS', fetchOwners);
  yield takeLatest('CHECK_IN', checkIn)
  yield takeLatest('CHECK_OUT', checkOut)
  yield takeLatest('FETCH_PETS', fetchPets);
  yield takeLatest('ADD_PET', addPet);

  yield takeLatest('DELETE_OWNER', deleteOwner);

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
