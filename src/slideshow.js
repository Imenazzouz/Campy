import './slideshow.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'




const proprietes = {
    duration: 3000,
    transitionDuration: 500,
    indicators : true,
    arrows : onoffline,
    slidesToShow: 5,
    slidesToScroll: 1,
    
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide1">
                    <div>
                        <img src={"https://contents.mediadecathlon.com/p1757596/k$5f6afde636ebc761b055f38fb88e1db0/table-de-camping-pliante-4-tabourets-4-a-6-personnes.jpg?&f=800x800"} alt="img1" />
                    </div>
                   
                </div>



                <div className="each-slide">
                    <div>
                        <img src={"https://contents.mediadecathlon.com/p1897276/k$2930cc545cc52a420a31468bc0ab5274/tente-a-arceaux-de-camping-arpenaz-41-4-personnes-1-chambre.jpg?&f=452x452"} alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={"https://contents.mediadecathlon.com/p1749361/k$96ca9266b4a34d7c1099b146f89eb230/fauteuil-pliable-pour-le-camping-basic.jpg?&f=452x452"} alt="img3" />
                    </div>
                </div>

                <div className="each-slide">
                    <div>
                        <img src={"https://m.media-amazon.com/images/I/41XyTBC00kL.jpg"} alt="img3" />
                    </div>
                </div>


                







            </Slide>
        </div>
    )
}

export default Slideshow;