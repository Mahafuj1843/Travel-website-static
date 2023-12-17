import React, { Fragment, useEffect, useRef } from 'react'
import './question.scss'
import Reveal from '../../fram-motion/Reveal'

const Questions = () => {
    const renderRun = useRef(false)
    const toggleItem = (item) => {
        const accrodionContent = item.querySelector('.question_content')

        if (item.classList.contains('accrodion_open')) {
            accrodionContent.removeAttribute('style')
            item.classList.toggle('accrodion_open')
        } else {
            item.classList.toggle('accrodion_open')
            accrodionContent.style.height = accrodionContent.scrollHeight + 'px'
        }

    }

    useEffect(() => {
        const t = document.querySelector('.accrodion_open .icon')
        console.log(t)
        if (renderRun.current === false) {
            const items = document.querySelectorAll('.question_item')
            items.forEach((item) => {
                const accrodionHeader = item.querySelector('.question_header')

                accrodionHeader.addEventListener('click', () => {
                    const openItem = document.querySelector('.accrodion_open')
                    toggleItem(item)

                    if (openItem && openItem !== item) {
                        toggleItem(openItem)
                    }
                })
            })
            return () => { renderRun.current = true }
        }
    }, [])

    return (
        <Fragment>
            <section className="question section" id="faq">
                <h2 className="question_title container">
                    Some common question <br /> were often asked
                </h2>
                <div className="question_container container grid">
                    <Reveal Y={75} X={0} delay={0.40}>
                        <div className="question_group">
                            <div className="question_item">
                                <div className="question_header">
                                    <i className="ri-add-line icon icon"></i>
                                    <h3 className="item_title">
                                        My flower are falling off or daying?
                                    </h3>
                                </div>
                                <div className="question_content">
                                    <p className="question_desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cumque atque
                                        laboriosam dolorem ut omnis placeat ad sunt facilis earum velit, explicabo illo.
                                    </p>
                                </div>
                            </div>

                            <div className="question_item">
                                <header className="question_header">
                                    <i className="ri-add-line icon icon"></i>
                                    <h3 className="item_title">
                                        My flower are falling off or daying?
                                    </h3>
                                </header>
                                <div className="question_content">
                                    <p className="question_desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cumque atque
                                        laboriosam dolorem ut omnis placeat ad sunt facilis earum velit, explicabo illo.
                                    </p>
                                </div>
                            </div>

                            <div className="question_item">
                                <header className="question_header">
                                    <i className="ri-add-line icon icon"></i>
                                    <h3 className="item_title">
                                        My flower are falling off or daying?
                                    </h3>
                                </header>
                                <div className="question_content">
                                    <p className="question_desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cumque atque
                                        laboriosam dolorem ut omnis placeat ad sunt facilis earum velit, explicabo illo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal Y={75} X={0} delay={0.45}>
                        <div className="question_group">
                            <div className="question_item">
                                <div className="question_header">
                                    <i className="ri-add-line icon"></i>
                                    <h3 className="item_title">
                                        My flower are falling off or daying?
                                    </h3>
                                </div>
                                <div className="question_content">
                                    <p className="question_desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cumque atque
                                        laboriosam dolorem ut omnis placeat ad sunt facilis earum velit, explicabo illo.
                                    </p>
                                </div>
                            </div>

                            <div className="question_item">
                                <header className="question_header">
                                    <i className="ri-add-line icon"></i>
                                    <h3 className="item_title">
                                        My flower are falling off or daying?
                                    </h3>
                                </header>
                                <div className="question_content">
                                    <p className="question_desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cumque atque
                                        laboriosam dolorem ut omnis placeat ad sunt facilis earum velit, explicabo illo.
                                    </p>
                                </div>
                            </div>

                            <div className="question_item">
                                <header className="question_header">
                                    <i className="ri-add-line icon"></i>
                                    <h3 className="item_title">
                                        My flower are falling off or daying?
                                    </h3>
                                </header>
                                <div className="question_content">
                                    <p className="question_desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cumque atque
                                        laboriosam dolorem ut omnis placeat ad sunt facilis earum velit, explicabo illo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </Fragment>
    )
}

export default Questions