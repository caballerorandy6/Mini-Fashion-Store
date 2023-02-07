import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import { moneyFormat } from "../helpers/index";

const Order = ({ or }) => {
  const { id, name, total, order } = or;

  const completeOrder = async () => {
    try {
      const data = await axios.post(`/api/orders/${id}`);
      toast.success("Order ready!");
    } catch (error) {
      toast.error("An error occurred!");
      console.log(error);
    }
  };

  return (
    <div className="border p-10 space-y-5">
      {" "}
      <h1 className="text-4xl font-bold">Order: {id}</h1>
      <p className="text-lg my-10 font-bold">Client: {name}</p>
      <div>
        {order.map((item) => (
          <div
            key={item.id}
            className="py-3 flex border-b last-of-type:border-0 items-center"
          >
            <div className="w-32">
              <Image
                width={400}
                height={500}
                src={`/img/${item.image}.webp`}
                alt={`${item.name}`}
                priority
              />
            </div>
            <div className="p-5 sace-y-2">
              <h4 className="text-xl font-bold text-amber-500">{item.name}</h4>
              <p className="text-lg font-bold">Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-4xl text-amber-500">
          Total due: {moneyFormat(total)}
        </p>

        <button
          onClick={completeOrder}
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded"
        >
          Complete Order
        </button>
      </div>
    </div>
  );
};

export default Order;
