import React from 'react'
import BradingImg1 from '../assets/BrandingImg1.jpg'
import BradingImg2 from '../assets/BrandingImg2.png'
import BradingImg3 from '../assets/BrandingImg3.jpg'
import BradingImg4 from '../assets/BrandingImg4.webp'
import BradingImg5 from '../assets/BrandingImg5.jpg'
import BradingImg6 from '../assets/BrandingImg6.webp'
import BradingImg7 from '../assets/BrandingImg7.jpg'
import BradingImg8 from '../assets/BrandingImg8.jpg'
import BradingImg9 from '../assets/BrandingImg9.jpg'
import BradingImg10 from '../assets/BrandingImg10.jpg'
import BrandingImgC1 from '../assets/BrandingImgC1.png'
import BrandingImgC2 from '../assets/BrandingImgC2.png'


import Marquee from 'react-fast-marquee'
import Content from '../BrandingContent.js'

const Branding = () => {
  return ( 
    <>
      {/* XXXXXXX  Section 1   XXXXXXX  */}
      <section className=' py-5 pb-8 pt-20 md:pt-5  bg-orange-100 relative'>
        <div className='px-5 md:px-9'>
          <h1 className='text-[2.4rem] text-orange-500 font-semibold font-caveat'>
            Taste Sensations
          </h1>
          <p className='text-[1.5rem] font-nunito'>
            "Discover the top picks from foodies across India in our endless
            loop of culinary delights!"
          </p>
          <></>
        </div>
        {/* Carousel of foods */}
        <div className='relative mt-5 overflow-hidden'>
          <div className=' flex w-full justify-around bg-orange-100 mt-8 '>
            <Marquee gradient={false} speed={300}>
              {/* -translate-x-[127rem] */}
              <img
                src={BradingImg1}
                className='w-32 h-32 object-cover rounded-3xl mx-5'
              />
              <img
                src={BradingImg2}
                className='w-32 h-32 object-cover rounded-3xl mx-5'
              />
              <img
                src={BradingImg3}
                className='w-32 h-32 object-cover rounded-3xl mx-5'
              />
              <img
                src={BradingImg4}
                className='w-32 h-32 object-cover rounded-3xl mx-5'
              />
              <img
                src={BradingImg5}
                className='w-32 h-32 object-cover rounded-3xl mx-5'
              />
              <img
                src={BradingImg6}
                className='w-32 h-32 object-cover rounded-3xl mx-5'
              />
              <img
                src={BradingImg7}
                className='w-32 h-32 object-cover rounded-3xl mx-5'
              />
              <img
                src={BradingImg8}
                className='w-32 h-32 object-cover rounded-3xl mx-5'
              />
              <img
                src={BradingImg9}
                className='w-32 h-32 object-cover rounded-3xl mx-5'
              />
              <img
                src={BradingImg10}
                className='w-32 h-32 object-cover rounded-3xl mx-5'
              />
            </Marquee>
          </div>
        </div>
      </section>

      {/* XXXXXXXXXXXX  Section 2   XXXXXXXXXXX */}

      <section className='px-10 md:flex py-5 pt-48 bg-orange-100'>
        {/* Content part  */}
        <div className='md:w-[65%]'>
          <div className='px-3'>
            <h1 className='font-caveat text-[2.4rem] text-orange-500 font-semibold text-center'>
              Why We Are The Best?
            </h1>
          </div>
          {/* Text */}
          <div className='grid md:grid-cols-2  md:gap-4'>
            {Content.map((data,key) => (
              <div key={key} className='flex flex-col items-center mt-7 px-5 py-4'>
                <img src={data.img} className='w-24' />
                <div>
                  <h1 className=' text-[1.9rem] mt-2 font-caveat font-semibold'>
                    {data.heading}
                  </h1>
                  <p className='font-nunito text-[1.3rem]'>{data.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Image diplayed */}
        <div className=' md:w-[35%] flex justify-center'>
          <div className='md:100% max-w-[23rem] relative mt-7 overflow-clip max-h-[24rem]'>
            <img
              className='h-full z-[1] absolute  left-4 bottom-3 max-w-[23rem]'
              src={BrandingImgC1}
            />
            <img
              className='relative animate-spin w-[23rem] bottom-[-1]  left-[1.1rem]'
              src={BrandingImgC2}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Branding
