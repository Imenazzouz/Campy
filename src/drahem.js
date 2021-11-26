import { BrowserRouter, Route, Link } from "react-router-dom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import './drahem.css';
import GoogleMaps from './map';
import Wether from './wether'

const Drahem = () => {
    return ( 
        <div>
       
   
    <div className="top-menue">
    <a className="bar-item"  href="/" > GOUV   </a>
              <a className="bar-item" href="#" > SITES   </a>
              <a className="bar-item" href="#" > PLACES    </a>

      



    </div>
        
    <div className="containerx">
      
      <div className="tab-title">
               EL Haouaria
          </div>
      <div className ="imagess">
          
     <img src={'https://www.tunisienumerique.com/wp-content/uploads/2019/08/haouaria-1.jpg'  } height='500px'  />
     
      </div>
      <div className="description">  
      Connue pour ses plages paradisiaques, El Haouaria contient une réserve naturelle riche en faune et en flore.
       El Haouaria est très appréciée par les campeurs pour son côté sauvage.
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
 
export default Drahem;