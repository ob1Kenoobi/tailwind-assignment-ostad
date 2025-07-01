import React from "react";
import { Link } from "react-router-dom";

export default function FrontendLayout({ children }) {
  return (
    <div>
      <header className="p-4 text-white bg-blue-600">
        <nav className="flex justify-center gap-6 text-lg font-medium">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/shop-now" className="hover:underline">
            Shop Now
          </Link>
          <Link to="/admin/products" className="hover:underline">
            Admin
          </Link>
        </nav>
      </header>
      <main className="max-w-6xl p-4 mx-auto">{children}</main>
    </div>
  );
}
