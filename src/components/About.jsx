import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { sectionWrapper } from '../wrapper'
import Tech from './Tech'
import TypewriterComponent from 'typewriter-effect'
import ResumeDownload from './ResumeDownload'

const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 1)} className='w-full green-pink-gradient p-[1px] rounded-xl shadow-card'>
        <div options={{max:45, scale: 1, speed: 450 }} className='bg-black rounded-xl py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col'>
          {/* <img src={icon} alt={title} className='w-16 h-16 object-contain'/> */}
          <h3 className='text-white text-[20px] text-center font-bold'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
    // <p>{title}</p>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mt-9`}><TypewriterComponent options={{strings:["Introduction"], loop: true, autoStart: true}}/></p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
  Welcome to my portfolio! Here, you'll find a showcase of the various projects I have worked on, along with details about my skills and experiences. Feel free to explore and learn more about my journey in computer programming. If you'd like to get in touch, you'll also find my contact information. Enjoy your visit!       </motion.p>

      <ResumeDownload/>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>

      <Tech/>
    </>
  )
}

export default sectionWrapper(About, "overview")