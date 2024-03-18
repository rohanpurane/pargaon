import React from 'react'
import Hero from './hero/Hero'
import VideoCard from './videoCard/VideoCard'
import Testimonial from './testimonial/Testimonial'
import Newsletter from './newsletter/Newsletter'
import Gallery from './gallery/Gallery'
import galleryImages from './gallery/gData'
import './Home.scss'



const Home = () => {
  return (
    <div className='home'>
      
      
      <Hero />
      <VideoCard />
      <Newsletter />
      <Testimonial />
      <Gallery galleryImages={galleryImages} />
    </div>
  )
}

export default Home