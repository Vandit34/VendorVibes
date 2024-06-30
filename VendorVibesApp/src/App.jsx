import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Landing from './components/Landing.jsx'
import Branding from './components/Branding.jsx'
import Popular from './components/Popular.jsx'
import StatsSatisfy from './components/StatsSatisfy.jsx'
import Email from './components/Email.jsx'
import Footer from './components/Footer.jsx'

import FoodDisplay from './FoodDisplay.jsx'

function App () {
  return (
    <div className='overflow-y-auto h-screen '>
      <Landing />
      <Branding />
      <Popular />
      <StatsSatisfy />
      <Email />
      <Footer />
      <Outlet />
    </div>
  )
}

export default App
