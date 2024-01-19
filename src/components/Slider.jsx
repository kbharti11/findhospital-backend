import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../assets/11.jpg'
import Image2 from '../assets/2.jpg'
export default function Slider() {
  return (
    <Carousel autoPlay infiniteLoop interval={1000} stopOnHover={false} showThumbs={false}
    showArrows={false} showStatus={false} >
    <div>
        <img className='rounded-xl max-h-[80vh] ' src={Image1} />
     
    </div>
    <div>
    <img className='rounded-xl max-h-[80vh]' src={Image2} />
        
    </div>
    {/* <div>
    <img className='rounded-xl max-h-[80vh]' src='../../src/assets/3.jpg' />
        
    </div>
    <div>
      <img  className='rounded-xl max-h-[80vh]' src='../../src/assets/12.jpg'/>
    </div>
    <div>
      <img  className='rounded-xl max-h-[80vh]' src='../../src/assets/13.jpg'/>
    </div> */}
    
</Carousel>
  )
}
