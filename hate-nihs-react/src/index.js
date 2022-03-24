import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Up from "./components/navbar";
import Sform from "./components/sendform";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <div class="all">
      <Up />
      <div class="form">
        <Sform />
      </div>
      
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);


