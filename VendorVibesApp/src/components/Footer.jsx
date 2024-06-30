import React from 'react'
import FooterImg1 from '../assets/FooterImg1.png'
import FooterImg2 from '../assets/FooterImg2.png'
import FooterImg3 from '../assets/FooterImg3.png'
import FooterImg4 from '../assets/FooterImg4.png'

const Footer = () => {
  return (
    <footer className='bg-[#FDDCAB] pb-7'>
      <div className='md:flex md:flex-row-reverse'>
        {/* Part 1 */}
        <section className='md:ml-7 mb-7 footSec1 md:w-[60%]'>
          <div className='lg:flex lg:justify-around'>
            <div>
              <h1 className='text-[1.8rem] font-bold text-slate-900 pt-6  font-caveat '>
                Company
              </h1>
              <ul className='text-slate-700 font-nunito cursor-pointer w-30 '>
                <li className='hover:text-slate-900'>About Us</li>
                <li className='hover:text-slate-900'>Career</li>
                <li className='hover:text-slate-900'>Pricing</li>
                <li className='hover:text-slate-900'>Review</li>
              </ul>
            </div>

            <div>
              <h1 className='text-[1.8rem] font-bold text-slate-900 pt-6 font-caveat '>
                Our Services
              </h1>
              <ul className='text-slate-700 font-nunito cursor-pointer w-30 '>
                <li className='hover:text-slate-900'>Restraunt</li>
                <li className='hover:text-slate-900'>Cafe</li>
                <li className='hover:text-slate-900'>Package</li>
                <li className='hover:text-slate-900'>Offer</li>
              </ul>
            </div>
            <div>
              <h1 className='text-[1.8rem] font-bold text-slate-900 pt-6 font-caveat '>
                Quick Links
              </h1>
              <ul className='text-slate-700 font-nunito cursor-pointer w-30 '>
                <li className='hover:text-slate-900'>Help Center</li>
                <li className='hover:text-slate-900'>FAQ</li>
                <li className='hover:text-slate-900'>Terms and Conditions</li>
                <li className='hover:text-slate-900'>Privacy Policy</li>
              </ul>
            </div>
          </div>

          <div className='relative '>
            <input
              placeholder='Enter your mail address'
              className=' w-full  bg-white text-slate-500 px-5 py-2 mt-5 rounded-2xl placeholder-slate-400'
            ></input>
            <button className='absolute right-0 bg-orange-500 text-white px-5 py-2  rounded-xl mt-5 hover:bg-orange-600'>
              Subscribe
            </button>
          </div>
        </section>
        {/* Part 2 */}
        <section className='ml-4 mr-4 md:w-[40%]'>
          <div>
            <h1 className='my-5'>VendorVibes</h1>
            <p className='mt-2 text-slate-900 font-nunito'>
              123 Market Lane
              <br /> Vadodara <br />
              Gujarat 390008 <br />
              India{' '}
            </p>
            <br />
            <p className='text-slate-900 font-nunito'>+91 98765 43210</p>
            <br />
            <p className='text-slate-900 font-nunito'>contact@vendorvibes.com</p>
          </div>
          <div className='flex justify-between mt-7'>
            <img src={FooterImg1} className='cursor-pointer' />
            <img src={FooterImg2} className='cursor-pointer' />
            <img src={FooterImg3} className='cursor-pointer' />
            <img src={FooterImg4} className='cursor-pointer' />
          </div>
        </section>
      </div>
      {/* Part 3 */}
      <section>
        <p className='text-center mt-4 text-slate-900 font-nunito text-[1.1rem]'>
          Copyright 2024 VendorVibes
        </p>
      </section>
    </footer>
  )
}

export default Footer
