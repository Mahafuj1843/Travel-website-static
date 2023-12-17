import React from 'react'
import './join.scss'
import { Fragment } from 'react'
import joinImage from '../../assets/img/join-image.avif'
import Reveal from '../../fram-motion/Reveal'

const Join = () => {
  return (
    <Fragment>
      <section className='join section' id='join'>
        <div className="join_container container grid">
          <Reveal Y={0} X={100} delay={0.40}>
            <div className="join_data">
              <h2 className="join_title">
                Your Journy <br /> Start Here
              </h2>
              <p className="join_desc">
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit Dolorum earum assumenda.
              </p>

              <form action="" className="join_form">
                <input type="email" className='join_input' placeholder='Enter your email' />

                <button className="join_button button">
                  Subscribe Our Newsletter <i className="ri-arrow-right-line"></i>
                </button>
              </form>
            </div>
          </Reveal>
          <Reveal Y={0} X={-100} delay={0.40}>
            <div className="join_image">
              <img src={joinImage} alt="join img" className="join_img" />
              <div className="join_shadow"></div>
            </div>
          </Reveal>
        </div>
      </section>
    </Fragment>
  )
}

export default Join
