import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import { ToastContainer } from "react-toastify";
import Nav from "@/components/Nav";
import Modal from "react-modal";
import ProductModal from "@/components/ProductModal";
import useStore from "@/hooks/useStore";

import "react-toastify/dist/ReactToastify.css";

//Modal styles from npmjs Documentation
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");

const Layout = ({ children, page }) => {
  const { modal } = useStore();

  return (
    <>
      <Head>
        <title>Fashion Store {page}</title>
        <meta name="description" content="Mini Fashion Store" />
        <link href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
      </Head>
      <div className="flex">
        <aside className="w-3/12">
          <Sidebar />
        </aside>
        <main className="w-8/12 h-screen mx-auto overflow-y-scroll">
          <Nav />
          <div className="p-10 mt-10">{children}</div>
        </main>
      </div>

      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ProductModal />
        </Modal>
      )}

      <ToastContainer />
    </>
  );
};

export default Layout;
