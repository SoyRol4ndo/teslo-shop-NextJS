'use client';

import { ProductGrid, ProductGridItem, Title } from "@/src/components";
import { Category } from "@/src/interfaces";
import { initialData } from "@/src/seed/seed";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  params: { id: Category }
}


export default function ({ params }: Props) {

  const { id } = params;

  const [genero, setGenero] = useState('')

  const label: Record<Category, string> = {
    'men': 'Hombres',
    'women': 'Mujeres',
    'kid': 'Niños',
    'unisex': 'Ambos sexos'
  }

  // genero === '' && notFound();

  const product = initialData.products.filter(product => product.gender === id)

  return (
    <div>
      <Title
        title={`Articulos de ${label[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={product} />
    </div>
  );
}