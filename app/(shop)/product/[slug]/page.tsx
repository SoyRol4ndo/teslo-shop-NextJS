"use client";
import { notFound } from "next/navigation";
import { initialData } from "@/src/seed/seed";
import { titleFont } from "@/src/config/font";
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from "@/src/components";


interface Props {
  params: { slug: string; };
}

export default function ({ params }: Props) {

  const { slug } = params;

  const product = initialData.products.find(producto => producto.slug === slug);


  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">

      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2 p-0">

        {/* Mobile SlideShow */}
        <ProductMobileSlideshow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />

        {/* Desktop SlideShow */}
        <ProductSlideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>

        {/* Selector de tallas */}
        <SizeSelector availableSizes={product.sizes} selectedSize={product.sizes[0]} />


        {/* Selector de cantidad */}
        <QuantitySelector quantity={2} />

        {/* Button */}
        <button className="btn-primary my-5">Agregar al Carrito</button>


        {/* Descripcion */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}