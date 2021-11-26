import { BrowserRouter, Route, Link } from "react-router-dom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import './beja.css';
import GoogleMaps from './map';
import Wether from './wether'

const Beja = () => {
    return ( 
        <div>
       
   
    <div className="top-menue">
    <a className="bar-item"  href="/" > GOUV   </a>
              <a className="bar-item" href="#" > SITES   </a>
              <a className="bar-item" href="#" > PLACES    </a>

      



    </div>
        
    <div className="containerx">
      
      <div className="tab-title">
               Beja
          </div>
      <div className ="imagess">
          
     <img src={'https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Sidi_El_Barrak.jpg'  } height='500px'  />
     
      </div>
      <div className="description">  
      Situé au nord-ouest de la Tunisie, le barrage de Sidi El Barrak est très connu par les campeurs. Considéré comme l’un des barrages les plus importants du pays,
       ce barrage vous offre un cadre magnifique pour un séjour au cœur de la nature.
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
 
export default Beja;