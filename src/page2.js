import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Images from './images';
import './page2.css';
import Wether from './wether';
import Drahem from './drahem';
import Jendouba from './Jendouba';
import Haouaria from './Haouaria';
import Zaghouen from './zaghouen';
import Bizerte from './bizerte';
import Nabeul from './nabeul';
import Beja from './beja';
import Tozeur from './Tozeur';
import Tabarka from './tbarka';

import Menu from './menu';
const Page2 = () => {
    return ( 
     

    <div className="Page2">
      <div className="top-menu">
           <a className="bar-item"  href="/" > GOUV   </a>
           <a className="bar-item" href="" > SITES   </a>
           <a className="bar-item" href="#" > PLACES    </a>
  
     </div>

        <div className="container3">

        <div className='right-menu'>
                <a className="bar-item"  href="/Tabarka" > Tabarka    </a>
                <a className="bar-item" href="/Drahem" > El Haouaria   </a>
                <a className="bar-item" href="/jendouba" > Jendouba   </a>    
                <a className="bar-item" href="/Haouaria" >  Ain Drahem  </a>   
                <a className="bar-item" href="/zaghouen" > Zaghouen   </a>
                <a className="bar-item" href="/bizerte" > Bizerte   </a> 
                <a className="bar-item" href="/nabeul" > Nabeul   </a>   
                <a className="bar-item" href="/beja" > Beja   </a> 
                <a className="bar-item" href="/tozeur" > Tozeur   </a> 
                  
        </div>
        <div className ="images">
        <Images />
        </div>
           
   </div>
     <div> <div>
          <Router>
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
        
        </Router> 
          </div>
        
     
   </div>
   </div>
  
   


     );
}
 
export default Page2;