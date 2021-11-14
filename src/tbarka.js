import { BrowserRouter, Route, Link } from "react-router-dom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import './tabarka.css';
import GoogleMaps from './map';
import Wether from './wether'

const Tabarka = () => {
    return ( 
       
    <div className="container3">
    <div className="top-menu">
    <a className="bar-item"  href="#" > GOUV   </a>
              <a className="bar-item" href="#" > SITES   </a>
              <a className="bar-item" href="#" > PLACES    </a>

      



    </div>
      <div className='right-menu'>
          
              <a className="bar-item"  href="#" > photos    </a>
              <a className="bar-item" href="#" > videos    </a>
              <a className="bar-item" href="#" > pinned    </a>
              
      </div>
      <div className="tab-title">
               Galite,TABARKA
          </div>
      <div className ="imagess">
          
     <img src={'https://www.marhba.com/images/experiences/galite_2016.jpg'  } height='700px'  />
     
      </div>
      <div className="description">  
     Probablement le spot de camping le plus convoité ! Galite est un archipel constitué d’un ensemble d'îles rocheuses.
      L’endroit, calme et idyllique, offre un moment de détente et de tranquillité pour les campeurs
     </div>
     <div className="maps">
         <p> location </p>
         
         <GoogleMaps />
        
    
 
     </div>
     
     <div className="wether">
         <p> weather </p>
     <Wether />
     </div>

    
 </div>

     );
}
 
export default Tabarka;