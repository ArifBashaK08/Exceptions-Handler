import { Intro, ServiceAndFeatureDetails, DevelopmentServices, Projects,  Clients, Testimonials } from "../screens"
import { useContext } from "react"
import { ContextData } from "../ContextData"

const Home = () => {

  const { servicesDetails, featureDetails } = useContext(ContextData)
  return (
    <>
      <Intro />
      <ServiceAndFeatureDetails data={servicesDetails} componentType="services" />
      <DevelopmentServices />
      <ServiceAndFeatureDetails data={featureDetails} componentType="features" />
      <Projects />
      <Testimonials />
      <Clients />
    </>
  )
}
export default Home