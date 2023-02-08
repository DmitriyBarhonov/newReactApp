import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import storeRedux from './redux/reduxStore.ts'
import { Provider } from 'react-redux';



    ReactDOM.render(
      <React.StrictMode>
          <BrowserRouter> 
            <Provider store={storeRedux}>
            <App store={storeRedux} appState={storeRedux.getState()} />  
            </Provider>
          </BrowserRouter>
      </React.StrictMode>,
  document.getElementById('root')
    );


// reRender(storeRedux.getState());

// storeRedux.subscribe(()=>{
//   let state = storeRedux.getState();
//   reRender(state);
  
// });






 