import React, { Fragment } from 'react'
import "./contact.scss"
import Reveal from '../../fram-motion/Reveal'

const Contact = () => {
    return (
        <Fragment>
            <section className="contact section container" id='contact'>
                <div className="contact_container grid">
                    <Reveal Y={100} X={0} delay={0.40}>
                        <div className="contact_content">
                            <h2 className="contact_title">
                                Reach out to us today <br /> via any of the given <br /> information.
                            </h2>

                            <div className="contact_data">
                                <div className="contact_information">
                                    <h3 className="contact_subtitle">
                                        Call us for instant support
                                    </h3>
                                    <span className="contact_desc">
                                        <i className="ri-phone-line"></i>
                                        +999 888 777
                                    </span>
                                </div>

                                <div className="contact_information">
                                    <h3 className="contact_subtitle">
                                        Write us by mail
                                    </h3>
                                    <span className="contact_desc">
                                        <i className="ri-mail-line contact_icon"></i>
                                        user@email.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal Y={-100} X={0} delay={0.40}>
                        <form action="" className='contact_form'>
                            <div className="contact_inputs">
                                <div className='contact_input_content'>
                                    <input type="text" className="contact_input" placeholder=' ' />
                                    <label htmlFor="" className="contact_label">Email</label>
                                </div>

                                <div className='contact_input_content'>
                                    <input type="text" className="contact_input" placeholder=' ' />
                                    <label htmlFor="" className="contact_label">Subject</label>
                                </div>

                                <div className='contact_input_content contact_area'>
                                    <textarea name="message" id="" className="contact_input" placeholder=' '></textarea>
                                    <label htmlFor="" className="contact_label">Message</label>
                                </div>
                            </div>

                            <button className="button contact_button">
                                Send Message
                                <i className="ri-arrow-right-up-line"></i>
                            </button>
                        </form>
                    </Reveal>
                </div>
            </section>
        </Fragment>
    )
}

export default Contact
