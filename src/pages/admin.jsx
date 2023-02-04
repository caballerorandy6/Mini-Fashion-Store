import AdminLayout from "@/layout/AdminLayout";

const Admin = () => {
  return (
    <AdminLayout page={"Admin"}>
      {" "}
      <h1 className="text-4xl font-bold uppercase">Administration panel</h1>
      <p className="text-2xl my-10">Manage orders</p>
    </AdminLayout>
  );
};

export default Admin;
