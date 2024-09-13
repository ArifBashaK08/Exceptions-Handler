import { Link } from "react-router-dom"

const ProjectsList = ({data}) => {
  return (
    <div className="w-11/12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-8">
        {data.map(({ title, url, image }, index) => (
          <div className="projects-card-class" key={index}>
            <div className="w-full h-[20rem] overflow-hidden">
              <img src={image} alt="Intro banner" className="w-full h-full object-cover hover:scale-110 duration-500" />
            </div>
            <h3 className="w-full font-bold text-3xl py-6 bg-white ">
              <Link to={url} target="_blank" className="hover:text-orange-500">{title}</Link>
            </h3>
          </div>
        ))}
      </div>
  )
}
export default ProjectsList