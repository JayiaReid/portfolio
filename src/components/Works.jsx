import { github } from "../assets";
import { sectionWrapper } from "../wrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import TypewriterComponent from "typewriter-effect";
import Slideshow from "../ui/Carousel";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";

// const slides = [
//   'https://via.placeholder.com/600x400',
//   'https://via.placeholder.com/600x400/ff7f7f',
//   'https://via.placeholder.com/600x400/77ff7f',
//   'https://via.placeholder.com/600x400/7f7fff'
// ];

const ProjectCard = ({slides, overview, index, name, description, tags, image, source_code_link, link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isEven = index % 2 === 0;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className={`bg-transparent p-5 rounded-2xl w-full about-card flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      >
        
        <div className="relative w-full md:w-1/2 h-[250px] md:h-auto">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="mr-1 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" />
            </div>
            {/* <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" />
            </div> */}
          </div>
        </div>

        <div className="mt-5 md:mt-0 md:ml-5 md:w-1/2 flex flex-col justify-center">
          <h3 className="text-white font-bold text-[24px] md:text-[28px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] md:text-[18px]">{overview}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <p key={index} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
          <button
              className="mt-5 p-1 w-[100px] hover:bg-white hover:text-primary outline outline-2 ring-secondary duration-200 rounded-es-md rounded-se-md"
              onClick={openModal}
            >
              See Project
            </button>
          {/* <button className="mt-5 p-1 w-[100px] hover:bg-white hover:text-primary outline outline-2  ring-secondary duration-200 rounded-es-md rounded-se-md">See Project</button> */}
        </div>
        
      </div>
    </motion.div>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      
      
      
    {/* <Slideshow slides={slides}/> */}
        <div className="block gap-5">
        
          <h2 className="text-3xl text-primary font-bold mb-4">{name}</h2>
          <div className="mx-2 my-2 absolute top-[60px] left-2">
            <Slideshow slides={slides}/>
          </div>
          
          <img src={image} alt={name} className="w-full h-auto object-cover rounded-2xl mb-4" />
          {/* <img src={image} alt={name} className="w-full h-auto object-cover rounded-2xl mb-4" /> */}

          <p className="text-primary text-lg mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className={`text-lg ${tag.color}`}>
                #{tag.name}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="github" />
          </button>
          {link? <button
            onClick={() => window.open(link, "_blank")}
            className="flex text-black justify-center items-center cursor-pointer hover:text-secondary hover:underline"
          >
            visit website
          </button>: null}
          </div>
          
          
        </div>
      </Modal>
      </>
    
  );
};

const Works = () => {

  const [show, setShow] = useState('All')

  const types = ["All", "FullStack", "Frontend", "Java"]

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          <TypewriterComponent
            options={{
              strings: ["What I have Worked On So Far"],
              loop: true,
              autoStart: true,
            }}
          />
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        
      </div>

      <div className="flex gap-5 justify-around items-center">
        {types.map((type,index)=>(
          <button key={index} onClick={()=>setShow(type)} className={`${show==type? 'bg-white text-primary' : null} mt-5 p-1 w-[100px] hover:bg-white hover:text-primary outline outline-2 ring-secondary duration-200 rounded-es-md rounded-se-md`} >{type}</button>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          show === 'All'? (<ProjectCard key={`project-${index}`} index={index} {...project} id={project.id} />): (show==='FullStack' && project.type==="FullStack"? <ProjectCard key={`project-${index}`} index={index} {...project} id={project.id} />:show==='Frontend' && project.type==="Frontend"? <ProjectCard key={`project-${index}`} index={index} {...project} id={project.id} />:show==='Java' && project.type==="Java"? <ProjectCard key={`project-${index}`} index={index} {...project} id={project.id} />:null )
          
        ))}
      </div>

     
    </>
  );
};

export default sectionWrapper(Works, "projects");
