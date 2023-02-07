import useSWR from "swr";
import axios from "axios";
import AdminLayout from "@/layout/AdminLayout";
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
        <p className="text-2xl my-10">Manage orders</p>

        {data && data.length
          ? data.map((or) => <Order key={or.id} or={or} />)
          : "No pending orders yet"}
      </div>
    </AdminLayout>
  );
};

export default Admin;
