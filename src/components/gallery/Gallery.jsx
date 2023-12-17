import React, { Fragment } from 'react'
import './gallery.scss'
import beach from '../../assets/img/waterfall.avif'
import street from '../../assets/img/street.avif'
import lake from '../../assets/img/bridge.avif'
import mountain2 from '../../assets/img/mountain.avif'
import lake2 from '../../assets/img/lake.avif'
import Reveal from '../../fram-motion/Reveal'

const Gallery = () => {
    return (
        <Fragment>
            <section className="gallery section container">
                <h2 className="gallery_title container">
                    Wherever We Go <br /> To <br/> See The World
                </h2>
                <Reveal Y={75} X={0} delay={0.40}>
                    <div className="gallery_container grid">
                        <article className="gallery_card grid_col_span-2">
                            <div className="gallery_image">
                                <img src={beach} alt="gallery img" srcset="" className='gallery_img' />
                                <div className="gallery_shadow"></div>
                            </div>
                        </article>

                        <article className="gallery_card">
                            <div className="gallery_image">
                                <img src={lake} alt="gallery img" srcset="" className='gallery_img' />
                                <div className="gallery_shadow"></div>
                            </div>
                        </article>

                        <article className="gallery_card">
                            <div className="gallery_image">
                                <img src={lake2} alt="gallery img" srcset="" className='gallery_img' />
                                <div className="gallery_shadow"></div>
                            </div>
                        </article>

                        <article className="gallery_card grid_col_span-2">
                            <div className="gallery_image">
                                <img src={mountain2} alt="gallery img" srcset="" className='gallery_img' />
                                <div className="gallery_shadow"></div>
                            </div>
                        </article>

                        <article className="gallery_card">
                            <div className="gallery_image">
                                <img src={street} alt="gallery img" srcset="" className='gallery_img' />
                                <div className="gallery_shadow"></div>
                            </div>
                        </article>
                    </div>
                </Reveal>
            </section>
        </Fragment>
    )
}

export default Gallery
