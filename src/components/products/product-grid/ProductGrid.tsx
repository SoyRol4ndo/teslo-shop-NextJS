import { Product } from "@/src/interfaces"
import { ProductGridItem } from "./ProductGridItem";


interface Props {
  products: Product[];
}


export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {
        products.map(producto => (
          <ProductGridItem product={producto} key={producto.slug} />
        ))
      }

    </div>
  )
}
