import { FaCheck } from "react-icons/fa6";

const CloudAndDevelopmentServices = ({ data, componentType }) => {
    return (
        <section className="general-section-class bg-gray-100 gap-8">
            <h1 className="services-feature-heading">
                <img src="/services.png" alt="Services logo" className="w-10 animate-spin-slow" />
                Services
            </h1>
            <h3 className="w-full text-2xl lg:text-3xl font-bold text-center">
                {componentType === "cloud" ? "Cloud Hosting Services"
                    : "Design & Development"
                }
            </h3>
            <div className={`w-full flex flex-col lg:flex-row items-center justify-center gap-8 ${componentType === "devlopment" ? "lg:flex-row-reverse": null}`}>
                <div className="lg:my-12 flex-[.8]">
                    <img src={componentType === "cloud" ? "/intro-banner.png"
                        : "/developmentServices.png"
                    } alt="Intro banner" className="" />
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 items-center justify-center content-center flex-1">
                    {data.map((item, index) => (
                        <div className="w-full flex items-center p-4 gap-8 bg-white" key={index}>
                            <span className="bg-sky-100 p-2 rounded hover:bg-orange-500 hover:text-white">
                                <FaCheck size={30} />
                            </span>
                            <h3 className="font-bold text-xl">{item}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default CloudAndDevelopmentServices