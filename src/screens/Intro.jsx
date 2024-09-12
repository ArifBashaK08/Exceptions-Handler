import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="intro-class">
      <div className="flex items-center justify-center flex-col gap-4 lg:gap-8 my-12">
        <h1 className="lg:text-5xl text-center">Secure IT Solutions Services</h1>
        <hr className="w-1/4 h-2 bg-orange-600 border-none rounded-lg" />
        <p className="text-lg lg:text-xl md:w-2/3 text-gray-600 text-center text-pretty">We have delivered over 300+ open source solutions to clients across the India in the past few years. See how we can help your business grow in the digital market place.</p>
        <motion.button className="intro-btn-class flex"
          whileHover={{
            background: '#180161',
            transition: { duration: .5 },
          }}>
          <FaArrowRight size={20} /> Get Started</motion.button>
      </div>
      <div className="lg:my-12">
        <img src="/intro-banner.png" alt="Intro banner" className="" />
      </div>
    </section>
  )
}
export default Intro