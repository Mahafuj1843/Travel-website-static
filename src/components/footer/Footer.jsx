import React from 'react'
import './footer.scss'
import { Fragment } from 'react'
import Reveal from '../../fram-motion/Reveal'

const Footer = () => {
    return (
        <Fragment>
            <footer className='footer section' id='footer'>
                <Reveal Y={-100} X={0} delay={0.40}>
                    <div className="footer_container container grid">
                        <div className="footer_content grid">
                            <div>
                                <a href="#" className="footer_logo">Travelo</a>
                                <p className="footer_desc">
                                    Travel with us and explore <br />
                                    the world without limits.
                                </p>
                            </div>

                            <div className="footer_data grid">
                                <div>
                                    <h3 className="footer_title">About</h3>
                                    <ul className="footer_links">
                                        <li>
                                            <a href="#" className="footer_link">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer_link">Features</a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer_link">News & Blog</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="footer_title">Company</h3>
                                    <ul className="footer_links">
                                        <li>
                                            <a href="#" className="footer_link">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer_link">History</a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer_link">Testimonial</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="footer_title">Contact</h3>
                                    <ul className="footer_links">
                                        <li>
                                            <a href="#" className="footer_link">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer_link">Support Center</a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer_link">Call Center</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="footer_title">Support</h3>
                                    <ul className="footer_links">
                                        <li>
                                            <a href="#" className="footer_link">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer_link">Terms & Conditions</a>
                                        </li>
                                        <li>
                                            <a href="#" className="footer_link">Payments</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer_group">
                            <div className="footer_social">
                                <a href="https://www.facebook.com" target='_black' className="footer_social_link">
                                    <i className="ri-facebook-line"></i>
                                </a>
                                <a href="https://www.instagram.com" target='_black' className="footer_social_link">
                                    <i className="ri-instagram-line"></i>
                                </a>
                                <a href="https://www.twitter.com" target='_black' className="footer_social_link">
                                    <i className="ri-twitter-line"></i>
                                </a>
                                <a href="https://www.youtube.com" target='_black' className="footer_social_link">
                                    <i className="ri-youtube-line"></i>
                                </a>
                            </div>
                            <span className="footer_copy">
                                &#169; Copyright Travel. All rights reserved.
                            </span>
                        </div>
                    </div>
                </Reveal>
            </footer>
        </Fragment>
    )
}

export default Footer