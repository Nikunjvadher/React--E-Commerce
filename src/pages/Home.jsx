import React from 'react'
import Announcement from '../components/Announcement/Announcement'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Catagories'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'



const Home = () => {
  return (
    <div className=''>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <NewsLetter/>
    </div>
  )
}

export default Home