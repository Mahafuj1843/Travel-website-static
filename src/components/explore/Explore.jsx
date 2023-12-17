import React, { Fragment } from 'react'
import './explore.scss'
import beach from '../../assets/img/explore-beach.avif'
import perfil from '../../assets/img/explore-perfil.png'
import card_1 from '../../assets/img/home-trees.jpg'
import card_2 from '../../assets/img/home-lake.jpg'
import Reveal from '../../fram-motion/Reveal'

const Explore = () => {
    return (
        <Fragment>
            <section className="explore section" id="explore">
                <div className="explore_container">
                    <div className="explore_image">
                        <img src={beach} alt="Explore Img" srcset="" className="explore_img" />
                        <div className="explore_shadow"></div>
                    </div>

                    <div className="explore_content container grid">
                        <Reveal Y={-75} X={0} delay={0.40}>
                            <div className="explore_data">
                                <h2 className="explore_title">Explore The <br /> Best Place</h2>
                                <p className="explore_desc">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Tempore tempora aliquid adipisci incidunt quibusdam maxime
                                    sit reprehenderit veritatis? Reprehenderit ullam culpa iure
                                    natus minus mollitia veritatis nobis voluptatibus illo ab. Tempore
                                    tempora aliquid adipisci incidunt quibusdam maxime
                                    sit reprehenderit veritatis?
                                </p>
                            </div>
                        </Reveal>

                        <Reveal Y={-75} X={0} delay={0.45}>
                            <div className="explore_cards">
                                <article className='explore_card' >
                                    <img className='explore_card_img' src={card_2} alt="explore img" srcset="" />
                                </article>

                                <article className='explore_card'>
                                    <img className='explore_card_img' src={card_1} alt="explore img" srcset="" />
                                </article>
                            </div >
                        </Reveal>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Explore
