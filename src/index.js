import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={{}}>
    <Provider store={store}>
      <BrowserRouter basename="/myportfolio">
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);
