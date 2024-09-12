import { useContext, useState } from "react"
import { ContextData } from "../ContextData"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineFactory, MdOutlineRealEstateAgent } from "react-icons/md";
import { FaRegHospital, FaTruck, FaUmbrella } from "react-icons/fa";
import { GiTakeMyMoney, GiBank } from "react-icons/gi";

const Services = () => {

  const industryService = [
    {
      icon: <MdOutlineFactory size={30} />,
      title: "Manufactuiring"
    },
    {
      icon: <FaRegHospital size={30} />,
      title: "Healthcare"
    },
    {
      icon: <FaTruck size={30} />,
      title: "Automobile"
    },
    {
      icon: <GiBank size={30} />,
      title: "Banking"
    },
    {
      icon: <MdOutlineRealEstateAgent size={30} />,
      title: "Real-Estate"
    },
    {
      icon: <FaTruck size={30} />,
      title: "Logistics"
    },
    {
      icon: <FaUmbrella size={30} />,
      title: "Insurance"
    },
    {
      icon: <GiTakeMyMoney size={30} />,
      title: "Capital Market"
    },
  ]

  const [isHovered, setIsHovered] = useState(false);
  const { servicesDetails, featureDetails } = useContext(ContextData)

  const servicesData = [...servicesDetails, ...featureDetails];

  return (
    <section className="general-section-class gap-6 bg-gradient-to-b from-gray-200 to-gray-50">
      <div className="flex flex-col gap-8 items-center justify-center xl:px-12">
        <h1 className="text-6xl font-bold">Our Services</h1>
        <hr className="w-1/4 h-2 bg-orange-600 border-none rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 px-8">
          {servicesData.map(({ img, service, content }, index) => (
            <div className="p-4 h-[25rem] flex justify-center items-center flex-col rounded-lg gap-4 bg-white relative overflow-hidden"
              key={index}>
              <img src="/servicesBg.png" alt="" className="w-40 absolute -top-10 right-0" />
              <div className="h-20">
                <img src={img} alt="" className="h-full object-cover" />
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-3xl font-bold">{service}</h1>
                <p className="">{content}</p>
              </div>
              <Link to={"/contact"}
                className="flex justify-center items-center gap-2 text-orange-500 font-bold text-xl hover:text-blue-950 duration-500"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  initial={{ x: -10 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaArrowRight size={20} />
                </motion.div>
                <span>Learn more</span>
              </Link>
            </div>
          ))}
        </div>
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