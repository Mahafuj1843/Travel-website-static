import { useState } from 'react'
import './App.scss'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Popular from './components/popular/Popular'
import Explore from './components/explore/Explore'
import Join from './components/join/Join'
import Footer from './components/footer/Footer'
import { useEffect } from 'react'
import Service from './components/service/Service'
import Contact from './components/contact/Contact'
import Questions from './components/FAQ/Questions'
import Gallery from './components/gallery/Gallery'

function App() {
  const scrollup = () =>{
    const scrollup = document.getElementById('scroll-up')
    const header = document.querySelector('#header')

    window.scrollY >=350 ? scrollup.classList.add('show-scroll') : scrollup.classList.remove('show-scroll')
    window.scrollY >=50 ? header.classList.add('shrink') : header.classList.remove('shrink')
  }

  useEffect(()=>{
    window.addEventListener('scroll', scrollup)
  },[])

  return (
    <>
      <Header />
      <Home />
      <Service />
      <About />
      <Popular />
      <Explore />
      <Gallery />
      <Join />
      <Questions />
      <Contact />
      <Footer />
      <a href="#home" className="scrollUp" id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>
    </>
  )
}

export default App
