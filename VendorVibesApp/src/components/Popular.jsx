import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { FaStar } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import FoodDisplay from '../FoodDisplay.jsx'


const Popular = () => {
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [sliderKey, setSliderKey] = useState(0) // Add a key state to force re-render

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://dummyjson.com/recipes'
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`Data fetching got error ${response.status}`)
        }
        const food = await response.json()
        setData(food)
        setSliderKey(prevKey => prevKey + 1) // Update key to force re-render of the slider
      } catch (error) {
        console.error(`Could not fetch the data ${error}`)
      }
    }
    fetchData()
  }, [])

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 2024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  }

  return (
    <div>
      <section className='bg-orange-100 py-5 pb-8 pt-20 md:pt-5'>
        <div className='px-5 md:px-9'>
          <h1 className='text-[2.4rem] font-caveat text-orange-500 font-semibold'>
            Most Popular Picks
          </h1>
          <p className='text-[1.5rem] font-nunito'>
            "Explore the top-rated street foods loved by foodies all over
            India!"
          </p>
        </div>
        <div className='slider-container mx-10 mt-10'>
          {data ? (
            <Slider {...settings} key={sliderKey}>
              {' '}
              {/* Use key to force re-render */}
              {data.recipes.map((value, id) => (
                <div key={id} className=' bg-white  py-6 px-6 rounded-3xl'>
                  <div>
                    <div className='flex flex-col'>
                      <img
                        className='w-30 h-30 rounded-xl'
                        src={value.image}
                        alt=''
                      />
                      <p className='mt-4 font-semibold font-nunito text-[1.2rem] '>
                        {value.name}
                      </p>
                    </div>
                    <div className='flex justify-between mt-4'>
                      <h1 className='pl-3 font-semibold font-nunito'>
                        <span className='text-orange-500 '>Rs.</span>
                        {value.caloriesPerServing}
                      </h1>
                      <div className='flex items-center'>
                        <FaStar className='text-orange-500 mr-2 font-semibold font-nunito' />
                        <span className='pr-3'>{value.rating}</span>
                      </div>
                    </div>

                    <button className='bg-orange-500 py-2 mt-5 mx-4 hover:bg-orange-200 hover:text-orange-500 text-white rounded-3xl px-4'>
                      Order Now
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <p>Loading...</p>
          )}
          <div className='flex justify-center'>
            <button
              onClick={() => navigate('/foodDisplay')}
              className='bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-2xl text-[1.3rem] '
            >
              Found All
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Popular
