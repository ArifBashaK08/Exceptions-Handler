import { useContext } from "react"
import { Link } from "react-router-dom"
import { ContextData } from "../ContextData"
import ProjectsList from "../components/ProjectsList"

const Projects = () => {

  let { projectsData } = useContext(ContextData)

  projectsData = projectsData.slice(0, 3)
  return (
    <section className="general-section-class bg-[url(/projectsPngs/black-bg.jpg)] bg-cover bg-center h-full w-full gap-8">
      <h1 className="services-feature-heading">
        <img src="/services.png" alt="Services logo" className="w-10 animate-spin-slow" />
        Recent Projects
      </h1>
      <h3 className="w-full text-2xl lg:text-3xl font-bold text-center text-white">
        Check Some Of Our Recent Work
      </h3>
      <ProjectsList data={projectsData} />
      <Link to="/works" className="text-white text-center w-full font-bold hover:text-orange-500 hover:underline text-xl">more...</Link>
    </section>
  )
}
export default Projects