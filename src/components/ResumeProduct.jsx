import Image from "next/image";
import { moneyFormat } from "../helpers/index";
import useStore from "@/hooks/useStore";

const ResumeProduct = ({ product }) => {
  const { handleDeleteProduct, handleEditQuantity } = useStore();

  const { id, name, price, image, quantity } = product;

  return (
    <div className="flex bg-gray-50 gap-10 mb-3 items-center p-4 shadow-md">
      <div className="w-3/12">
        <Image
          width={200}
          height={300}
          src={`/img/${image}.webp`}
          alt={`Product Image ${name}`}
          priority
        />
      </div>
      <div className="flex items-center justify-between w-9/12">
        <div className="w-10/12">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-xl font-semibold">{`Quantity: ${quantity}`}</p>
          <p className="text-amber-400 font-black text-2xl mt-4">
            {moneyFormat(price)}
          </p>
          <p className="text-xl font-bold text-gray-700 mt-2">
            Subtotal: {moneyFormat(quantity * price)}
          </p>
        </div>

        <div className="flex flex-col gap-4 w-2/12">
          <button
            onClick={() => handleEditQuantity(id)}
            type="button"
            className="text-white bg-blue-500 hover:bg-blue-600 font-bold p-1 rounded transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteProduct(id)}
            type="button"
            className="text-white bg-red-500 hover:bg-red-600 font-bold p-1 rounded transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeProduct;
