import Image from "next/image";
import useStore from "@/hooks/useStore";

const Category = ({ category }) => {
  const { currentCategory, handleCurrentCategory } = useStore();

  const { name, icon, id } = category;

  return (
    <div
      className={`${
        currentCategory?.id === id
          ? "text-amber-500 border-amber-500 border"
          : ""
      } flex gap-10 justify-center w-full border items-center p-5 hover:text-amber-400 hover:border-amber-500 transition-colors rounded`}
    >
      <button
        onClick={() => handleCurrentCategory(id)}
        className="text-2xl font-bold hover cursor-pointer uppercase"
      >
        {name}
      </button>
    </div>
  );
};

export default Category;
