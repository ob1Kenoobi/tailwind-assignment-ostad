// src/pages/admin/products.jsx
import React, { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { products as allProducts } from "../../data/products";

const statusStyles = {
  Open: "bg-blue-100 text-blue-800",
  Paid: "bg-green-100 text-green-800",
  Inactive: "bg-red-100 text-red-800",
  Active: "bg-yellow-100 text-yellow-800",
  Due: "bg-red-100 text-red-800",
};

export default function AdminProducts() {
  const [products, setProducts] = useState(allProducts);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalProduct, setModalProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 10;

  const toggleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handleSave = () => {
    if (modalProduct.id) {
      setProducts((prev) =>
        prev.map((p) => (p.id === modalProduct.id ? modalProduct : p))
      );
    } else {
      setProducts((prev) => [
        ...prev,
        { ...modalProduct, id: Date.now().toString() },
      ]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.status.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    const aValue = a[sortField]?.toString().toLowerCase();
    const bValue = b[sortField]?.toString().toLowerCase();
    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const currentData = sorted.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <AdminLayout>
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Product Dashboard</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-64 px-3 py-2 border rounded shadow-sm"
            />
            <button
              className="px-4 py-2 text-white bg-blue-600 rounded"
              onClick={() => {
                setModalProduct({
                  name: "",
                  description: "",
                  status: "Open",
                  price: 0,
                  category: "",
                });
                setIsModalOpen(true);
              }}
            >
              + Add Product
            </button>
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 border">#</th>
                <th
                  className="px-4 py-3 border cursor-pointer"
                  onClick={() => toggleSort("name")}
                >
                  Name{" "}
                  {sortField === "name"
                    ? sortOrder === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </th>
                <th className="px-4 py-3 border">Description</th>
                <th
                  className="px-4 py-3 border cursor-pointer"
                  onClick={() => toggleSort("status")}
                >
                  Status{" "}
                  {sortField === "status"
                    ? sortOrder === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </th>
                <th
                  className="px-4 py-3 border cursor-pointer"
                  onClick={() => toggleSort("price")}
                >
                  Price{" "}
                  {sortField === "price"
                    ? sortOrder === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </th>
                <th className="px-4 py-3 border">Category</th>
                <th className="px-4 py-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((product, idx) => (
                <tr
                  key={product.id}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-3 border">
                    {(currentPage - 1) * itemsPerPage + idx + 1}
                  </td>
                  <td className="px-4 py-3 font-medium border">
                    {product.name}
                  </td>
                  <td className="px-4 py-3 text-gray-600 border">
                    {product.description.slice(0, 45)}...
                  </td>
                  <td className="px-4 py-3 border">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        statusStyles[product.status] ||
                        "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm border">
                    Rs. {product.price}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 border">
                    {product.category}
                  </td>
                  <td className="px-4 py-3 text-sm border">
                    <button
                      className="mr-2 text-blue-600"
                      onClick={() => {
                        setModalProduct(product);
                        setIsModalOpen(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between p-4 text-sm text-gray-500 border-t">
            <div>
              Showing {(currentPage - 1) * itemsPerPage + 1}-
              {Math.min(currentPage * itemsPerPage, sorted.length)} of{" "}
              {sorted.length}
            </div>
            <div className="flex items-center gap-2">
              <button
                className="text-gray-700"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              >
                ‹
              </button>
              <span>
                {currentPage}/{totalPages}
              </span>
              <button
                className="text-gray-700"
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="w-full max-w-md p-6 bg-white rounded">
              <h3 className="mb-4 text-lg font-semibold">
                {modalProduct?.id ? "Edit Product" : "Add Product"}
              </h3>
              <input
                type="text"
                className="w-full p-2 mb-2 border"
                placeholder="Name"
                value={modalProduct.name}
                onChange={(e) =>
                  setModalProduct({ ...modalProduct, name: e.target.value })
                }
              />
              <input
                type="text"
                className="w-full p-2 mb-2 border"
                placeholder="Description"
                value={modalProduct.description}
                onChange={(e) =>
                  setModalProduct({
                    ...modalProduct,
                    description: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="w-full p-2 mb-2 border"
                placeholder="Category"
                value={modalProduct.category}
                onChange={(e) =>
                  setModalProduct({ ...modalProduct, category: e.target.value })
                }
              />
              <input
                type="number"
                className="w-full p-2 mb-2 border"
                placeholder="Price"
                value={modalProduct.price}
                onChange={(e) =>
                  setModalProduct({
                    ...modalProduct,
                    price: Number(e.target.value),
                  })
                }
              />
              <select
                className="w-full p-2 mb-4 border"
                value={modalProduct.status}
                onChange={(e) =>
                  setModalProduct({ ...modalProduct, status: e.target.value })
                }
              >
                <option>Open</option>
                <option>Paid</option>
                <option>Inactive</option>
                <option>Due</option>
              </select>
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 text-white bg-blue-600 rounded"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </AdminLayout>
  );
}
