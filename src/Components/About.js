import React from 'react'
import { GrYoga } from 'react-icons/gr'
import { FaDumbbell } from 'react-icons/fa'
import { GiGymBag } from 'react-icons/gi'
import { MdSportsGymnastics } from "react-icons/md";
import img1 from '../Images/Rectangle 30.png'
import img2 from '../Images/Rectangle 31.png'
import img3 from '../Images/Rectangle 33.png'
import img4 from '../Images/Rectangle 34.png'
import img5 from '../Images/Rectangle 35.png'


const About = () => {
  return (
    <section id='About' >
        <div className='pt-20'>
            <div className='flex flex-col justify-center items-center '>
                <h1 className='text-zinc-600 text-6xl font-semibold pb-3'>Why Choose Us </h1>
                <p className='text-zinc-400 text-2xl '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
                <p className='text-zinc-400 text-2xl '>do eiusmod tempor incididunt ut labore et</p>
            </div>


    <div className='flex pt-10'>
        <div className='flex w-1/2 p-20 mt-10 space-x-10'>
            <div className='space-y-20 pl-10 pt-10'>
                <div className='flex flex-col space-y-3'>
                    <p className='flex flex-row text-2xl font-semibold text-zinc-600 gap-2'><FaDumbbell size={30}/>Lorem Ipsum amid</p>
                    <p className='pl-9 text-zinc-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                </div>
                <div className='flex flex-col space-y-3'>
                    <p className='flex flex-row text-2xl font-semibold text-zinc-600 gap-2'><GrYoga size={30}/>Lorem Ipsum amid</p>
                    <p className='pl-9 text-zinc-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                </div>
            </div>
            <div className='space-y-20  pt-10'>
            <div className='flex flex-col space-y-3'>
                    <p className='flex flex-row text-2xl font-semibold text-zinc-600 gap-2'><GiGymBag size={30}/>Lorem Ipsum amid</p>
                    <p className='pl-9 text-zinc-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                </div>
                <div className='flex flex-col space-y-3'>
                    <p className='flex flex-row text-2xl font-semibold text-zinc-600 gap-2'><MdSportsGymnastics size={30}/>Lorem Ipsum amid</p>
                    <p className='pl-9 text-zinc-400 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                </div>
            </div>
        </div>


    <div className='flex pl-7 pt-3'>
        <div className='flex flex-col p-10'>
            <div className=''>
            <img src={img1}  />
            <img src={img2} />
            </div>
        </div>
        <img src={img3} />
    </div>
    </div>

        </div>
            
        <div className='flex pt-20 justify-center items-center'>
            <div className='w-1/2 flex  justify-end gap-3'>
                <img src={img4} />
                <img src={img5} />
            </div>
            <div className='flex flex-col w-1/2 pl-10 justify-center items-start'>
                <p className='text-3xl text-zinc-400 pb-7'>Are you looking for a Mentor?</p>
                <h3 className='text-5xl font-semibold text-zinc-600 pb-7'>Coaches</h3>
                <p className='text-zinc-400 pb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                <p className='text-zinc-400 pb-1'>eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit</p>
                <p className='text-zinc-400 pb-1'>amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <p className='text-zinc-400 pb-8'>incididunt ut labore et.Lorem ipsum dolor sit ...</p>
                <button className='btn3 '>Explore More</button>
            </div>
        </div>

    </section>
  )
}

export default About
