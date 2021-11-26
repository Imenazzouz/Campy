import Section2 from './section2';
import react from 'react';
import React, { Component } from 'react';
import Page2 from './page2';
import Images from './images';
import Tabarka from './tbarka';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wether from './wether';
import Drahem from './drahem';
import Jendouba from './Jendouba';
import Haouaria from './Haouaria';
import Zaghouen from './zaghouen';
import Bizerte from './bizerte';
import Nabeul from './nabeul';
import Beja from './beja';
import Tozeur from './Tozeur';
import Menu from './menu';
import ImageGallaryComponent from './ImageSlider';


function App() {
  return (
    <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Menu}/>
            <Route path='/Products' component={ImageGallaryComponent}/>
            <Route path='/page2' component={Page2}/>
            <Route exact path='/'>    
          <Page2 />
          </Route>
          <Route  path='/tabarka'>        
            
          <Tabarka />
          </Route>
          <Route  path='/drahem'>  
          <Drahem />
          </Route>
          <Route  path='/jendouba'>  
          <Jendouba />
          </Route>
          <Route  path='/haouaria'>  
          <Haouaria />
          </Route>
          <Route  path='/zaghouen'>  
          <Zaghouen />
          </Route>
          <Route  path='/bizerte'>  
          
          <Bizerte />
          </Route>
          <Route  path='/nabeul'>  
          
          <Nabeul />
          </Route>
          <Route  path='/beja'>  
          
          <Beja />
          </Route>
          <Route  path='/tozeur'>  
          
         <Tozeur />
          </Route>
            
          </Switch>
        </div>
        </Router>



   
    
   /* <Router>
    <div className="app">
      <div> 
      <Section2 />
      
    
      </div>
      
      <div>
        <Switch>
        <Route exact path='/'>    
          <Page2 />
          </Route>
          <Route  path='/tabarka'>        
            
          <Tabarka />
          </Route>
          <Route  path='/drahem'>  
          <Drahem />
          </Route>
          <Route  path='/jendouba'>  
          <Jendouba />
          </Route>
          <Route  path='/haouaria'>  
          <Haouaria />
          </Route>
          <Route  path='/zaghouen'>  
          <Zaghouen />
          </Route>
          <Route  path='/bizerte'>  
          
          <Bizerte />
          </Route>
          <Route  path='/nabeul'>  
          
          <Nabeul />
          </Route>
          <Route  path='/beja'>  
          
          <Beja />
          </Route>
          <Route  path='/tozeur'>  
          
         <Tozeur />
          </Route>

        </Switch>
        
         
          </div>
        
    </div> 
    </Router> */

  );
}

export default App;




 
   /*<Tabarka />*/
  
