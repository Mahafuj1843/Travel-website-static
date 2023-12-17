import React, { Fragment } from 'react'
import './about.scss'
import about_img from '../../assets/img/beach.avif'
import Reveal from '../../fram-motion/Reveal'


const About = () => {
    return (
        <Fragment>
            <div className="about section" id="about">
                <div className="about_container container grid">
                    <Reveal Y={0} X={-100} delay={0.40}>
                        <div className="about_data">
                            <h1 className="about_title">
                                Learn More<br /> About Travle
                            </h1>
                            <p className="about_desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Odit illo necessitatibus dolore repellendus at?
                                Necessitatibus atque officia doloribus ad eum odit.
                                Fugiat dolor possimus tenetur voluptates? Neque tenetur
                                quibusdam eveniet? Fugiat dolor possimus tenetur voluptates? Neque tenetur
                                quibusdam eveniet?
                            </p>
                            <a href="#" className="button">
                                Explore Travle
                                <i class="ri-arrow-right-line"></i>
                            </a>
                        </div>
                    </Reveal>
                    <Reveal Y={0} X={100} delay={0.40}>
                        <div className="about_image">
                            <img src={about_img} alt="about img" className="about_img" />
                            <div className="about_shadow"></div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </Fragment>
    )
}

export default About
