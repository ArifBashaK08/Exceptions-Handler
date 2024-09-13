import { Link } from "react-router-dom"

const ServiceDetails = ({ data, componentType }) => {

    return (
        <section className={`general-section-class ${componentType === "services" ? "bg-gray-100" : "bg-gradient-to-t from-sky-100 to-gray-100"}`}>
            <h1 className="services-feature-heading">
                <img src="/services.png" alt="Services logo" className="w-10 animate-spin-slow" />
                {componentType === "services" ? "Our Services"
                    : "Our Features"
                }</h1>
            <div className="p-8 flex flex-col justify-center gap-4 lg:gap-8">
                <h1 className="text-2xl font-semibold my-8">
                    {componentType === "services" ? "What We Provide?"
                        : "We\'re Here To Help You"
                    }</h1>
                <div className="services-feature-items-class">
                    {data.map(({ url, img, service, content }, index) => (
                        <div className="services-feature-item" key={index}>
                            <div className="h-16 lg:h-20 flex items-center justify-center">
                                <img src={img} alt="logo" className="w-full h-full object-cover hover:animate-bounce-once duration-500" />
                            </div>

                            {url ? <Link to={url} className="font-bold text-xl hover:text-orange-600">{service}</Link>
                                : <h1 className="font-bold text-xl hover:text-orange-600">{service}</h1>}
                                
                            <p className="text-justify text-sm">{content}</p>
                        </div>)
                    )}
                </div>
            </div>
        </section>
    )
}
export default ServiceDetails