import { useContext } from "react"
import { ContextData } from "../ContextData"
import { motion } from "framer-motion";
import ProductAndServices from "../components/ProductAndServices";

const Services = () => {

  const { industryService, servicesDetails, featureDetails } = useContext(ContextData)

  const servicesData = [...servicesDetails, ...featureDetails];

  return (
    <section className="general-section-class gap-6 bg-gradient-to-b from-gray-200 to-gray-50">
      <div className="flex flex-col gap-8 items-center justify-center xl:px-12">
        <h1 className="text-6xl font-bold">Our Services</h1>
        <hr className="w-1/4 h-2 bg-orange-600 border-none rounded-lg" />
        <ProductAndServices data={servicesData} />
      </div>
      <div className="w-full lg:relative bg-[#1b0340] p-12 lg:p-32">
        <img src="/serviceVector.png" alt="" className="lg:absolute top-0 right-0 hidden lg:block" />
        <div className="flex flex-col lg:flex-row justify-center items-center text-white gap-12">
          <img src="/servicesIllustration.png" alt="" className="flex-1" />
          <h1 className="text-2xl lg:text-5xl font-bold flex-1">We Like to Start Your Project With Us</h1>
        </div>
        <img src="/serviceVector.png" alt="" className="lg:absolute bottom-0 left-0 rotate-180 hidden lg:block" />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-8 py-40 relative">
        <img src="/servicesVectorBg.png" alt="" className="absolute top-0 right-0" />
        <h1 className="text-4xl font-bold">Industries We Serve</h1>
        <ul className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 w-5/6 gap-4 md:gap-8">
          {industryService.map(({ icon, title }, index) => (
            <motion.li
              key={index}
              className="flex gap-4 items-center p-4 overflow-hidden relative text-2xl bg-blue-50 rounded-md cursor-pointer"
              whileHover={{ backgroundPosition: "0 100%", transition: { duration: 1 } }}
              initial={{ backgroundPosition: "0 0" }}
            >
              <span className="text-gray-600">{icon}</span>
              <strong className="">{title}</strong>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
export default Services