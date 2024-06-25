import React from 'react'
import { styles } from '../styles'
import { pp } from '../assets'
import TypewriterComponent from 'typewriter-effect'
import { sectionWrapper } from '../wrapper'

const Intro = () => {
  return (
    <div className={` bg-none w-full pt-[50px] mx-auto flex flex-row justify-center items-center gap-5`}>
        <div className="flex flex-col justify-center mt-7">
          {/* <TypewriterComponent options={{strings:["Welcome!"], autoStart: true, loop: true}} /> */}
          <h1 className={`${styles.heroHeadText}`}>Hi, I am <span className="text-[#88abe4]">Jayia</span></h1>
          <p className={`${styles.heroSubTex} mt-5 text-white-200`}>
          A dedicated computer programming student at Humber College, passionate about mastering programming languages like C, Java, and Python. My expertise extends to web development with HTML, CSS, JavaScript, and frameworks such as React, Next.js, and Tailwind CSS. Through diverse projects like Task Force, StuCo, and Java Airlines, I have honed my problem-solving, leadership, and collaborative skills. Driven by continuous learning and innovation, I am eager to bring my technical proficiency and enthusiasm to any team or organization.          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
           <div className="w-[270px] h-[270px] rounded-full bg-[#fff] flex justify-center items-center">
            <img src={pp} className="w-[265px] h-[265px] rounded-full w-full object-cover shadow-card"/>
           </div>
          {/*<div className="w-1 sm:h-80 h-40 white-gradient"/> */}
        </div>
        
    </div>
  )
}


export default sectionWrapper(Intro, "intro")


// 