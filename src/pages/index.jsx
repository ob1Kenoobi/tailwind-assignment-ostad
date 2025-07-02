import React from "react";
import FrontendLayout from "../layouts/FrontendLayout";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function HomePage() {
  return (
    <FrontendLayout>
      {/* Hero Section */}
      <section className="px-4 py-16 text-center text-white bg-black">
        <h1 className="mb-4 text-3xl font-bold text-orange-400 sm:text-5xl">
          The Book Lover's Dreamland Awaits!
        </h1>
        <p className="max-w-2xl mx-auto mb-6 text-gray-300">
          Welcome to the ultimate book lover's paradise! Join our community and
          contribute to the ever-evolving library of stories, where every book
          has a chance to inspire someone new.
        </p>
        <div className="flex items-center justify-center max-w-lg gap-2 mx-auto">
          <input
            type="text"
            placeholder="Search a Book"
            className="w-full px-4 py-2 text-black border border-yellow-500 rounded-l-md"
          />
          <button className="px-4 py-2 font-medium text-white bg-yellow-600 rounded-r-md">
            Search
          </button>
        </div>
        <div className="mt-10">
          <img
            src="https://via.placeholder.com/400x200?text=Open+Book"
            alt="Open Book"
            className="mx-auto"
          />
        </div>
      </section>

      {/* Best Picks Section */}
      <section className="py-16 text-center bg-white">
        <h2 className="mb-10 text-3xl font-bold">Our Best Picks</h2>
        <div className="grid max-w-6xl grid-cols-1 gap-6 px-4 mx-auto sm:grid-cols-2 md:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden border rounded-xl"
            >
              <img
                src="https://via.placeholder.com/200x280?text=Book+Cover"
                alt={product.name}
                className="object-cover w-full"
              />
              <span className="absolute px-2 py-1 text-xs font-bold text-white bg-orange-500 rounded top-2 left-2">
                Editor's Pick
              </span>
              <button className="absolute flex items-center justify-center w-8 h-8 text-white bg-yellow-500 rounded-full top-2 right-2">
                🛒
              </button>
              <div className="p-4 text-left">
                <h3 className="font-semibold truncate text-md">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Section */}
      <section className="px-4 py-16 text-white bg-black">
        <div className="grid items-center max-w-6xl gap-10 mx-auto md:grid-cols-2">
          <div>
            <img
              src="https://via.placeholder.com/500x200?text=Bookshelf"
              alt="Bookshelf"
              className="shadow rounded-xl"
            />
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-semibold text-yellow-400">
              Your favourite <span className="text-white">Reads Are Here!</span>
            </h3>
            <p className="mb-6 text-gray-300">
              Buy your favorite books online with ease! Enjoy exclusive offers
              and discounts on selected titles. Dive into our collection and
              find special deals that make reading more affordable.
            </p>
            <div className="flex gap-6 mb-6 text-center">
              <div>
                <p className="text-2xl font-bold text-yellow-400">800+</p>
                <p className="text-sm text-gray-400">Book Listing</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-400">1K+</p>
                <p className="text-sm text-gray-400">Registered Members</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-400">50+</p>
                <p className="text-sm text-gray-400">Branch Count</p>
              </div>
            </div>
            <button className="px-6 py-2 text-yellow-400 transition border border-yellow-500 rounded hover:bg-yellow-500 hover:text-black">
              Explore More
            </button>
          </div>
        </div>
      </section>

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
