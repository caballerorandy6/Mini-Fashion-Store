import useSWR from "swr";
import axios from "axios";
import AdminLayout from "@/layout/AdminLayout";
import Link from "next/link";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Order from "@/components/Order";

const Admin = () => {
  const fetcher = () => axios("/api/orders").then((data) => data.data);
  const { data, error, isLoading } = useSWR("/api/orders", fetcher, {
    refreshInterval: 100,
  });

  //console.log(data);
  //console.log(error);
  // console.log(isLoading);

  return (
    <AdminLayout page={"Admin"}>
      <div>
        <h1 className="text-4xl font-bold uppercase">Administration panel</h1>
        <div className="flex justify-between items-center">
          <p className="text-2xl my-10">Manage orders</p>
          <div>
            <Link
              href="/"
              className=" text-blue-600 text-xl uppercase font-bold my-10"
            >
              <div className="flex items-center gap-4">
                <p>Click here to return to home page</p>
                <ArrowLeftCircleIcon className="w-8" />
              </div>
            </Link>
          </div>
        </div>

        {data && data.length
          ? data.map((or) => <Order key={or.id} or={or} />)
          : "No pending orders yet"}
      </div>
    </AdminLayout>
  );
};

export default Admin;
