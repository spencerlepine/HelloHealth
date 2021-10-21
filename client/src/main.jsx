import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App.jsx';
import { MainProvider } from './context/MainContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import './index.css';

ReactDOM.render(
  <Router>
    <MainProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MainProvider>
  </Router>,
  document.getElementById('root'),
);
