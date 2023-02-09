import Link from "next/link";
import useSWR from "swr";
import axios from "axios";
import AdminLayout from "@/layout/AdminLayout";
import CompletedOrder from "@/components/CompletedOrder";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

const CompletedOrders = () => {
  const fetcher = () =>
    axios("/api/completed-orders").then((data) => data.data);
  const { data, error, isLoading } = useSWR("/api/completed-orders", fetcher);
  //console.log(data);

  //Total Earnings
  let totalEarnings = data?.reduce(
    (accumulaator, data) => accumulaator + data?.total,
    0
  );

  return (
    <AdminLayout>
      <div className="flex justify-between items-center text-xl uppercase font-bold">
        <p>Total earnings: ${totalEarnings}.00</p>
        <Link
          href="/admin"
          className=" text-blue-600 text-xl uppercase font-bold "
        >
          <div className="flex items-center gap-4">
            <p>Click here to return to the administration panel</p>
            <ArrowLeftCircleIcon className="w-8" />
          </div>
        </Link>
      </div>

      <div className="mt-10">
        {data && data.length
          ? data.map((co) => <CompletedOrder key={co.id} co={co} />)
          : "No complete orders yet"}
      </div>
    </AdminLayout>
  );
};

export default CompletedOrders;
