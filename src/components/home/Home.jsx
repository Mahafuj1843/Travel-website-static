import React, { Fragment } from 'react'
import './home.scss'
import bg_img from '../../assets/img/home-bg2.jpg'
import card_1 from '../../assets/img/home-trees.jpg'
import card_2 from '../../assets/img/home-lake.jpg'
import card_3 from '../../assets/img/home-beach.jpg'
import card_4 from '../../assets/img/home-mountain.jpg'
import Reveal from '../../fram-motion/Reveal'

const Home = () => {
    return (
        <Fragment>
            <section className="home section" id="home">
                <img className='home_bg' src={bg_img} alt="home img" srcset="" />
                <div className="home_shadow"></div>
                <div className="home_container container grid">
                    <div className="home_data">
                        <Reveal Y={-75} X={0} delay={0.40}>
                            <h3 className="home_subtitle">
                                Wellcome to Travel
                            </h3>
                        </Reveal>
                        <Reveal Y={-75} X={0} delay={0.45}>
                            <h1 className="home_title">
                                Explore <br /> The World
                            </h1>
                        </Reveal>
                        <Reveal Y={-75} X={0} delay={0.50}>
                            <p className="home_desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Vel, amet ipsum? Assumenda corrupti non alias illum
                                deleniti fugit, minima magnam ut.
                            </p>
                        </Reveal>
                        <Reveal Y={-75} X={0} delay={0.55}>
                            <a href="#" className="button">
                                Start Your Journey
                                <i class="ri-arrow-right-line"></i>
                            </a>
                        </Reveal>
                    </div>

                    <div className="home_cards grid">
                        <Reveal Y={-75} X={0} delay={0.60}>
                            <article className='home_card'>
                                <img className='home_card_img' src={card_1} alt="" srcset="" />
                                <h3 className="home_card_title">Croatia</h3>
                                <div className="home_card_shadow"></div>
                            </article>
                        </Reveal>
                        <Reveal Y={-75} X={0} delay={0.65}>
                            <article className='home_card' >
                                <img className='home_card_img' src={card_2} alt="" srcset="" />
                                <h3 className="home_card_title">Island</h3>
                                <div className="home_card_shadow"></div>
                            </article>
                        </Reveal>
                        <Reveal Y={-75} X={0} delay={0.70}>
                            <article className='home_card'>
                                <img className='home_card_img' src={card_3} alt="" srcset="" />
                                <h3 className="home_card_title">Spain</h3>
                                <div className="home_card_shadow"></div>
                            </article>
                        </Reveal>
                        <Reveal Y={-75} X={0} delay={0.75}>
                            <article className='home_card'>
                                <img className='home_card_img' src={card_4} alt="" srcset="" />
                                <h3 className="home_card_title">Italy</h3>
                                <div className="home_card_shadow"></div>
                            </article>
                        </Reveal>
                    </div >
                </div >
            </section >
        </Fragment >
    )
}

export default Home