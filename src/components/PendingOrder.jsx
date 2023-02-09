import Image from "next/image";
import { moneyFormat } from "../helpers/index";

const PendingOrders = ({ po }) => {
  //console.log(po);
  const { id, name, total, order } = po;
  //console.log(order);

  return (
    <div
      className={`${
        order?.id === id ? "bg-amber-500 text-white" : ""
      }border p-10 space-y-5`}
    >
      <h1 className="text-4xl font-bold">Order: {id}</h1>
      <p className="text-lg my-10 font-bold">Client: {name}</p>
      <div>
        {order?.map((item) => (
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
              <p className="text-lg font-bold">Total : {moneyFormat(total)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingOrders;
