import React from 'react'
import Google from '../assets/MailImg1.png'
import Apple from '../assets/MailImg2.png'
import Microsoft from '../assets/MailImg3.png'

const Email = () => {
  return (
    <section className=' px-4 py-20 md:px-[20%]'>
      <div className='emailShadow  rounded-2xl bg-white  px-5 py-5'>
        <h1 className='text-center text-[1.5rem] font-bold font-nunito'>
          Create a account and get all offers and discount
        </h1>
        <div className='flex flex-col items-center'>
          <input
            placeholder='Create account with mail address'
            className=' w-full mx-[20%] bg-slate-200 text-slate-500 px-5 py-2 mt-5 rounded-2xl placeholder-slate-400'
          ></input>
          <button className='w-min bg-orange-500 text-white px-5 py-2  rounded-xl mt-5 hover:bg-orange-600'>
            Create
          </button>
          <div className='flex flex-col mt-4'>
            <p className='text-center text-slate-500 '> or create with</p>

            <div className='flex mt-4 w-[9.5rem] justify-around'>
              <img className='cursor-pointer emailLogoShadow' src={Google} />
              <img className='emailLogoShadow cursor-pointer' src={Apple} />
              <img className='cursor-pointer emailLogoShadow' src={Microsoft} />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Email
