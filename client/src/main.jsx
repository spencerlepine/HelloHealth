import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App.jsx';
import { MainProvider } from './context/MainContext.jsx';

ReactDOM.render(
  <Router>
    <MainProvider>
      <App />
    </MainProvider>
  </Router>,
  document.getElementById('root'),
);
