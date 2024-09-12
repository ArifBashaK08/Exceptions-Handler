import { Intro, ServiceAndFeatureDetails, CloudAndDevelopmentServices, Projects,  Clients, Testimonials } from "../screens"
import { useContext } from "react"
import { ContextData } from "../ContextData"

const Home = () => {

  const { servicesDetails, featureDetails, designAndDevelopmentServices, cloudHostingServices } = useContext(ContextData)
  return (
    <>
      <Intro />
      <ServiceAndFeatureDetails data={servicesDetails} componentType="services" />
      <CloudAndDevelopmentServices data={cloudHostingServices} componentType="cloud" />
      <CloudAndDevelopmentServices data={designAndDevelopmentServices} componentType="devlopment" />
      <ServiceAndFeatureDetails data={featureDetails} componentType="features" />
      <Projects />
      <Testimonials />
      <Clients />
    </>
  )
}
export default Home