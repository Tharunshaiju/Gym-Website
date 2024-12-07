import React from 'react'
import BannerImg1 from '../Images/Frame1.png'
import BannerImg2 from '../Images/Frame2.png'
import BannerImg3 from '../Images/Frame3.png'
import BannerImg4 from '../Images/Frame4.png'
import BannerImg5 from '../Images/Frame5.png'
import BannerImg6 from '../Images/Frame6.png'

const Banner = () => {
  return (
    <section className='mt-20'>
        <div className='space-y-20'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-zinc-600 text-6xl font-semibold pb-5'>Meet Our Trainers</h1>
                <p className='text-zinc-400 text-2xl pb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod  </p>
                <p className='text-zinc-400 text-2xl '>tempor incididunt ut labore et</p>
            </div>

       
        <div className='flex flex-col items-center space-y-10'>
            <div className='flex space-x-10'>
                <img src={BannerImg1} />
                <img src={BannerImg2} />
                <img src={BannerImg3} />
            </div>
            <div className='flex space-x-10'>
                <img src={BannerImg4} />
                <img src={BannerImg5} />
                <img src={BannerImg6} />
            </div>
        </div>

        </div>
    </section>
  )
}

export default Banner
