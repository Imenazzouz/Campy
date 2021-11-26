import { BrowserRouter, Route, Link } from "react-router-dom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import './Haouaria.css';
import GoogleMaps from './map';
import Wether from './wether'

const Haouaria = () => {
    return ( 
        <div>
       
   
    <div className="top-menue">
    <a className="bar-item"  href="/" > GOUV   </a>
              <a className="bar-item" href="#" > SITES   </a>
              <a className="bar-item" href="#" > PLACES    </a>

      



    </div>
        
    <div className="containerx">
      
      <div className="tab-title">
               Ain Drahem
          </div>
      <div className ="imagess">
          
     <img src={'https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Oued_Zen_.jpg'  } height='500px'  />
     
      </div>
      <div className="description">  
      Le parc national de Oued Zen est situé à Aïn Drahem. Il fait partie de la Kroumirie et il s’étend sur une superficie de 6700 hectares.
       Isolé du bruit et de la pollution de a ville, Oued Zen est un endroit parfait pour camper.uvage.
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
 
export default Haouaria;