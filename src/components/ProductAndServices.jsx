import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const ProductAndServices = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 px-8">
      {data.map(({ img, service, content }, index) => (
        <div className="p-4 h-[25rem] flex justify-center items-center flex-col rounded-lg gap-4 bg-white relative overflow-hidden"
          key={index}>
          <img src="/servicesBg.png" alt="" className="w-40 absolute -top-10 right-0" />
          <div className="h-20">
            <img src={img} alt="logo" className="h-full object-cover" />
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="text-2xl lg:text-3xl font-bold">{service}</h1>
            <p className="">{content}</p>
          </div>
          <Link to={"/contact"}
            className="flex justify-center items-center gap-2 text-orange-500 font-bold text-xl hover:text-blue-950 duration-500">
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
  )
}
export default ProductAndServices