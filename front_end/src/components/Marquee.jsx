import React from 'react'
import { motion } from 'framer-motion'
import '../style/Marquee.css'

const Marquee = () => {
  const imgArr = [{ img: "https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/brand-logo-home-rv-4.png" }, { img: "https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/brand-logo-home-rv-6.png" }, { img: "https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/brand-logo-home-rv-7.png" }, { img: "https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/brand-logo-home-rv-9.png" }, { img: "https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2023/07/brand-logo-home-rv-8.png" }
  ]
  return (
    <div className='marq-container'>
      <div className='marq-content-container' >
        {imgArr.map((src, index) => (
          <motion.div initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 5 }} className="marq-content" key={index}>
            <img src={src.img} alt="" />
          </motion.div>
        ))}
        {imgArr.map((src, index) => (
          <motion.div initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 5 }} className="marq-content" key={index}>
            <img src={src.img} alt="" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Marquee;
