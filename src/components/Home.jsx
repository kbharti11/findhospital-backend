import React from 'react'
import Slider from './Slider'
import Card from './Card'
import H1 from "../assets/h1.png"
import H2 from "../assets/h2.png"

export default function Home()
{
    return (
        <div className='flex justify-center items-center flex-col'>
            <div className='max-h-[80vh] w-[80%] flex justify-center   '>
            <Slider/>
        </div>
        <div className='h-[50] flex items-center bg-blue-300 w-full justify-center
        mt-4'>
            <h4 className='text-centre text-blue-900 text-3xl font-display '>
            We are here to hear and heal your health problems
            </h4>
        </div>
        <div className='flex flex-row'>
            <Card title={"booking"} image={H1}/>
            
            <Card title={"finding"} image={H2}/>

            <Card title={"near"}/>
    

        </div>
         </div>
        
    )
}

