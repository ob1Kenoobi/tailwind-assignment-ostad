import React from "react";
import { Link } from "react-router-dom";

export default function AdminLayout({ children }) {
  return (
    <div className="max-w-6xl p-4 mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
      {children}
    </div>
  );
}
