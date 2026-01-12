import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-(--c2) px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        
        
        <Link to="/" className="font-medium text-2xl">
          SparkingPlug Media
        </Link>

        <div className="hidden md:flex gap-5 items-center">
          <Link
            className="text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2"
            to="/"
          >
            Search
          </Link>
          <Link
            className="text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2"
            to="/collection"
          >
            Collection
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-40 mt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4">
          <Link
            className="text-base font-medium bg-(--c4) text-(--c1) rounded px-4 py-2"
            to="/"
            onClick={() => setOpen(false)}
          >
            Search
          </Link>
          <Link
            className="text-base font-medium bg-(--c4) text-(--c1) rounded px-4 py-2"
            to="/collection"
            onClick={() => setOpen(false)}
          >
            Collection
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
