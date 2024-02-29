import type { Size } from "@/src/interfaces"
import clsx from "clsx";

interface Props {
  selectedSize: Size;
  availableSizes: Size[]
}


export const SizeSelector = ({ availableSizes, selectedSize }: Props) => {
  return (
    <div className="my-5 ">
      <h2 className="font-bold mb-4">Tallas Disponibles</h2>
      <div className="flex">
        {
          availableSizes.map(size => (
            <button className={
              clsx(
                "mx-2 hover:underline text-lg",
                { 'underline': size === selectedSize }
              )
            } key={size}>{size}</button>
          ))
        }
      </div>
    </div>
  )
}
