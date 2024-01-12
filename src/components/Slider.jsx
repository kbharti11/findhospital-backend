import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Slider() {
  return (
    <Carousel autoPlay infiniteLoop interval={1000} stopOnHover={false} showThumbs={false}
    showArrows={false} showStatus={false} >
    <div>
        <img className='rounded-xl max-h-[80vh] ' src='../../src/assets/1.jpg' />
     
    </div>
    <div>
    <img className='rounded-xl max-h-[80vh]' src='../../src/assets/2.jpg' />
        
    </div>
    <div>
    <img className='rounded-xl max-h-[80vh]' src='../../src/assets/3.jpg' />
        
    </div>
</Carousel>
  )
}
