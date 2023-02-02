import { useState, useEffect } from "react";
import Image from "next/image";
import useStore from "@/hooks/useStore";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";
import { moneyFormat } from "../helpers/index";

const ProductModal = () => {
  const { product, handleChangeModal, handleAddOrder, order } = useStore();

  const [quantity, setQuantity] = useState(1);
  const [edition, setEdition] = useState(false);

  const { image, name, price } = product;

  //Keep the selected quantity of products
  useEffect(() => {
    if (order.some((orderState) => orderState.id === product.id)) {
      const editProduct = order.find(
        (orderState) => orderState.id === product.id
      );
      setEdition(true);
      setQuantity(editProduct.quantity);
    }
  }, [order, product]);

  return (
    <div className="flex gap-10">
      <div className="flex w-1/3">
        <Image
          src={`/img/${image}.webp`}
          width={300}
          height={400}
          alt={`Product Image ${name}`}
        />
      </div>

      <div className="flex flex-col w-2/3">
        <div className="flex justify-end">
          <button className="w-10" onClick={handleChangeModal}>
            <XMarkIcon />
          </button>
        </div>

        <h3 className="text-3xl font-bold mt-5">{name}</h3>
        <p className="text-amber-400 font-black text-3xl mt-4">
          {moneyFormat(price)}
        </p>

        <div className="flex gap-4 mt-5 items-center">
          <button
            type="button"
            //Plus Quantity
            onClick={() => {
              if (quantity >= 5) {
                return;
              } else {
                setQuantity(quantity + 1);
              }
            }}
          >
            <PlusCircleIcon className="w-8 h-8" />
          </button>

          <p className="text-3xl">{quantity}</p>

          <button
            type="button"
            //Minus Quantity
            onClick={() => {
              if (quantity <= 1) {
                return;
              } else {
                setQuantity(quantity - 1);
              }
            }}
          >
            <MinusCircleIcon className="w-8" />
          </button>
        </div>

        <button
          onClick={() => handleAddOrder({ ...product, quantity })}
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 transition-colors text-white font-bold p-2 w-1/3 mt-5 uppercase rounded"
        >
          {edition ? "Save Changes" : "Add to Order"}
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
