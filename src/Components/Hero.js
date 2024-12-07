import React from 'react'
import HeroImg from '../Images/Home.png'
import { FaTwitter,FaFacebook,FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section id='hero' className='mb-80'>

      
      <div className='w-full mx-auto object-cover absolute top-0'>
        <img src={HeroImg}className="w-full h-auto" />
      </div>

     
      <div className='relative flex flex-col items-start text-white p-6 md:p-20 mt-20'>

        
        <div className='w-full md:w-1/2 space-y-6'>
          <h1 className='text-4xl md:text-8xl font-semibold'>Elevate your workout</h1>

          <p className='text-zinc-400 text-lg md:text-xl md:w-2/3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>

          
          <div className='pt-8 space-y-6'>
            <button className='btn2'>Get started</button>

            <ul className='flex gap-4 pl-2'>
              <a href='' className='hover:text-zinc-400'><FaFacebook size={20} /></a>
              <a href='' className='hover:text-zinc-400'><FaInstagram size={20} /></a>
              <a href='' className='hover:text-zinc-400'><FaTwitter size={20} /></a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero
