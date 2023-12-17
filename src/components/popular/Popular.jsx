import React, { Fragment } from 'react'
import './popular.scss'
import mountain from '../../assets/img/popular-mountain.jpg'
import forest from '../../assets/img/popular-forest.jpg'
import lake from '../../assets/img/popular-lake.jpg'
import Reveal from '../../fram-motion/Reveal'

const Popular = () => {
    return (
        <Fragment>
            <div className="popular section" id="popular">
                <h2 className="section_title">
                    Enjoy The Beauty <br /> Of The World
                </h2>

                <div className="popular_container container grid">
                    <Reveal Y={-75} X={0} delay={0.40}>
                        <article className="popular_card">
                            <div className="popular_image">
                                <img src={mountain} alt="popular img" srcset="" className='popular_img' />
                                <div className="popular_shadow"></div>
                            </div>
                            <h2 className="popular_title">Logan Mountain</h2>
                            <div className="popular_location">
                                <i className="ri-map-pin-line"></i>
                                <span>Canada</span>
                            </div>
                        </article>
                    </Reveal>
                    <Reveal Y={-75} X={0} delay={0.45}>
                        <article className="popular_card">
                            <div className="popular_image">
                                <img src={forest} alt="popular img" srcset="" className='popular_img' />
                                <div className="popular_shadow"></div>
                            </div>
                            <h2 className="popular_title">Amazon Forest</h2>
                            <div className="popular_location">
                                <i className="ri-map-pin-line"></i>
                                <span>South Africa</span>
                            </div>
                        </article>
                    </Reveal>
                    <Reveal Y={-75} X={0} delay={0.50}>
                        <article className="popular_card">
                            <div className="popular_image">
                                <img src={lake} alt="popular img" srcset="" className='popular_img' />
                                <div className="popular_shadow"></div>
                            </div>
                            <h2 className="popular_title">Garda Lake</h2>
                            <div className="popular_location">
                                <i className="ri-map-pin-line"></i>
                                <span>Italy</span>
                            </div>
                        </article>
                    </Reveal>
                </div>
            </div>
        </Fragment>
    )
}

export default Popular