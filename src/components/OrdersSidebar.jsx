import Link from "next/link";

const OrdersSidebar = () => {
  return (
    <div className="flex flex-col w-3-12">
      <Link
        href="/pendingOrders"
        className="border p-10 text-center text-3xl font-bold text-amber-500 hover:text-white hover:bg-amber-500 transition-colors"
      >
        Pending Orders
      </Link>
      <Link
        href="/completedOrders"
        className="border p-10 text-center text-3xl font-bold text-amber-500 hover:text-white hover:bg-amber-500 transition-colors"
      >
        Completed Orders
      </Link>
    </div>
  );
};

export default OrdersSidebar;
