import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="p-4 transition border shadow rounded-2xl hover:shadow-lg">
      <h2 className="text-lg font-semibold truncate">{product.name}</h2>
      <p className="text-sm text-gray-600 line-clamp-2">
        {product.description}
      </p>
      <p className="mt-2 font-bold">${product.price}</p>
      <span
        className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${
          product.status === "Active"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {product.status}
      </span>
    </div>
  );
}
