import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const Reveal = ({ children, X, Y, delay}) => {
    const ref = useRef(null)

    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView])

  return (
    <div ref={ref} style={{position: 'relative', overflow: 'hidden'}}>
      <motion.div
      variants={{
        hidden: { opacity: 0, x: X, y: Y},
        visible: { opacity: 1, x : 0, y: 0}
      }}
      initial= "hidden"
      animate= {mainControls}
      transition={{ duration: 0.7, delay: delay}}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal
