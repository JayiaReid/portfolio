import {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
// import {EarthCanvas} from './canvas/Earth'
import { sectionWrapper } from '../wrapper'
import { slideIn } from '../utils/motion'
import { astro } from '../assets'
import TypewriterComponent from 'typewriter-effect'

// jayia_portfolio
// template_j1tlgzr
// DgZmTosms004jCTIi

const Contact = () => {
  const formRef = useRef()
   const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email:'', 
    message: ''
  })

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setLoading(true)
    // jayia_portfolio
// template_j1tlgzr
// DgZmTosms004jCTIi

    emailjs.send("jayia_portfolio","template_j1tlgzr", {
      from_name: form.name,
      to_name: "Jayia",
      from_email: form.email,
      to_email: "jayiareid24@gmail.com",
      message: form.message
    }, "DgZmTosms004jCTIi" )
    .then(()=>{
      setLoading(false)
      alert("thank you! I will get back to you as soon as possible")
      setForm({
        name: '',
        email:'', 
        message: ''
      }).catch(error=>{
        setLoading(false)
        console.log(error)
        alert("an error occured")
      })
    })
  }

  const LoopVideo = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Restart the video
    }
  };

  return (
    <div className='w-full xl:mt-12 xl:flex-row flex-row flex gap-10 overflow-hidden items-center justify-between'>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-transparent rounded-2xl'>
        <p className={`${styles.sectionSubText}`}><TypewriterComponent options={{strings:["Get In Touch"], loop: true, autoStart: true}}/></p>
        <h3 className={`${styles.sectionHeadText}`}>Contact Me</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='transparent mt-10 flex flex-col gap-8'>
          <label className='flex flex-col'><span className='text-white font-medium mb-4'>Your Name</span>
          <input 
          type='text' 
          name='name' 
          value={form.name} 
          onChange={handleChange} 
          placeholder="What's your name?"
          className='bg-secondary py-4 px-6 placeholder:text-black rounded-1g text-white outline-none border-none font-medium'/></label>
          <label className='flex flex-col'><span className='text-white font-medium mb-4'>Your Email</span>
          <input 
          type='email' 
          name='email' 
          value={form.email} 
          onChange={handleChange} 
          placeholder="What's your email?"
          className='bg-secondary py-4 px-6 placeholder:text-black rounded-1g text-white outline-none border-none font-medium'/></label>
          <label className='flex flex-col'><span className='text-white font-medium mb-4'>Your Message</span>
          <textarea 
          rows="7"
          name='message' 
          value={form.message} 
          onChange={handleChange} 
          placeholder="What do you want to say?"
          className='bg-secondary py-4 px-6 placeholder:text-black rounded-1g text-white outline-none border-none font-medium'/></label>

          <button className='about-card bg-secondary py-3 px-8 outline-none w-fit text-black font-semi-bold shadow-primary rounded-xl'
          type='submit'>{loading? 'sending...' : 'send'}</button>
        
        </form>
      </motion.div>
      <img src={astro} className='mt-[50px] w-[300px] h-auto object-cover'/>
    </div>
  )
}

export default sectionWrapper(Contact, "contact")