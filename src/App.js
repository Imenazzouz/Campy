import Section2 from './section2';
import react from 'react';
import React, { Component } from 'react';
import Page2 from './page2';
import Images from './images';
import Tabarka from './tbarka';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Wether from './wether';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <div>
      <Tabarka />
        
        <Switch>

        <Route exact path="/" Component={Page2} />
          <Route  path="/Tabarka" Component={Tabarka} />
          </Switch>
          </div>
          </BrowserRouter>
    <div>
 
 
     
     


    
    </div>
    </div>
  );
}

export default App;
/*<Page2 />*/



  /*<Section2 />*/
  
