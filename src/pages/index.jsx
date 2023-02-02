import Layout from "@/layout/Layout";
import useStore from "@/hooks/useStore";
import Product from "@/components/Product";

const Index = () => {
  const { currentCategory } = useStore();

  return (
    <Layout page={`Home - ${currentCategory?.name}`}>
      <h1 className="text-4xl font-bold uppercase">{currentCategory?.name}</h1>
      <p className="text-2xl my-10">Choose and personalize your order below</p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentCategory?.product?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default Index;
