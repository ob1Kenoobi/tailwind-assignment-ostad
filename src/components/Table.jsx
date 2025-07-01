import React from "react";

export default function Table({ products }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Description</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={product.id}
              className={index % 2 ? "bg-white" : "bg-gray-50"}
            >
              <td className="p-2 font-medium">{product.name}</td>
              <td className="p-2 text-gray-700">{product.description}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    product.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.status}
                </span>
              </td>
              <td className="p-2">${product.price}</td>
              <td className="p-2">{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
