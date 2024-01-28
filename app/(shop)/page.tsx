import { ProductGrid, Title } from "@/src/components";
import { initialData } from "@/src/seed/seed";


const product = initialData.products;

export default function Home() {
  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid products={product} />
    </>
  );
}
