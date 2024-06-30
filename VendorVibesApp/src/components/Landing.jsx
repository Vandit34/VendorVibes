import React from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar.jsx'
import LandingImg1 from '../assets/LandingImg1.png'
import LandingImg2 from '../assets/LandingImg2.svg'
import LandingImg3 from '../assets/LandingImg3.png'
import LandingImg4 from '../assets/LandingImg4.png'
import LandingImg5 from '../assets/LandingImg5.png'
import { useNavigate } from 'react-router-dom'

import Logo from '../assets/VendorVibesLogo.png'

const Landing = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const navigate = useNavigate()

  return (
    <section className='  '>
      <Sidebar sign={showSidebar} signfun={setShowSidebar} />
      {/* Horizontal Navbar is remaining 👇🏻*/}
      <div className='flex overflow-y-auto justify-between px-3 pt-5 '>
        <div className='flex items-center'>
          <img src={Logo} className='h-10 w-10 mr-2 ' />
          <p className='text-orange-500 text-[2.2rem] font-Shadow font-semibold'>
            VendorVibes
          </p>
        </div>
        <FaBars
          className='cursor-pointer hover:text-orange-500'
          size={24}
          onClick={() => {
            setShowSidebar(!showSidebar)
          }}
        />
      </div>
      {/* Landing Page intro */}
      <div className='flex flex-col md:flex-row'>
        {/* Intro  text */}
        <div
          className=' h-screen flex flex-col 
          relative top-[8rem] px-5'
        >
          <h1 className='font-semibold  font-caveat text-[3rem]'>
            Savor the{' '}
            <span className='text-orange-600'>Flavors of the Street</span> :
            Bite by Bite
          </h1>
          <p className='text-[1.4rem] mt-10  font-nunito'>
            Discover the best street food vendors in your area and indulge in a
            tasty adventure. Let your taste buds travel the world, one bite at a
            time.
          </p>
          <button
            onClick={() => navigate('/foodDisplay')}
            className='z-10 mt-5 text-orange-500 border-2 border-orange-500 py-2 w-44 text-[1.2rem] hover:bg-orange-500 hover:text-white hover:border-white hover:cursor-pointer'
          >
            Order now!!!
          </button>
        </div>
        {/* Image for attraction */}
        <div className='pb-11 pt-11 -z-10 relative md:w-2/4 flex md:relative custom-top md:top-[5rem]'>
          <div className=' h-min w-screen relative overflow-x-clip '>
            <div className='relative w-full flex justify-center items-center h-[26rem]'>
              {' '}
              <img
                src={LandingImg1}
                alt='Background'
                className='absolute inset-0 m-auto object-cover w-[24rem] animate-spin '
              />
              <img
                src={LandingImg2}
                alt='SVG Content'
                className='w-48 h-48 relative z-10 '
              />
            </div>

            <div className=' absolute top-0 h-full w-full'>
              <img
                src={LandingImg3}
                className='w-52 animate-bounce absolute right-4'
              />
              <img
                src={LandingImg4}
                className='w-52 animate-bounce absolute bottom-0 right-4'
              />
              <img
                src={LandingImg5}
                className='w-52 animate-bounce absolute bottom-[14rem] left-4'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
