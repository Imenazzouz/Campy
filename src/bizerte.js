import { BrowserRouter, Route, Link } from "react-router-dom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import './bizerte.css';
import GoogleMaps from './map';
import Wether from './wether'

const Bizerte = () => {
    return ( 
        <div>
       
   
    <div className="top-menue">
    <a className="bar-item"  href="/" > GOUV   </a>
              <a className="bar-item" href="#" > SITES   </a>
              <a className="bar-item" href="#" > PLACES    </a>

      



    </div>
        
    <div className="containerx">
      
      <div className="tab-title">
               Bizerte
          </div>
      <div className ="imagess">
          
     <img src={'https://www.marhba.com/images/alternatif/alternatif2020/capserrat.jpg'  } height='500px'  />
     
      </div>
      <div className="description">  
      Situé dans le Nord-Ouest de la Tunisie, Cap Serrat se trouve entre Sejnane et Tabarka et face de l’archipel de La Galite.
       C’est l’une des parties les plus appréciées du littoral de Bizerte.
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
 
export default Bizerte;