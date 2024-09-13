import { useState } from "react"
import { IoIosSend } from "react-icons/io";

const Contact = () => {

  const [contactInputs, setContactInputs] = useState({
    name: "",
    email: "",
    phoneNo: null,
    message: "",
  })

  const inputHandler = (e) => {
    e.preventDefault()

    const { name, value } = e.target;

    setContactInputs(prev => ({
      ...prev, [name]: value
    }))
  }

  return (
    <section className="general-section-class gap-6 bg-gradient-to-bl from-gray-200 to-gray-50">
      <h1 className="services-feature-heading">
        <img src="/services.png" alt="Services logo" className="w-10 animate-spin-slow" />
        <span>Get in Touch</span>
      </h1>
      <h1 className="text-4xl lg:text-6xl font-bold">Ready to Get Started?</h1>
      <hr className="w-1/4 h-2 bg-orange-600 border-none rounded-lg" />
      <p className="text-sm">Your email address will not be published. Required fields are marked *</p>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 w-full md:w-5/6">
        <form action="" className="p-8 w-full flex items-center flex-col flex-1 gap-4">
          <input type="text" name="name"
            className="p-4 bg-gray-200 w-full rounded-md"
            placeholder="Enter your name"
            onChange={inputHandler}
          />

          <input type="email" name="email"
            className="p-4 bg-gray-200 w-full rounded-md"
            placeholder="Enter your email"
            onChange={inputHandler}
          />

          <input type="number" name="phoneNo"
            className="p-4 bg-gray-200 w-full rounded-md"
            placeholder="Enter your phone number"
            min="1000000000"
            max="9999999999"
            onChange={inputHandler}
          />

          <textarea name="message" id="" rows="10" placeholder="Enter your message" className="p-4 bg-gray-200 w-full rounded-md overflow-y-scroll"
            onChange={inputHandler}
          ></textarea>
          <button type="submit" className="intro-btn-class flex items-center gap-4 hover:bg-[#13014c] duration-700">Send <IoIosSend size={25} /></button>
        </form>
        <div className="flex-1 transform -scale-x-100">
          <img src="/contact.png" alt="contact" className="w-full h-full" />
        </div>
      </div>
    </section>
  )
}
export default Contact