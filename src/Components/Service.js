import React from 'react'
import { HiCheckCircle } from "react-icons/hi";

const Service = () => {
  return (
    <section id='Service' className='mt-36'>
        <div className=''>
            <div className='pl-20 space-y-2'>
                <h2 className='text-3xl text-zinc-400'>Pricing Plan</h2>
                <h1 className='text-5xl text-zinc-700 '>Join Today</h1>
            </div>

            <div className='flex justify-evenly items-center p-10'>
                
                <div className='border-2 p-5 rounded-2xl shadow-xl border-white'>
                    <p className='text-zinc-500 font-medium'>Beginner Plan</p>
                    <p className='text-4xl font-bold py-2 text-zinc-600'>$10 <span className='text-xl font-semibold'>/ Month</span></p>
                    <p className='text-zinc-400'>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                    <p className='pb-6 text-zinc-400'>elit, sed do eiusmod tempor incididunt </p>
                    <div className='space-y-2'>
                     <p className='flex items-center gap-2 text-zinc-500'><HiCheckCircle color='grey' size={20}/>Lorem ipsum dolor sit amet, </p>
                     <p className='flex items-center gap-2 text-zinc-500'><HiCheckCircle color='grey' size={20}/>Lorem ipsum dolor sit amet, </p>
                     <p className='flex items-center gap-2 text-zinc-500'><HiCheckCircle color='grey' size={20}/>Lorem ipsum dolor sit amet, </p>
                    </div>
                    <div className='flex justify-center mt-20'>
                    <button className='btn5' >Choose Plan</button>
                    </div>
                </div>

                <div className='border-2 p-5 rounded-2xl shadow-xl border-black bg-black text-white'>
                <p className='text-zinc-200'>Premium  Plan</p>
                    <p className='text-4xl font-bold py-2 text-zinc-200'>$15 <span className='text-xl font-semibold'>/ Month</span></p>
                    <p className='text-zinc-200'>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                    <p className='pb-6 text-zinc-200'>elit, sed do eiusmod tempor incididunt </p>
                    <div className='space-y-2'>
                     <p className='flex items-center gap-2 text-zinc-200'><HiCheckCircle color='white' size={20}/>Lorem ipsum dolor sit amet, </p>
                     <p className='flex items-center gap-2 text-zinc-200'><HiCheckCircle color='white' size={20}/>Lorem ipsum dolor sit amet, </p>
                     <p className='flex items-center gap-2 text-zinc-200'><HiCheckCircle color='white' size={20}/>Lorem ipsum dolor sit amet, </p>
                     <p className='flex items-center gap-2 text-zinc-200'><HiCheckCircle color='white' size={20}/>Lorem ipsum dolor sit amet, </p>
                     <p className='flex items-center gap-2 text-zinc-200'><HiCheckCircle color='white' size={20}/>Lorem ipsum dolor sit amet, </p>
                    </div>
                    <div className='flex justify-center mt-12'>
                    <button className='btn4' >Choose Plan</button>
                    </div>
                    
                </div>

                <div className='border-2 p-5 rounded-2xl shadow-xl border-white'>
                <p className='text-zinc-500 font-medium'>Premium  Plan</p>
                    <p className='text-4xl font-bold py-2 text-zinc-600'>$20 <span className='text-xl font-semibold'>/ Month</span></p>
                    <p className='text-zinc-400'>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                    <p className=' text-zinc-400 pb-6'>elit, sed do eiusmod tempor incididunt </p>
                    <div className='space-y-2'>
                     <p className='flex items-center gap-2 text-zinc-500'><HiCheckCircle color='grey' size={20}/>Lorem ipsum dolor sit amet, </p>
                     <p className='flex items-center gap-2 text-zinc-500'><HiCheckCircle color='grey' size={20}/>Lorem ipsum dolor sit amet, </p>
                     <p className='flex items-center gap-2 text-zinc-500'><HiCheckCircle color='grey' size={20}/>Lorem ipsum dolor sit amet, </p>
                     <p className='flex items-center gap-2 text-zinc-500'><HiCheckCircle color='grey' size={20}/>Lorem ipsum dolor sit amet, </p>
                     <p className='flex items-center gap-2 text-zinc-500'><HiCheckCircle color='grey' size={20}/>Lorem ipsum dolor sit amet, </p>
                     <p className='flex items-center gap-2 text-zinc-500'><HiCheckCircle color='grey' size={20}/>Lorem ipsum dolor sit amet, </p>
                    </div>
                    <div className='flex justify-center mt-10'>
                    <button className='btn5'>Choose Plan</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service
