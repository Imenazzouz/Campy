import Section2 from './section2';
import React from "react";
import './menu.css'

import SimpleImageSlider from "react-simple-image-slider";
import Navigation from './navbar.js'
import tente from './assets/products/tente-camping-trigano-bilbao-2-places1.jpg'
import matelas from './assets/products/matelas.jpg'
import sac from './assets/products/saccamping.jpg'
import Gallery from "./produit";
import ProductSlider from "./produit";
import menu1 from './assets/menu1.jpg'
import menu2 from './assets/menu2.jpg'
const images = [
  {url:'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNzYzNn0?utm_source=dictionnaire&utm_medium=referral'
},
{url:'https://media.routard.com/image/52/5/camping-la-montagne.1574525.jpg'},
{url:'https://media.istockphoto.com/photos/tourist-camp-with-fire-tent-and-firewood-picture-id941906052?k=20&m=941906052&s=612x612&w=0&h=gaVQltupvbPKmI6ftF97mY_ieDyF2v5DGfbgE9KX8GU='},
{url:'https://robertopena.ch/wp-content/uploads/2021/07/camping.jpg'}
]

  const Menu=()=>{
    return(
    <div>
 <div className='menu-navbar'>
        <Navigation/>
        </div>
        <div className='menu-slider'>
      <SimpleImageSlider
        width={1550}
        height={800}
        images={images}
        showBullets={false}
        showNavs={false}
        autoPlayDelay={5}
        autoPlay={true}
        
      />
    </div>
    <Section2/>
      <ProductSlider/>
        </div>
         )
}
export default Menu 