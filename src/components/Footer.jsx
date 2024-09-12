import { useContext } from "react"
import { ContextData } from "../ContextData"
import { navigationPages } from "../data";
import { Link } from "react-router-dom";



const Footer = () => {

  const { soicalMedia, addresses } = useContext(ContextData)

  return (
    <section className="footer-class">
      <div className="footer-about-class">
        <div className="flex flex-col gap-4">
          <div className="logo">
            <img src="/logo.png" alt="logo" className="w-full" />
          </div>
          <p className="text-justify text-pretty text-sm">
            Exception Handlers is a Software designing and Software development company in Nagpur. We are providing multiple services like software designing, software development, E-Commerce website design, Facebook promotion, Billing software, Mobile App solution, Corporate Email Id&apos;s, Domain and Hosting, as per client requirement.
          </p>
        </div>
        <hr className="h-[.5px] lg:hidden border-0 bg-gray-600" />
        <div className="footer-icons-class">
          {soicalMedia.map(({ url, icon }, index) => (
            <a href={url} target="_blank" className="icon-class" key={index}>{icon}</a>
          ))}
        </div>
      </div>
      <hr className="h-[.5px] border-0 bg-gray-600" />
      <div className="quick-links-class">
        <h1 className="font-bold text-lg text-center">Quick Links</h1>
        <ul className="grid grid-cols-3 gap-2 lg:flex lg:justify-evenly">
          {navigationPages.map(({ path, page }, index) => (
            <li className="font-semibold text-center" key={index}>
              <Link to={path} className="hover:text-orange-500">{page}</Link>
            </li>
          ))}
        </ul>
      </div>
      <hr className="h-[.5px] border-0 bg-gray-600" />
      <div className="addresses-class">
        {addresses.map(({ id, location, details }) => (
          <div className="flex gap-4 flex-col" key={id}>
            <h1 className="font-bold text-lg">{location} Address :</h1>
            {details.map(({ icon, content }, index) => (
              <div className="flex items-center gap-2" key={index}>
                <span className="text-orange-500">{icon}</span>
                <p className="text-gray-600 font-semibold text-sm hover:text-orange-500">{content}</p>
              </div>
            ))}
          </div>
        ))
        }
      </div>
      <hr className="h-[.5px] border-0 bg-gray-600" />
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-gray-700 text-center">&copy;2024, <span className="font-semibold text-black">Exception Handlers</span> All Reserved | Designed by</p>
        <strong className="text-orange-500">Exception Handlers Pvt. Ltd</strong>
      </div>
    </section>
  )
}
export default Footer