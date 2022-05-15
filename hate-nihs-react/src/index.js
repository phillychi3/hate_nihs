import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Up from "./components/navbar";
import Sform from "./components/sendform";
import 'bootstrap/dist/css/bootstrap.css';
import { positions, Provider ,transitions} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.TOP_RIGHT,
  offset: '70px',
  transition: transitions.FADE
};

ReactDOM.render(
  <React.StrictMode>
    <div class="all">
      <Up />
      <div class="form">
      <Provider template={AlertTemplate} {...options}>
        <Sform />
      </Provider>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


