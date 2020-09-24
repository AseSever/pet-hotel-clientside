import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();

function* fetchPets() {
  try {
    const response = yield axios.get('/pets')
    console.log(response.data);

    yield put({ type: 'SET_PETS', payload: response.data})
  } catch (err) {
    console.log('Error in fetchPets saga');
    
  }
}


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

const store = createStore(
  combineReducers({
    petReducer,
    ownerReducer
  }),
  applyMiddleware(sagaMiddleware, logger)
);





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
