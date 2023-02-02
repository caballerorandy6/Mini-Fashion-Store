import Layout from "@/layout/Layout";
import ResumeProduct from "@/components/ResumeProduct";
import useStore from "@/hooks/useStore";

const Resume = () => {
  const { order } = useStore();

  return (
    <Layout page=" - Resume">
      <h1 className="text-4xl font-bold uppercase">Resume</h1>
      <p className="text-2xl my-10">Check your order</p>

      {order?.length === 0 ? (
        <p className="text-center text-2xl">No items in your order</p>
      ) : (
        order?.map((product) => (
          <ResumeProduct product={product} key={product.id} />
        ))
      )}
    </Layout>
  );
};

export default Resume;
