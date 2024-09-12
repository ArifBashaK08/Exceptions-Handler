import { useContext } from "react"
import { ContextData } from "../ContextData"
import WhyChooseUs from "../components/WhyChooseUs"

const About = () => {

  const { visionData } = useContext(ContextData)

  return (
    <section className="min-h-screen text-center flex flex-col justify-center items-center gap-6">
      <div className="px-6 lg:px-12 bg-gradient-to-b from-sky-100 to-transparent flex flex-col gap-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
          <div className="flex items-center justify-center flex-col gap-4 lg:gap-8 my-12 flex-1">
            <h3 className="font-bold text-3xl lg:text-5xl uppercase">About Us</h3>
            <h1 className="font-bold text-xl lg:text-3xl">Welcome to the biggest online learning Platform i.e.<br /> Grras Nagpur</h1>
            <h3 className="font-bold text-base lg:text-xl">New Experience Learn to the Next Level Your Career</h3>
            <p className="text-pretty text-justify text-sm lg:text-lg">
              Architect client-centered total linkage for intuitive benefits. Dynamically restore convergence before real-time partnerships total linkage for intuitive benefits restore convergence before real-time.
              <br /><br />
              GRRAS Nagpur Solutions specializes in the domain of Red Hat Linux training, AWS Cloud Computing, Digital Marketing, Python, Website Design & Development, Bigdata hadoop for In-house training, Industrial/Internship training, Online Learning and Corporate Training. Being an authorized and renowned partner of Red Hat since 2008, from last 14 years we hold special badge of honor for providing excellent business and learning facility across India. We also have our own Pearson VUE examination center, Redhat Authorized Centre & Kryterion Authorised Testing Center.
            </p>
          </div>
          <div className="lg:my-12 flex-1">
            <img src="/aboutPngs/about.png" alt="Intro banner" className="h-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          {visionData.map(({ image, title, desc }, index) => (
            <div className="flex flex-col items-center jusstify-center scale-90 hover:scale-100 duration-700 gap-4" key={index}>
              <div className="w-20 h-20 flex items-center justify-center">
                <img src={image} alt="logo" className="w-full h-full object-cover" />
              </div>
              <h1 className="font-bold text-xl">{title}</h1>
              <p className="text-justify text-sm">{desc}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center flex-col w-full gap-4">
          <div className="w-20 h-20">
            <img src="/aboutPngs/awards.png" alt="awards" className="w-full h-full object-cover" />
          </div>
          <h1 className="font-bold text-3xl">Awards</h1>
          <ul className="text-gray-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-start w-full">
            <li className="font-bold p-4">2012 - Best Amazing Partner of RedHat</li>
            <li className="font-bold p-4">2013 - Best North India Partner of RedHat</li>
            <li className="font-bold p-4">2016 - Best Placement Providers in Nagpur</li>
            <li className="font-bold p-4">2017 - Highest Global Certifications</li>
            <li className="font-bold p-4">2018 - Best Training Providers</li>
            <li className="font-bold p-4">2023 - Best placement providers in Nagpur</li>
          </ul>
        </div>
        <div className="flex items-center justify-center flex-col w-full gap-4">
          <div className="w-40 h-12">
            <img src="/aboutPngs/recognition.png" alt="awards" className="w-full h-full object-cover" />
          </div>
          <h1 className="font-bold text-3xl">Recognitions</h1>
          <p className="text-sm lg:text-lg">Our values define us and what we stand for as a company.</p>
          <ul className="text-gray-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
            <li className="font-bold p-4">Bring worldwide change</li>
            <li className="font-bold p-4">Upgraded world: Better World</li>
            <li className="font-bold p-4">Our commitment</li>
            <li className="font-bold p-4">Unity is Strength</li>
          </ul>
        </div>
      </div>
      <WhyChooseUs />
    </section>
  )
}
export default About