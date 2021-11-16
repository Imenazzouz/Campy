import Section2 from './section2';
import react from 'react';
import React, { Component } from 'react';
import Page2 from './page2';
import Images from './images';
import Tabarka from './tbarka';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wether from './wether';
function App() {
  return (
    <Router>
    <div className="app">
      <div> 
      
    
      </div>
      <div>
        <Switch>
        <Route exact path='/'>    
          <Page2 />
          </Route>
          <Route  path='/tabarka'>    
          <Tabarka />
          </Route>

        </Switch>
        
         
          </div>
        
    </div> 
    </Router>    

  );
}

export default App;




  /*<Section2 />*/
   /*<Tabarka />*/
  
