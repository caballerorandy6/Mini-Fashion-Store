import Image from "next/image";
import useStore from "@/hooks/useStore";

const Category = ({ category }) => {
  const { currentCategory, handleCurrentCategory } = useStore();

  const { name, icon, id } = category;

  return (
    <div
      className={`${
        currentCategory?.id === id ? "text-amber-500 border-black border-2" : ""
      } flex gap-10 w-full border items-center p-5 hover:text-amber-400 transition-colors rounded`}
    >
      <Image
        src={`/img/${icon}.webp`}
        width={100}
        height={100}
        alt="Category Image"
        priority
        className="object-fill"
      />

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
