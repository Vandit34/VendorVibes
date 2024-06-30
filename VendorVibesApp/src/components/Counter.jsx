import React from 'react'
import { useState, useEffect } from 'react'

const Counter = ({ attribute, endValue, duration }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const interval = Math.floor(duration / endValue)
    const increment = setInterval(() => {
        start += 1
        setCount(start)
      if (start >= endValue) {
        clearInterval(increment)
      }
    },interval)

    return () => {
      clearInterval(increment)
    }
  }, [endValue, duration])

  return (
    <div className='text-[2rem] md:text-[1.2em]  lg:text-[1.8rem] flex flex-col text-center py-8 px-3'>
      {/* Stats 1 */}
      <span className='font-nunito font-bold text-[1.8rem] text-orange-500'>{count}+</span>
      <span className='font-caveat text-[1.8rem]'>{attribute}</span>
    </div>
  )
}

export default Counter
