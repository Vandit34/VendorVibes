import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { FaStar } from 'react-icons/fa'
import Marquee from 'react-fast-marquee'
import Breakfast from './assets/FoodDisplayImg1.jpg'
import Lunch from './assets/FoodDisplayImg2.webp'
import Dinner from './assets/FoodDisplayImg3.jpg'
import Footer from './components/Footer.jsx'
import { useEffect, useState } from 'react'
import Logo from "./assets/VendorVibesLogo.png"


const FoodDisplay = () => {
  const [data, setData] = useState(null)
  const [meal, setMeal] = useState('')
  const [filterdata, setFilterdata] = useState([])
  // Api Calling
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
      } catch (error) {
        console.error(`Could not fetch the data ${error}`)
      }
    }
    fetchData()
  }, [])

  //Filter Function

  useEffect(() => {
    if (data && data.recipes) {
      if (meal === 'Breakfast') {
        setFilterdata(
          data.recipes.filter(value => value.mealType[0] === 'Breakfast')
        )
      } else if (meal === 'Lunch') {
        setFilterdata(
          data.recipes.filter(value => value.mealType[0] === 'Lunch')
        )
      } else if (meal === 'Dinner') {
        setFilterdata(
          data.recipes.filter(value => value.mealType[0] === 'Dinner')
        )
      } else {
        setFilterdata(data.recipes)
      }
    }
  }, [meal, data])

  return (
    <>
      <div className='my-3 mb-12 mx-3 flex items-center'>
        <img src={Logo} className='h-10 w-10 mr-2 ' />
        <p className='text-orange-500 text-[2.2rem] font-Shadow font-semibold'>
          VendorVibes
        </p>
      </div>
      <section className='mb-7'>
        {/* Options */}
        <div className='flex w-full justify-around mt-5'>
          <div>
            <img
              onClick={() => {
                setMeal('Breakfast')
              }}
              id='Breakfast'
              src={Breakfast}
              className='border-orange-500 border-[0.4rem] hover:border-[0.6rem] cursor-pointer rounded-full md:w-44 md:h-44 w-24 h-24 '
            />
            <p className='text-center  text-[1.5rem]  font-caveat '>
              Breakfast
            </p>
          </div>
          <div>
            <img
              onClick={() => {
                setMeal('Lunch')
              }}
              id='Lunch'
              src={Lunch}
              className='border-orange-500 border-[0.4rem] hover:border-[0.6rem] cursor-pointer rounded-full w-24 h-24 md:w-44 md:h-44 '
            />
            <p className='text-center  text-[1.5rem]  font-caveat '>Evening</p>
          </div>
          <div>
            <img
              onClick={() => {
                setMeal('Dinner')
              }}
              id='Dinner'
              src={Dinner}
              className='border-orange-500 border-[0.4rem] hover:border-[0.6rem] cursor-pointer rounded-full w-24 h-24 md:w-44 md:h-44 '
            />
            <p className='text-center  text-[1.5rem]  font-caveat '>Dinner</p>
          </div>
        </div>
        {/* Infinite scrolling */}
        <div className='flex w-full justify-around mt-14 mb-10'>
          <Marquee gradient={false} speed={100}>
            <span className='mx-4 flex items-center md:text-[1.5rem] font-nunito text-[1rem] bg-black text-orange-400 px-5'>
              <GoDotFill /> Flat 50% off - Don't miss out on our biggest sale!
            </span>
            <span className='mx-4 flex items-center md:text-[1.5rem] font-nunito text-[1rem] bg-black text-orange-400 px-5'>
              <GoDotFill /> Exclusive deals available now!
            </span>
            <span className='mx-4 flex items-center md:text-[1.5rem] font-nunito text-[1rem] bg-black text-orange-400 px-5'>
              <GoDotFill /> Hurry up, limited time offer!
            </span>
            <span className='mx-4 flex items-center md:text-[1.5rem] font-nunito text-[1rem] bg-black text-orange-400 px-5'>
              <GoDotFill /> Get the best prices today!
            </span>

            <span className='mx-4 flex items-center md:text-[1.5rem] font-nunito text-[1rem] bg-black text-orange-400 px-5'>
              <GoDotFill /> Flat 50% off - Don't miss out on our biggest sale!
            </span>
            <span className='mx-4 flex items-center md:text-[1.5rem] font-nunito text-[1rem] bg-black text-orange-400 px-5'>
              <GoDotFill /> Exclusive deals available now!
            </span>
            <span className='mx-4 flex items-center md:text-[1.5rem] font-nunito text-[1rem] bg-black text-orange-400 px-5'>
              <GoDotFill /> Hurry up, limited time offer!
            </span>
            <span className='mx-4 flex items-center md:text-[1.5rem] font-nunito text-[1rem] bg-black text-orange-400 px-5'>
              <GoDotFill /> Get the best prices today!
            </span>
          </Marquee>
        </div>
        {/* Filter Result */}
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 place-items-center '>
          {
            //we will replace "data.recipes" withe "array of objects" in order to filter according to : Breakfast,Lunch,Dinner

            data ? (
              filterdata.map((value, id) => (
                <div
                  key={id}
                  className='border-orange-500 border-[0.3rem] w-[70%]  bg- py-6 px-6 rounded-3xl my-5'
                >
                  <div className='flex flex-col'>
                    <img
                      className='w-30 h-30 rounded-xl'
                      src={value.image}
                      alt=''
                    />
                    <p className='mt-4 font-semibold font-nunito text-[1.2rem]'>
                      {value.name}
                    </p>
                  </div>
                  <div className='flex justify-between mt-4'>
                    <h1 className='pl-3 font-semibold font-nunito'>
                      <span className='text-orange-500'>Rs.</span>
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
              ))
            ) : (
              <p>Loading...</p>
            )
          }
        </div>
      </section>
      <Footer />
    </>
  )
}

export default FoodDisplay
