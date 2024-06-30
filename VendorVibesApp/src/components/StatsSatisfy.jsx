import React from 'react'
import Slider from 'react-slick'
import StatsSatisfyA1 from '../assets/StatsSatisfyA1.png'
import StatsSatisfyA2 from '../assets/StatsSatisfyA2.png'
import StatsSatisfyB1 from '../assets/StatsSatisfyB1.png'
import StatsSatisfyB2 from '../assets/StatsSatisfyB2.png'

import SatisfiedCust from '../SatisfiedCust.js'
import Counter from './Counter.jsx'

const StatsSatisfy = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <section>
      {/* Stats portions */}
      <div className='bg-orange-100 py-5 pb-8 pt-20 md:pt-32 md:flex md:flex-row-reverse'>
        <div className='md:w-[65%]'>
          {/* Intro of section */}
          <div className='px-5 md:px-9'>
            <h1 className='text-[2.4rem] text-orange-500 font-semibold font-caveat'>
              Street Food Celebration
            </h1>
            <p className='text-[1.5rem] font-nunito'>
              "Celebrating India's most-loved street food stalls and happy
              foodies!"
            </p>
            <></>
          </div>

          {/* Numbers gained by brand */}
          <div className='mt-4 md:flex md:justify-between px-10'>
            <Counter
              attribute='Trusted Stalls'
              endValue={500}
              duration={11000}
            />
            <Counter
              attribute='Total Location'
              endValue={60}
              duration={10000}
            />
            <Counter attribute='Happy Foodies' endValue={4000} duration={1} />
          </div>
        </div>

        {/* Image for section */}
        <div className='overflow-hidden relative mt-4 flex justify-center items-center md:w-[35%]'>
          <img className='z-[1] w-80' src={StatsSatisfyA1} />
          <img className='animate-up absolute top-12 ' src={StatsSatisfyA2} />
        </div>
      </div>

      {/* Satisfy Section */}
      <div>
        <div className='md:flex bg-orange-100 py-5 pb-8 pt-20 md:pt-32'>
          <div className='flex flex-col'>
            {/* Content */}
            <div className='md:w-[95%]'>
              {/* Intro of section */}
              <div className='px-5 md:px-9'>
                <h1 className='text-[2rem] text-orange-500 font-semibold font-caveat'>
                  Our Satisfied Customer
                </h1>
                <p className='text-[1.5rem] font-nunito'>
                  "Join our community of satisfied customers who trust us for
                  exceptional service and quality."
                </p>
                <></>
              </div>
            </div>

            {/* Feedback section */}
            <div className=' md:w-[23rem] slider-container stasfiedCustomers mx-14 my-14 '>
              <Slider {...settings}>
                {SatisfiedCust.map((value, key) => {
                  return (
                    <div
                      key={key}
                      className=' rounded-xl bg-orange-500 h-64 w-60 px-4 py-4 flex flex-col justify-between'
                    >
                      <p className='sm:text-[1.2rem] text-[1rem]  flex-grow font-nunito'>{value.review}</p>
                      <div className='flex items-center mt-3'>
                        <img
                          src={value.imgSrc}
                          className='w-12 h-12 rounded-full mx-1 mr-2'
                        />
                        <span className='font-caveat text-[1.8rem]'>{value.name}</span>
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
          {/* Image for section */}
          <div className='md:h-[28rem] overflow-hidden relative mt-4 flex justify-center items-center md:w-[50%]'>
            <img className='z-[1] w-80 md:h-[20rem]' src={StatsSatisfyB1} />
            <img className='md:px-[2rem] md:h-[23rem] md:w-[20rem]  absolute top-12 w-60' src={StatsSatisfyB2} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSatisfy
