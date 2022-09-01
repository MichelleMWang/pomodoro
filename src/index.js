import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Timer from './Timer'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <Timer />
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

