import React from "react";
import FrontendLayout from "../layouts/FrontendLayout";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function HomePage() {
  return (
    <FrontendLayout>
      <div className="mb-6">
        <h2 className="mb-2 text-xl font-bold">Welcome to My Shop</h2>
        <p className="text-gray-700">Explore our top products below.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </FrontendLayout>
  );
}
