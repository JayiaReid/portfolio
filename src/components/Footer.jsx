import React from 'react'
import { footerIcons } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const FooterIcon = ({link, title, icon, index, closeLaptop}) =>{

    const close = () =>{
        closeLaptop()
    }

    return(
        
            <motion.div variants={fadeIn("up", "spring", index *0.5, 2)}>
                <img onClick={link === 'close' ? close : () => window.open(link, "_blank")} className='w-10 h-auto cursor-pointer' title={title} src={icon} alt={title} />
            </motion.div>
        
        
    )
}

const Footer = (props) => {

    const closeLaptop = ()=>{
        props.close()
    }

  return (
    <div className='pb-5 flex flex-row justify-evenly cursor-pointer'>
        {footerIcons.map((icon, index)=>(
            <FooterIcon key={icon.title} index={index} closeLaptop={closeLaptop} {...icon} />
        ))}
    </div>
  )
}

export default Footer