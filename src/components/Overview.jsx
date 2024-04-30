import { motion } from "framer-motion"
import { styles } from "../styles"

const Overview = () => {
  return (
    <section className="relative w-full h-screen mx-auto mt-28 ">
      <div className={`${styles.paddingX} absolute inset-0 top-[0px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#88abe4]"/>
          <div className="w-1 sm:h-80 h-40 white-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I am <span className="text-[#88abe4]">Jayia</span></h1>
          <p className={`${styles.heroSubTex} mt-5 text-white-200`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quasi aliquam ut quos? Quo corrupti accusamus alias fuga asperiores, quae nesciunt perferendis perspiciatis eum, maiores adipisci reiciendis distinctio sed beatae?
          </p>
        </div>
      </div>
      {/* <ComputersCanvas/> */}
    </section>
  )
}

export default Overview