import { BrowserRouter, Route, Link } from "react-router-dom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import './jendouba.css';
import GoogleMaps from './map';
import Wether from './wether'

const Jendouba = () => {
    return ( 
        <div>
       
   
    <div className="top-menue">
    <a className="bar-item"  href="/" > GOUV   </a>
              <a className="bar-item" href="#" > SITES   </a>
              <a className="bar-item" href="#" > PLACES    </a>

      



    </div>
        
    <div className="containerx">
      
      <div className="tab-title">
               Jendouba
          </div>
      <div className ="imagess">
          
     <img src={'https://www.marhba.com/images/alternatif/alternatif2020/bouhertma.jpg'  } height='500px'  />
     
      </div>
      <div className="description">  
      Si vous décidez de faire du camping à Bouhertma, vous pouvez vous rendre au centre de camping « Bouhertma Outdoor » ou vous pouvez tout simplement installer vos tentes dans la forêt. 
      Le matin, vous pouvez aussi faire du kayak au barrage de Sidi Bou Hertma
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
 
export default Jendouba;