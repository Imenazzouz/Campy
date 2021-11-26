import { BrowserRouter, Route, Link } from "react-router-dom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import './zaghouen.css';
import GoogleMaps from './map';
import Wether from './wether'

const Zaghouen = () => {
    return ( 
        
       <div>
   
    <div className="top-menue">
    <a className="bar-item"  href="/" > GOUV   </a>
              <a className="bar-item" href="#" > SITES   </a>
              <a className="bar-item" href="#" > PLACES    </a>

      



    </div>
        
    <div className="containerx">
      
      <div className="tab-title">
               Zaghouen
          </div>
      <div className ="imagess">
          
     <img src={'https://www.tunisienumerique.com/wp-content/uploads/2019/08/haouaria-1.jpg'  } height='500px'  />
     
      </div>
      <div className="description">  
      Située au niveau de la partie nord-est, 
      la montagne de Zaghouan dispose de plusieurs plateaux où vous pouvez installer vos tentes et camper en toute sécurité.
     </div>
     <div className="mapss">
         <p> location </p>
         
         <GoogleMaps />
        
    
 
     </div>
     
     <div className="wether">
         <p> weather </p>
     <Wether />
     </div>

    
 </div>
 </div>

     );
}
 
export default Zaghouen;