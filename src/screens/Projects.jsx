import { useContext } from "react"
import { Link } from "react-router-dom"
import { ContextData } from "../ContextData"

const Projects = () => {

  let { projectsData } = useContext(ContextData)

  projectsData = projectsData.slice(0, 3)
  return (
    <section className="general-section-class bg-[url(/projectsPngs/black-bg.jpg)] bg-cover bg-center h-full w-full gap-4">
      <h1 className="services-feature-heading">
        <img src="/services.png" alt="Services logo" className="w-10 animate-spin-slow" />
        Recent Projects
      </h1>
      <h3 className="w-full text-2xl lg:text-3xl font-bold text-center text-white">
        Check Some Of Our Recent Work
      </h3>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 p-4">
        {projectsData.map(({ title, url, image }, index) => (
          <div className="projects-card-class" key={index}>
            <div className="w-full h-[20rem] overflow-hidden">
              <img src={image} alt="Intro banner" className="w-full h-full hover:scale-110 duration-500" />
            </div>
            <h3 className="w-full font-bold text-3xl py-6 bg-white ">
              <Link to={url} target="_blank" className="hover:text-orange-500">{title}</Link>
            </h3>
          </div>
        ))}
      </div>
      <Link to="/works" className="text-white text-center w-full font-bold hover:text-orange-500 hover:underline text-xl">more...</Link>
    </section>
  )
}
export default Projects