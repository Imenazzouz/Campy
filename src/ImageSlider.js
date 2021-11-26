import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './ImageSlider.css'
import Navigation from "./navbar";
import tente1 from './assets/products/tentes/tente-camping-trigano-bilbao-2-places1.jpg'
import tente2 from './assets/products/tentes/tente-camping-trigano-bilbao-2-places2.jpg'
import tente3 from './assets/products/tentes/tente-camping-trigano-bilbao-2-places3.jpg'
import tente4 from './assets/products/tentes/tente-camping-trigano-bilbao-2-places4.jpg'
import { QuantityPicker } from 'react-qty-picker';
import yesmine from './assets/products/people/yesmine.jpg'
import imen from './assets/products/people/imen.jpg'
import ibrahim from './assets/products/people/ibrahim.jpg'
import matelas from './assets/products/matelas.jpg'
import sac from './assets/products/saccamping.jpg'
class ImageGallaryComponent extends React.Component {

    onChangeEvent = () => {
        console.log('onChange Event Triggered');
    }

    onClickItemEvent = () => {
        console.log('onClickItem Event Triggered');
    }

    onClickThumbEvent = () => {
        console.log('onClickThumb Event Triggered');
    }

    onSwipeStartEvent = () => {
        console.log('onSwipeStart Event Triggered');
    }

    onSwipeEndEvent = () => {
        console.log('onSwipeEnd Event Triggered');
    }

    onSwipeMoveEvent = () => {
        console.log('onSwipeMove Event Triggered');
    }

    render() {
        return (
          <div>
            <Navigation/>
            <br/>
            <div className='shopping' >
            <div>
            <div className='column'>
               
                <div>
                <Carousel autoPlay interval="5000" infiniteLoop transitionTime="1000"width='40%' className='caroussel'

                    onChange={this.onChangeEvent}
                    onClickItem={this.onClickItemEvent}
                    onClickThumb={this.onClickThumbEvent}
                    onSwipeStart={this.onSwipeStartEvent}
                    onSwipeEnd={this.onSwipeEndEvent}
                    onSwipeMove={this.onSwipeMoveEvent}
                    
                >
                    <div >
                        <img src={tente1} />
                    </div>
                    <div>
                        <img src={tente2} />
                      
                    </div>
                    <div>
                        <img src={tente3} />

                    </div>
                    <div>
                        <img src={tente4} />
                        
                    </div>
                </Carousel>
                </div>
                </div>
                <div className='buy-pannel'>
                    <h3 className='title'>tente à 2 personnes </h3>
                    <div className='QuantityPicker'>
                    <QuantityPicker min={0} />
                    </div>
                    <div class="button">
                    <a >Acheter Maintenant</a>
                    </div>
                    </div>
            </div>
            </div>
            <div className='ratings'>
                <h2 className='ratings-title'>Ratings</h2>
                <br/>

                <ul className='ratings-section'>
                    <li className='people'>
                        <h3>Imen</h3>
                        <div className='image-and-rating'>
                        <img className='avatar' src={imen} width='100px' height='100px'/>
                        <p>trés dilicieuse</p>
                        </div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>


                    </li>
                    <li className='people'>
                        <h3>Yesmine</h3>
                        <div className='image-and-rating'>

                        <img  className='avatar' src={yesmine} width='100px' height='100px'/>
                        <p>7aja heyla barcha!!</p>
                        </div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </li>
                    <li className='people'>
                        <h3>Ibrahim</h3>
                        <div className='image-and-rating'>

                        <img className='avatar' src={ibrahim} width='100px' height='100px'/>
                        <p>woooow moch 3adiya</p>
                        </div>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>

                    </li>
                </ul>
            </div>
            <br/>
            <br/>
            <br/>


            <div className='other-products'>
                <ul className='other-products-items'>
                    <li className='item'>
                        <a href=''>
                        <img src={sac} width='200px' height='200px'/>
                        <p>Sac camping</p>
                        </a>
                    </li>
                    <li className='item'>
                        <a>
                        <img src={matelas} width='200px' height='200px'/>
                        <p>matelas camping</p>
                        </a>
                    </li>
                </ul>
            </div>
            </div>
        )
    };
}

export default ImageGallaryComponent;