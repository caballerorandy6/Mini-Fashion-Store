import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

//Context
const StoreContext = createContext();

//Provider
const StoreProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);

  const router = useRouter();

  //Get Categories
  const getCategories = async () => {
    try {
      const { data } = await axios("/api/categories");
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  //Defining a current default category
  useEffect(() => {
    setCurrentCategory(categories[0]);
  }, [categories]);

  //Calculate Total
  useEffect(() => {
    const newTotal = order.reduce(
      (total, product) => product.price * product.quantity + total,
      0
    );
    setTotal(newTotal);
  }, [order]);

  //Identify Current Category
  const handleCurrentCategory = (id) => {
    const category = categories.filter((cat) => cat.id === id);
    setCurrentCategory(category[0]);
    router.push("/");
  };

  //Using a new Function to set product
  const handleSetProduct = (product) => {
    setProduct(product);
  };

  //Change modal state
  const handleChangeModal = () => {
    setModal(!modal);
  };

  //(ADD and Update)
  const handleAddOrder = ({ categoryId, ...product }) => {
    if (order.some((productState) => productState.id === product.id)) {
      //Update Product Quantity
      const updatedOrder = order.map((productState) =>
        productState.id === product.id ? product : productState
      );
      setOrder(updatedOrder);
      toast.success("Saved successfully!");
    } else {
      setOrder([...order, product]);
      toast.success("Added to order successfully!");
    }
    setModal(false);
  };

  //Edit Quantity
  const handleEditQuantity = (id) => {
    const updateProduct = order.filter((product) => product.id === id);
    setProduct(updateProduct[0]);
    setModal(!modal);
  };

  //Delect Product
  const handleDeleteProduct = (id) => {
    const updatedOrder = order.filter((product) => product.id !== id);
    setOrder(updatedOrder);
  };

  //Send Order to DataBase
  const placeOrder = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/orders", {
        order,
        name,
        total,
        date: Date.now().toString(),
      });

      //App Reset
      setCurrentCategory(categories[0]);
      setOrder([]);
      setName("");
      setTotal(0);

      toast.success("Order placed successfully!");

      setTimeout(() => {
        router.push("/");
      }, 2000);

      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StoreContext.Provider
      value={{
        categories,
        currentCategory,
        handleCurrentCategory,
        product,
        handleSetProduct,
        modal,
        handleChangeModal,
        handleAddOrder,
        order,
        handleDeleteProduct,
        handleEditQuantity,
        name,
        setName,
        placeOrder,
        total,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider };

export default StoreContext;
