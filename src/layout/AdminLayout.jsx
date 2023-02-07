import Head from "next/head";
import Image from "next/image";
import OrdersSidebar from "@/components/OrdersSidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, page }) {
  return (
    <>
      <Head>
        <title>Fashion Store {page}</title>
        <meta name="description" content="Mini Fashion Store" />
        <link href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
          <Image
            className="p-10 object-fill"
            width={300}
            height={100}
            src="/img/sidebar/logo.png"
            alt="imagen logotipo"
          />
          <OrdersSidebar />
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">{children}</div>
        </main>
      </div>
      <ToastContainer />
    </>
  );
}
