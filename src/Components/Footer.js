import React from 'react'
import { FaTwitter,FaFacebook,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section  className='my-20'>
        <div className='flex flex-row justify-evenly items-center'>
            <div className='space-y-2'>
                <p className='text-xl font-semibold'>GymFluence</p>
                <p className='py-1'>Recusandae quos nesciunt veniam eum quia </p>
                <a href=''>shaikhsaad256@gmail.com</a>
                <ul className='flex gap-4 pl-2 pt-3'>
              <li className='hover:text-zinc-300'><FaTwitter size={20} /></li>
              <li className='hover:text-zinc-300'><FaFacebook size={20} /></li>
              <li className='hover:text-zinc-300'><FaInstagram size={20} /></li>
            </ul>
            </div>

            <div className='space-y-3'>
                <p className='font-semibold'>Quick Links</p>
                <ul className='space-y-3 flex flex-col'>
                    <a href='' className='hover:text-zinc-400'>Home</a>
                    <a href='' className='hover:text-zinc-300'>About Us</a>
                    <a href='' className='hover:text-zinc-300'>Services</a>
                    <a href='' className='hover:text-zinc-300'>Contact</a>
                </ul>
            </div>

            <div className='space-y-3'>
                <p className='font-semibold'>Lorem Ipsum</p>
                <ul className='space-y-3 flex flex-col'>
                 <a href='' className='hover:text-zinc-300'>Lorem</a>
                 <a href='' className='hover:text-zinc-300'>Lorem</a>
                 <a href='' className='hover:text-zinc-300'>Lorem</a>
                 <a href='' className='hover:text-zinc-300'>Lorem</a>
                </ul>
            </div>

            <div className='space-y-3'>
                <p className='font-semibold'>Lorem Ipsum</p>
                <ul className='space-y-3 flex flex-col'>
                     <a href='' className='hover:text-zinc-300'>Lorem</a>
                     <a href='' className='hover:text-zinc-300'>Lorem</a>
                     <a href='' className='hover:text-zinc-300'>Lorem</a>
                     <a href='' className='hover:text-zinc-300'>Lorem</a>
                </ul>
            </div>

            <div className='space-y-3'>
                <p className='font-semibold' >Lorem Ipsum</p>
                <ul className='space-y-3 flex flex-col'>
                     <a href='' className='hover:text-zinc-300'>Lorem</a>
                     <a href='' className='hover:text-zinc-300'>Lorem</a>
                     <a href='' className='hover:text-zinc-300'>Lorem</a>
                     <a href='' className='hover:text-zinc-300'>Lorem</a>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Footer
