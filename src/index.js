import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './context/context';

import { StyledEngineProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
    <StyledEngineProvider injectFirst>
        <Context>
        <App/> 
        </Context>
          
  
       </StyledEngineProvider>
     
);



