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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quasi aliquam ut quos? Quo corrupti accusamus alias fuga asperiores, quae nesciunt perferendis perspiciatis eum, maiores adipisci reiciendis distinctio sed beatae?
          </p>
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