import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'

function Home() {
  return (
    <>
        <Navbar />
        <div className='main'>
            <Hero />
        </div>
    </>
  )
}

export default Home
