import { motion } from "framer-motion"
import { styles } from "../styles"
import { logo } from "../assets"

const Overview = (props) => {

  return (
    <section className="relative w-full h-screen mx-auto " onKeyDown={()=>props.open(true)}>
      {/* <div className="absolute top-[57%] left-[45%]">
      </div> */}
    </section>
  )
}

export default Overview