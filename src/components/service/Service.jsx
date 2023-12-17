import React from 'react'
import './service.scss'
import { Fragment } from 'react'
import service from '../../static/Service'
import Reveal from '../../fram-motion/Reveal'

const Service = () => {
    return (
        <Fragment>
            <section className='service section container' id="services">
                {service.map((service, i) => {
                    return (
                        <Reveal  Y={-75} X={0} delay={0.40+(i*0.5)}>
                            <div key={i} className="service_content">
                                <div className="icon">
                                    <i class={service.icon}></i>
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.subTitle}</p>
                            </div>
                        </Reveal>
                    );
                })}
            </section>
        </Fragment>
    )
}

export default Service