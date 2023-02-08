import useSWR from "swr";
import axios from "axios";
import AdminLayout from "@/layout/AdminLayout";
import CompletedOrder from "@/components/CompletedOrders";

const CompletedOrders = () => {
  const fetcher = () =>
    axios("/api/completed-orders").then((data) => data.data);
  const { data, error, isLoading } = useSWR("/api/completed-orders", fetcher);

  return (
    <AdminLayout>
      <div>
        {data && data.length
          ? data.map((co) => <CompletedOrder key={co.id} co={co} />)
          : "No complete orders yet"}
      </div>
    </AdminLayout>
  );
};

export default CompletedOrders;
