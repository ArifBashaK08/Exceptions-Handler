import { useContext } from "react"
import { ContextData } from "../ContextData"
import { TestimonialsCarousel } from "../components/TestimonialsCarousel"
import { Link } from "react-router-dom"
import { FaRegEye } from "react-icons/fa";

const Testimonials = () => {

  const { testimonialsData } = useContext(ContextData)

  return (
    <section className="general-section-class bg-sky-100">
      <h1 className="services-feature-heading">
        <img src="/services.png" alt="Services logo" className="w-10 animate-spin-slow" />
        Testimonials
      </h1>
      <h3 className="w-full text-2xl lg:text-3xl font-bold text-center">
        What Our Clients are Saying?
      </h3>
      <TestimonialsCarousel data={testimonialsData} />
      <div className="w-full flex items-center justify-center">
        <Link to={"/"} className="testimonial-btn-class">
        <FaRegEye size={25} />
        Check-out All Reviews</Link>
      </div>
    </section>
  )
}
export default Testimonials