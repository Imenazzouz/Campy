import { BrowserRouter, Route, Link } from "react-router-dom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import './nabeul.css';
import GoogleMaps from './map';
import Wether from './wether'

const Nabeul = () => {
    return ( 
        <div>
       
   
    <div className="top-menue">
    <a className="bar-item"  href="/" > GOUV   </a>
              <a className="bar-item" href="#" > SITES   </a>
              <a className="bar-item" href="#" > PLACES    </a>

      



    </div>
        
    <div className="containerx">
      
      <div className="tab-title">
               Nabeul
          </div>
      <div className ="imagess">
          
     <img src={'https://www.marhba.com/images/alternatif/alternatif2020/Camping_Tunisie_Rtiba.jpg'  } height='500px'  />
     
      </div>
      <div className="description">  
      Qui dit Rtiba, dit une magnifique forêt et une plage vierge. Rtiba possède aussi un charme et une magie d’exception. 
      Elle est connue pour être un spot de camping.
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
 
export default Nabeul;