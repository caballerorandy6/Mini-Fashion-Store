import Link from "next/link";
import useSWR from "swr";
import axios from "axios";
import AdminLayout from "@/layout/AdminLayout";
import PendingOrder from "@/components/PendingOrder";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

const PendingOrders = () => {
  const fetcher = () => axios("/api/pending-orders").then((data) => data.data);
  const { data, error, isLoading } = useSWR("/api/pending-orders", fetcher);
  console.log(data);

  return (
    <AdminLayout>
      <div className="flex justify-end items-center text-xl uppercase font-bold">
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
          ? data?.map((po) => <PendingOrder key={po.id} po={po} />)
          : "No pending orders yet"}
      </div>
    </AdminLayout>
  );
};

export default PendingOrders;
