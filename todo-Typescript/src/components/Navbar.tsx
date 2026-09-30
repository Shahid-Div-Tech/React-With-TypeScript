import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="mx-auto flex max-w-xl gap-2 border-b pb-3">
      <Link
        to="/"
        className="rounded-md px-4 py-2 text-sm hover:bg-gray-100"
      >
        All
      </Link>

      <Link
        to="/?todos=active"
        className="rounded-md px-4 py-2 text-sm hover:bg-gray-100"
      >
        Active
      </Link>

      <Link
        to="/?todos=completed"
        className="rounded-md px-4 py-2 text-sm hover:bg-gray-100"
      >
        Completed
      </Link>
    </nav>
  );
};