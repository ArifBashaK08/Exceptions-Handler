import { Link } from "react-router-dom";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ContextData } from "../ContextData";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const { navigationPages } = useContext(ContextData)

    return (
        <section className="navbar-class">
            <div className="flex justify-between items-center px-4 py-2">
                <div className="logo">
                    <img src="/logo.png" alt="logo" className="w-full" />
                </div>
                <motion.div
                    initial={false}
                    animate={{ rotate: mobileMenu ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="cursor-pointer inline-block lg:hidden"
                >
                    {mobileMenu ? <IoClose size={30} /> :
                        <IoMenuSharp size={30} />}
                </motion.div>
                <div className="hidden lg:flex items-center justify-evenly">
                    {navigationPages.map(({ path, page }, index) => (
                        <Link to={path} key={index} className="block text-xl font-semibold py-2 px-4 hover:text-orange-600">
                            {page}
                        </Link>
                    ))}
                </div>
                <motion.button className="intro-btn-class hidden lg:flex"
                    whileHover={{
                        background: '#180161',
                        transition: { duration: .5 },
                    }}>
                    <FaArrowRight size={20} /> Get Started</motion.button>
            </div>
            <motion.ul
                className="nav-mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: mobileMenu ? 1 : 0, height: mobileMenu ? "auto" : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
            >
                {navigationPages.map(({ path, page }, index) => (
                    <motion.li
                        key={index}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <Link to={path} className="block py-2 px-4 text-sm hover:text-orange-600">
                            {page}
                        </Link>
                        <hr />
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    );
};

export default Navbar;
