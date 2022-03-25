import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

