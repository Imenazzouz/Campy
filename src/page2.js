import { BrowserRouter, Route, Link } from "react-router-dom";
import Images from './images';
import './page2.css'
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
                <a className="bar-item"  href="#" > photos    </a>
                <a className="bar-item" href="#" > videos    </a>
                <a className="bar-item" href="#" > pinned    </a>      
        </div>
        <div className ="images">
        <Images />
        </div>

      
   </div>

   </div>
  
   


     );
}
 
export default Page2;