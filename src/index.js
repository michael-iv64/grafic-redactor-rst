import React from 'react';
import ReactDOM from 'react-dom';


import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './redux/reducers/rootReducer';
import MainRouter from './router/MainRouter';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from '@design-system-rt/rtk-ui-kit';

const store = createStore(rootReducer, compose(
  applyMiddleware(
      thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))


ReactDOM.render(
  // <ThemeProvider themeName="dark" themeConfig={{
  //   baseColors: {
  //     primary2: '255,0,0',
  //   },
  //   greyScale: {
  //     black: '27,16,22'
  //   }
  // }}>
    <Provider store={store}>
    <ThemeProvider themeName="dark">
      <MainRouter />
        {/* <App /> */}
      </ThemeProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
