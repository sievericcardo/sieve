import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import { applyMiddleware, createStore } from 'redux';
import { store } from './store';
import thunk from 'redux-thunk';

import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';

import theme from './components/theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// import rootReducer from './store/reducers/rootReducers';

// Creation of the redux store, we need to pass the middleware for the thunk as well
// const store = createStore(rootReducer, applyMiddleware(thunk));

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
