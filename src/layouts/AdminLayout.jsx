import React from "react";
import { Link } from "react-router-dom";
import {
  FaChartBar,
  FaUsers,
  FaGlobe,
  FaComments,
  FaHandshake,
  FaFileExport,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { HiOutlineChevronDown } from "react-icons/hi";

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="flex flex-col justify-between w-64 min-h-screen bg-white border-r shadow-sm">
        {/* Top section */}
        <div>
          <div className="flex items-center gap-2 px-6 py-4 text-xl font-bold text-gray-800">
            <span role="img" aria-label="logo">
              🍊
            </span>
            OrangeFarm
          </div>

          {/* Search */}
          <div className="px-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-2 text-sm bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-400"
            />
          </div>

          {/* Nav links */}
          <nav className="mt-6 space-y-2 text-sm font-medium text-gray-700">
            <Link
              to="/admin/products"
              className="flex items-center gap-3 px-6 py-2 hover:bg-gray-100"
            >
              <FaChartBar className="text-orange-500" />
              Dashboard
            </Link>

            <div className="flex items-center justify-between px-6 py-2 cursor-pointer hover:bg-gray-100">
              <div className="flex items-center gap-3">
                <FaUsers className="text-orange-500" />
                Customers
              </div>
              <HiOutlineChevronDown className="text-gray-400" />
            </div>

            <Link
              to="#"
              className="flex items-center gap-3 px-6 py-2 hover:bg-gray-100"
            >
              <FaChartBar className="text-orange-500" />
              All reports
            </Link>

            <Link
              to="#"
              className="flex items-center gap-3 px-6 py-2 hover:bg-gray-100"
            >
              <FaGlobe className="text-orange-500" />
              Geography
            </Link>

            <Link
              to="#"
              className="flex items-center gap-3 px-6 py-2 hover:bg-gray-100"
            >
              <FaComments className="text-orange-500" />
              Conversations
            </Link>

            <Link
              to="#"
              className="flex items-center gap-3 px-6 py-2 hover:bg-gray-100"
            >
              <FaHandshake className="text-orange-500" />
              Deals
            </Link>

            <Link
              to="#"
              className="flex items-center gap-3 px-6 py-2 hover:bg-gray-100"
            >
              <FaFileExport className="text-orange-500" />
              Export
            </Link>
          </nav>
        </div>

        {/* Bottom section */}
        <div className="px-6 py-4 border-t">
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">
                Gustavo Xavier
              </p>
              <span className="inline-block px-2 py-0.5 mt-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full">
                Admin
              </span>
            </div>
          </div>

          <div className="mt-4 space-y-1 text-sm">
            <Link
              to="#"
              className="flex items-center gap-2 text-gray-700 hover:text-orange-500"
            >
              <FaCog />
              Settings
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-red-600 hover:underline"
            >
              <FaSignOutAlt />
              Log out
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <header className="flex items-center justify-between p-4 bg-white shadow">
          <h1 className="text-lg font-semibold text-gray-700">Admin Panel</h1>
          <div className="text-sm text-gray-500">Welcome, Admin</div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
