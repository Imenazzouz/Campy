import FadeIn from 'react-fade-in';
import './section2.css';
import fire from './assets/fire.jpg';
import Slideshow from './slideshow';
const Section2 = () => {
    return ( 


<div className="section2">

    < div className="slogan">
    <div class="article">
        <h1>ESCAPE</h1>
        <p>into amazing experience </p>

    </div>

        
  </div>

        <div className='all'>
            


            <div class="row">  
         
             <div className="box1">
                        <div className="image">
                            <img src="https://images.unsplash.com/photo-1497906539264-eb74442e37a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" />
                        </div>
                        <div className="box2">
                            
                            <p className="tips"> For a premiun <br /> camping <br /> experience !  </p>
                        </div>

                        <p className="tips0" > Here is some tips  </p>

                       
                    </div>

                    <div className="box3">
                    <FadeIn>
                        <div className='image-1'>
                        <div className='desc'> 
                        <p>  First aid kit</p>
                        </div>
                        <img src={'https://images.unsplash.com/photo-1624638764471-cffef5035746?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpcnN0JTIwYWlkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} />
                        </div>
                      
                      
                        <div className='image-2'>

                        <div className='desc'> 
                        <p>  Don't forget about lightening</p>
                        </div>
                        <img src={'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtcGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} />
                        </div>
                        
                        <div className='image-3'>
                        <div className='desc'> 
                        <p>  See more </p>
                        </div>
                        <img src={'https://images.unsplash.com/photo-1496545672447-f699b503d270?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80'}  />
                        </div>
                        
                    </FadeIn>

                    </div>

                   
                   
                   




            </div>
            <div className="box6">
            <div className="box4">
                       <p> Best price</p>
                   </div>
                   <div className="box5">
                       <p> Best Equipements</p>
                   </div>
                   </div>

                     



                   


           
           



        </div>
        </div>
        
     );
}
 
export default Section2;