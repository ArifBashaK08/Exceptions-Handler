import { Link } from "react-router-dom"
import { useContext } from "react"
import { ContextData } from "../ContextData"

const WhyChooseUs = () => {

    const {benefitsData} = useContext(ContextData)

    return (
        <section className="general-section-class bg-[url(/projectsPngs/black-bg.jpg)] bg-cover bg-center h-full w-full gap-8">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 px-4">
                <div className="flex-1">
                    <img src="/aboutPngs/chooseUs.png" alt="choose us" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className="w-full text-2xl lg:text-3xl font-bold text-center text-white">
                        Why chose us ?
                    </h1>
                    <p className="text-pretty text-justify text-gray-300">
                        A Choice that makes a big difference in your career. Grras Nagpur Solutions Pvt. Ltd is committed to helping its students to reach their goals and their training experiences, by providing the innovative surroundings and faculties.
                        <br /><br />
                        Our criteria are not just to deliver learning but to create a bright and successful future of aspiring experts with an aim to create an enhanced groundwork for the prospect of IT aspirants and professionals and to generate knowledge of Open Source Technology in India. This short motion picture would help you envisage our idea and would aid in visualizing it through our eyes.
                    </p>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 p-4">
                        {benefitsData.map(({ title, desc }, index) => (
                            <div className="scale-90 hover:scale-100 cursor-pointer duration-700 flex flex-col gap-2" key={index}>
                                <h3 className="text-lg font-bold text-white">{title}</h3>
                                <p className="text-gray-300">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Link to="/contact" className="text-white text-center px-4 py-2 rounded-md font-bold hover:bg-orange-600 duration-700 text-xl">Contact Us</Link>
        </section>)
}
export default WhyChooseUs