import Image from "next/image";
import useStore from "@/hooks/useStore";
import Category from "./Category";
import Link from "next/link";

const Sidebar = () => {
  const { categories } = useStore();

  return (
    <>
      <Link href="/">
        <Image
          className="p-10 object-fill"
          width={300}
          height={100}
          src="/img/sidebar/logo.png"
          alt="Logo"
          priority
        />
      </Link>

      <nav className="mt-10">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
