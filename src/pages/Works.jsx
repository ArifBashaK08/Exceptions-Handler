import { useContext } from "react"
import { ContextData } from "../ContextData"
import ProjectsList from "../components/ProjectsList"
import { Link } from "react-router-dom"

const Works = () => {

  const { projectsData } = useContext(ContextData)

  return (
    <section className="min-h-screen py-8 text-center flex flex-col justify-center items-center gap-8 bg-[url(/projectsPngs/black-bg.jpg)] bg-cover bg-center h-full">
      <h1 className="text-6xl font-bold text-white">Our Works</h1>
      <hr className="w-1/4 h-2 bg-orange-600 border-none rounded-lg" />
      <ProjectsList data={projectsData} />
      <Link to="/contact" className="intro-btn-class duration-700 hover:bg-[#180161]">Contact Us</Link>
    </section>
  )
}
export default Works