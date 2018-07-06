import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { AppComponent } from './app';
import './index.scss';
import registerServiceWorker from './register-service-worker';
import { rootReducer } from './store';

ReactDOM.render(
  <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
    <AppComponent />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
