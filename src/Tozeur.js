import { BrowserRouter, Route, Link } from "react-router-dom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import './Tozeur.css';
import GoogleMaps from './map';
import Wether from './wether'

const Tozeur = () => {
    return ( 
        <div>
       
   
    <div className="top-menue">
    <a className="bar-item"  href="/" > GOUV   </a>
              <a className="bar-item" href="#" > SITES   </a>
              <a className="bar-item" href="#" > PLACES    </a>

      



    </div>
        
    <div className="containerx">
      
      <div className="tab-title">
               Tozeur
          </div>
      <div className ="imagess">
          
     <img src={'https://www.vacances-tunisie.info/files/2012/11/camping-tunisie.jpg'  } height='500px'  />
     
      </div>
      <div className="description">  
      Vous etres au coeur du sahara, vivez une expérience inoubiable au sein de la nature 
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
 
export default Tozeur;