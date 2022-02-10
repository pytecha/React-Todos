import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Container from './todos/Container';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Container/>,
  document.getElementById('root')
);
reportWebVitals();