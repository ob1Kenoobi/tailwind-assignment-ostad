import React from "react";
import { Link } from "react-router-dom";

export default function FrontendLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <header className="relative flex items-center justify-between px-8 py-4 text-white bg-black shadow">
        {/* Left: Logo and Brand */}
        <div className="flex items-center gap-4">
          <img src="/book-logo.svg" alt="Logo" className="w-10 h-10" />
          <div className="leading-tight">
            <h1 className="text-xl font-bold text-yellow-600">NETH</h1>
            <h2 className="text-xl font-bold text-yellow-600">BOOKPOINT</h2>
            <p className="text-xs italic text-gray-300">
              A Stop for Great Read
            </p>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link to="/" className="transition hover:text-yellow-500">
            Home
          </Link>
          <Link to="/about" className="transition hover:text-yellow-500">
            About
          </Link>
          <Link to="/shop-now" className="transition hover:text-yellow-500">
            Shop
          </Link>
          <Link
            to="/delivery-team"
            className="transition hover:text-yellow-500"
          >
            Delivery Team
          </Link>
          <Link to="/sellers" className="transition hover:text-yellow-500">
            Sellers
          </Link>
          <Link
            to="/admin/products"
            className="transition hover:text-yellow-500"
          >
            Admin
          </Link>
        </nav>

        {/* Right: Avatar and Email */}
        <div className="flex items-center gap-2">
          <img
            src="/avatar-user.png"
            alt="User"
            className="w-8 h-8 border border-yellow-500 rounded-full"
          />
          <span className="text-sm">user1@bookpoint.com</span>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 bg-white">{children}</main>

      {/* Footer */}
      <footer className="py-4 text-sm text-center text-gray-500 border-t">
        © 2025 NETH BOOKPOINT. All rights reserved.
      </footer>
    </div>
  );
}
