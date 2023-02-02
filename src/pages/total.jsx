import { useEffect, useCallback } from "react";
import Layout from "@/layout/Layout";
import useStore from "@/hooks/useStore";

const Total = () => {
  const { order, name, setName } = useStore();

  //Returns true or false. Checks if there is something in the order
  const checkOrder = useCallback(() => {
    return order.length === 0 || name === "" || name.length < 3;
  }, [order, name]);

  useEffect(() => {
    checkOrder();
  }, [order, checkOrder]);

  const placeOrder = (e) => {
    e.preventDefault();
    console.log("place order");
  };

  return (
    <Layout page=" - Total">
      <h1 className="text-4xl font-bold uppercase">
        Total and order confirmation
      </h1>
      <p className="text-2xl my-10">Confirm your order below</p>

      <form onSubmit={placeOrder}>
        <div>
          <label
            htmlFor="name"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            value={name}
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: <span className="font-bold"></span>
          </p>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            className={` ${
              checkOrder()
                ? "bg-indigo-100"
                : "bg-indigo-600 hover:bg-indigo-800"
            } w-full lg:w-auto px-5 py-5 rounded uppercase font-bold text-white text-center cursor-pointer transition-colors`}
            value="Confirm order"
            disabled={checkOrder()}
          />
        </div>
      </form>
    </Layout>
  );
};

export default Total;
