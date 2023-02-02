import Image from "next/image";
import useStore from "@/hooks/useStore";
import { moneyFormat } from "../helpers/index";

const Product = ({ product }) => {
  const { handleSetProduct, handleChangeModal } = useStore();

  const { image, name, price } = product;

  return (
    <div className="border p-3 shadow rounded">
      <Image
        src={`/img/${image}.webp`}
        alt={`Product Image ${name}`}
        width={400}
        height={500}
        priority
      />

      <div className="p-5">
        <h3 className="font-bold text-md">{name}</h3>
        <p className="text-amber-400 font-black text-2xl mt-4">
          {moneyFormat(price)}
        </p>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 transition-colors text-white font-bold p-2 w-full mt-2 uppercase rounded"
          onClick={() => {
            handleChangeModal();
            handleSetProduct(product);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Product;
