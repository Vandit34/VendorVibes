import React from 'react'
import { ImCross } from 'react-icons/im'
import NavOptions from '../NavOptions.js'

const Sidebar = props => {
  return (
    <>
      {props.sign && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-1'
          onClick={() => props.signfun(false)}
        ></div>
      )}
      <section
        className={`${
          props.sign ? 'right-0 md:w-[50%]' : 'translate-x-full'
        } flex justify-between fixed top-0 bg-[rgb(253,176,34)] overflow-y-auto h-screen w-screen px-3 pt-5 transition-transform duration-1000 ease-in-out z-20`}
      >
        <ul className='text-[2rem] my-auto ml-5'>
          {NavOptions.map((value, key) => (
            <li className='mb-12 cursor-pointer font-caveat hover:text-white '>
              {value.name}
            </li>
          ))}
        </ul>
        <ImCross
          className='cursor-pointer hover:text-red-500'
          size={24}
          onClick={() => {
            props.signfun(!props.sign)
          }}
        />
      </section>
    </>
  )
}

export default Sidebar
