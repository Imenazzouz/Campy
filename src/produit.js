import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import './produit.css'
import matelas from './assets/products/matelas.jpg'
import sac from './assets/products/saccamping.jpg'
import tente1 from './assets/products/tentes/tente-camping-trigano-bilbao-2-places1.jpg'

  
    const items= [
      {id: 1, title: 'Tente',img:matelas},
      {id: 2, title: 'Sac camping',img:sac},
      {id: 3, title: 'tente',img:tente1},
      {id: 4, title: '7aja o5ra',img:'https://contents.mediadecathlon.com/p1757596/k$5f6afde636ebc761b055f38fb88e1db0/table-de-camping-pliante-4-tabourets-4-a-6-personnes.jpg?&f=800x800'},
      {id: 5, title: 'item #5',img:'https://contents.mediadecathlon.com/p1749361/k$96ca9266b4a34d7c1099b146f89eb230/fauteuil-pliable-pour-le-camping-basic.jpg?&f=452x452'},
      {id:6, title:'item #6',img:'https://contents.mediadecathlon.com/p1749361/k$96ca9266b4a34d7c1099b146f89eb230/fauteuil-pliable-pour-le-camping-basic.jpg?&f=452x452'}
    ]
  

 const ProductSlider= ()=> {
   
    return (
      <div className='produit-slider' >
        <br/>
      <Carousel itemsToShow={3}>
        {items.map(item => <div className='produit-slider-item'  key={item.id}><a href='#' className='produit-item-link'><img src={item.img} height='456' width='456' style={{borderRadius:'20%'}} /><div className='produit-item-title'>{item.title}</div></a></div>)}
      </Carousel>
      </div>
    )
  }
  export default ProductSlider
