import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import headerNav from '../../static/HeaderNav.js'
import './header.scss'

const Header = () => {
    const headerRef = useRef(null)
    const [showMenu, setShowMenu] = useState(false)

    // const { pathname } = useLocation();

    // const active = headerNav.findIndex(e => e.path === pathname);

    const shrinkHeader = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            headerRef.current.classList.add('shrink');
        } else {
            headerRef.current.classList.remove('shrink');
        }
    }

    useEffect(() => {
        shrinkHeader()
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    const navLink = document.querySelectorAll('.nav_link')
    const linkAction = () =>{
        setShowMenu(!showMenu)
    }
    navLink.forEach(n=>n.addEventListener('click', linkAction))

  return (
    <Fragment>
      <div ref={headerRef} className="header" id='header'>
        <nav className='nav container'>
            <a href="#" className="nav_logo">
                Travelo
            </a>
            <div className={`nav_menu ${showMenu && 'show_menu'}`} id="nav_menu">
                <ul className="nav_list">
                    <li className="nav_item">
                        <a href="#home" className="nav_link">Home</a>
                    </li>
                    <li className="nav_item">
                        <a href="#about" className="nav_link">About</a>
                    </li>
                    <li className="nav_item">
                        <a href="#popular" className="nav_link">Popular</a>
                    </li>
                    <li className="nav_item">
                        <a href="#explore" className="nav_link">Explore</a>
                    </li>
                    <li className="nav_item">
                        <a href="#contact" className="nav_link">Contact Us</a>
                    </li>
                </ul>

                <div onClick={()=>setShowMenu(!showMenu)} className="nav_close" id="nav_close">
                    <i className="ri-close-line"></i>
                </div>
            </div>

            <div onClick={()=>setShowMenu(!showMenu)} className="nav_toggle" id="nav_toggle">
                <i className="ri-menu-fill"></i>
            </div>
        </nav>
        </div>
    </Fragment>
  )
}

export default Header
