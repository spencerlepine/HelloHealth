import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App.jsx';
import { MainProvider } from './context/MainContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

ReactDOM.render(
  <Router>
    <AuthProvider>
      <MainProvider>
        <App />
      </MainProvider>
    </AuthProvider>
  </Router>,
  document.getElementById('root'),
);
