import { useContext } from "react"
import ProductAndServices from "../components/ProductAndServices"
import { ContextData } from "../ContextData"

const Products = () => {

  const { productsDetails } = useContext(ContextData)


  return (
    <section className="general-section-class gap-6 bg-gradient-to-b from-gray-200 to-gray-50">
      <h1 className="text-4xl lg:text-6xl font-bold">Products We Provide</h1>
      <hr className="w-1/4 h-2 bg-orange-600 border-none rounded-lg" />
      <ProductAndServices data={productsDetails} />
      <p className="text-sm">Your email address will not be published. Required fields are marked *</p>
    </section>
  )
}
export default Products