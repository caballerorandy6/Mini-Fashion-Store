import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <>
      <nav className="flex gap-4 justify-end items-center mt-10 px-10 mb-4">
        <Link
          href="/"
          className={`text-2xl font-bold p-2 text-amber-500 hover:text-slate-50 hover:bg-amber-500 hover:p-2 hover:rounded hover:transition-colors ${
            router.pathname === "/"
              ? "bg-amber-500 text-slate-50 p-2 transition-colors rounded"
              : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/resume"
          className={`text-2xl font-bold p-2 text-amber-500 hover:text-slate-50 hover:bg-amber-500 hover:p-2 hover:rounded hover:transition-colors ${
            router.pathname === "/resume"
              ? "bg-amber-500 text-slate-50 p-2 transition-colors rounded"
              : ""
          }`}
        >
          Resume
        </Link>
        <Link
          href="/total"
          className={`text-2xl font-bold p-2 text-amber-500 hover:text-slate-50 hover:bg-amber-500 hover:p-2 hover:rounded hover:transition-colors ${
            router.pathname === "/total"
              ? "bg-amber-500 text-slate-50 p-2 transition-colors rounded"
              : ""
          }`}
        >
          Total
        </Link>
        <Link
          href="/admin"
          className={`text-2xl font-bold p-2 text-amber-500 hover:text-slate-50 hover:bg-amber-500 hover:p-2 hover:rounded hover:transition-colors ${
            router.pathname === "/admin"
              ? "bg-amber-500 text-slate-50 p-2 transition-colors rounded"
              : ""
          }`}
        >
          Admin
        </Link>
      </nav>
    </>
  );
};

export default Nav;
