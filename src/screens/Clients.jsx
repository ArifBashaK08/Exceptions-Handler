import { useContext } from "react"
import { ContextData } from "../ContextData"

const Clients = () => {

  const { clients } = useContext(ContextData)

  return (
    <section className="general-section-class gap-10 bg-gradient-to-b from-sky-100 to-transparent">
      <h1 className="lg:text-3xl text-center font-bold">Our Valuable Clients</h1>
      <hr className="w-1/6 h-2 bg-orange-600 border-none rounded-lg" />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {clients.map((client, index) => (
          <div className="w-full h-full scale-90 hover:scale-105 duration-700" key={index}>
            <img src={client} alt="client" className="w-full h-full" />
          </div>
        ))}
      </div>
    </section>
  )
}
export default Clients