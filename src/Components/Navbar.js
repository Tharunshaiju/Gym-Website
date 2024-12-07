import React from 'react'

const Navbar = () => {
  return (
    <section className='relative z-10 text-white'>
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            <div className='flex text-xl'>
                <h1 className='font-semibold'>GymFluencer</h1>
            </div>
            <ul className='flex space-x-8 text-zinc-400'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='#About'>About</a></li>
                    <li><a href='#Service'>Service</a></li>
                    <li><a href='#Contact'>Contact</a></li>
                </ul>
            <button className='btn1'>Join now</button>
        </div>
    </section>
  )
}

export default Navbar
