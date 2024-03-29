"use client";

import { QuantitySelector, Title } from "@/src/components";
import { initialData } from "@/src/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function () {

  // redirect('/empty');


  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px] ">
        <Title title="Carrito" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">


          {/* carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl"> Agregar mas items</span>
            <Link href={'/'} className="underline mb-5">Continúa comprando</Link>


            {/* Items */}

            {
              productInCart.map((product, index) => (
                <div key={index} className="flex mb-5">
                  <Image
                    alt={`${product.title}`}
                    src={`/products/${product.images[0]}`}
                    style={{
                      width: '100px',
                      height: '100px'
                    }}
                    width={100}
                    height={100}
                    className="mr-5 rounded"
                    objectFit="contain" // Asegura que la imagen se ajuste sin recortarse
                  />
                  <div>
                    <p>{product.title}</p>
                    <p>$ {product.price}</p>
                    <QuantitySelector quantity={3} />
                    <button className="underline mt-3">Remover</button>
                  </div>
                </div>
              ))
            }
          </div>

          {/* Checkout - resumen */}
          <div className="bg-white rounded shadow-xl p-7 h-[300px]">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2">

              <span>No. Productos</span>
              <span className="text-right">3 articulos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$ 100</span>

              <span className="text-2xl mt-5">Total</span>
              <span className="text-right  mt-5">$ 100</span>

            </div>

            <div className="mt-5 mb-2">
              <Link className="flex btn-primary justify-center" href={'/checkout/address'}>Checkout</Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}