// src/pages/shop-now.jsx
import React, { useState } from "react";
import FrontendLayout from "../layouts/FrontendLayout";
import { products as initialProducts } from "../data/products";

export default function ShopNow() {
  const [category, setCategory] = useState("All");
  // const [search, setSearch] = useState(""); // unused
  // const [cartItems, setCartItems] = useState([]); // unused

  const categories = [
    "All",
    "Fiction",
    "Translations",
    "Kids",
    "Horror",
    "Fantasy",
    "Science Fiction",
    "Romance",
    "Mystery",
    "Non-Fiction",
    "History",
    "Biography",
    "Self-Help",
    "Philosophy",
    "Poetry",
  ];

  const filteredProducts = initialProducts.filter(
    (p) => category === "All" || p.category === category
  );

  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <FrontendLayout>
      {/* Header */}
      <section className="px-4 py-12 text-center bg-white">
        <h1 className="mb-6 text-3xl font-bold text-yellow-600">
          Explore All Books Here
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 border rounded-full text-sm font-medium transition ${
                category === cat
                  ? "bg-yellow-500 text-white border-yellow-500"
                  : "border-gray-300 text-gray-600 hover:border-yellow-500 hover:text-yellow-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-4 max-w-7xl">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden transition border shadow-sm rounded-xl hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={
                    product.image ||
                    "https://via.placeholder.com/200x280?text=Book+Cover"
                  }
                  alt={product.name}
                  className="object-cover w-full h-72"
                />
                {product.status === "Editor" && (
                  <span className="absolute px-2 py-1 text-xs font-bold text-white bg-orange-500 rounded top-2 left-2">
                    Editor's Pick
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="mb-1 font-semibold truncate text-md">
                  {product.name}
                </h3>
                <p className="mb-1 text-sm text-gray-600">
                  {product.description}
                </p>
                <p className="mb-2 text-sm font-semibold text-gray-800">
                  Rs. {product.price}
                </p>
                <p className="mb-3 text-xs text-gray-500">
                  {product.status === "Colombo"
                    ? "Available in Colombo Branch Only"
                    : "Available across all branches"}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full px-3 py-2 text-yellow-600 transition border border-yellow-500 rounded hover:bg-yellow-500 hover:text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Cart Icon */}
      <div className="fixed flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-full shadow-lg cursor-pointer bottom-6 right-6 hover:bg-yellow-600">
        🛒
      </div>

      {/* Footer Included via FrontendLayout */}
      {/* Footer */}
      <footer className="px-4 py-6 text-sm text-center text-gray-500 bg-black">
        <p>
          © 2025 <span className="text-yellow-500">Neth BookPoint</span>
        </p>
        <p className="mt-2">
          Visit our branches in Galle, Kurunegala, Kandy, and Colombo, and
          register for our online platform to enjoy maximum benefits!
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:text-white">
            🌐 FB
          </a>
          <a href="#" className="hover:text-white">
            💼 LinkedIn
          </a>
        </div>
      </footer>
    </FrontendLayout>
  );
}
