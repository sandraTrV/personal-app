import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import moon from './moon.png';
import sun from './sun.png';

import PageTop from './PageTop';
import PageContent from './PageContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import {useState, useEffect} from 'react';



function App() {
  // used to know which project is currently displayed
  const [currentProject, setCurrentProject] = React.useState(0);
  return (
    <div className="App">
      <PageTop/>
      <PageContent/>
      {/* <div className='a'>
      <div className='c'></div>
      </div> */}
      
      {/* <header className="App-header"> */}
      
      {/* <Grid container spacing={2} >
          
          <Grid item xs={12} md={6}>
          <h2>Gmail</h2>
          </Grid>

          <Grid item xs={12} md={6}>
           <h2>LinkedIn</h2>
          </Grid>
      
      </Grid> */}

      
        {/* <img src={moon} className="App-logo" alt="logo" />
        <img src={sun} className="App-logo" alt="logo" /> */}
        
       
      {/* </header> */}
    </div>
  );
}

export default App;
