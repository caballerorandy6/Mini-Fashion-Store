import Link from "next/link";
import { useRouter } from "next/router";

const OrdersSidebar = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-col w-3-12 mt-10">
      <Link
        href="/pendingOrders"
        className={`border p-10 text-center text-2xl font-bold hover:text-white hover:bg-amber-500 transition-colors ${
          router.pathname === "/pendingOrders"
            ? "bg-amber-500 text-white transition-colors"
            : ""
        }`}
      >
        Pending Orders
      </Link>
      <Link
        href="/completedOrders"
        className={`border p-10 text-center text-2xl font-bold hover:text-white hover:bg-amber-500 transition-colors ${
          router.pathname === "/completedOrders"
            ? "bg-amber-500 text-white transition-colors"
            : ""
        }`}
      >
        Completed Orders
      </Link>
    </nav>
  );
};

export default OrdersSidebar;
