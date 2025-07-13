import {
  FiHome, FiSearch, FiHeart, FiShoppingCart, FiUser,
} from 'react-icons/fi';
import { FaTruck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md font-semibold">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:py-5">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-xl md:text-3xl font-extrabold text-gray-900 tracking-wide hover:opacity-90 transition"
        >
          <FaTruck className="text-red-500 mr-2 text-lg md:text-2xl" />
          Advika<span className="text-red-600 ml-1">Decore</span>
        </Link>

        {/* Icons for Mobile */}
        <div className="flex items-center gap-4 md:hidden ml-4 text-lg text-gray-700">
          <Link to="/" className="hover:text-red-600 transition"><FiHome /></Link>
          <Link to="/wishlist" className="hover:text-red-600 transition"><FiHeart /></Link>
          <Link to="/cart" className="hover:text-red-600 transition"><FiShoppingCart /></Link>
          <Link to="/profile" className="hover:text-red-600 transition"><FiUser /></Link>
          <Link to="/search" className="hover:text-red-600 transition"><FiSearch /></Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-gray-800 text-base">
          <li className="hover:text-red-600 transition"><Link to="/"><FiHome className="inline mr-1" />Home</Link></li>
          <li className="hover:text-red-600 transition"><Link to="/wishlist"><FiHeart className="inline mr-1" />Wishlist</Link></li>
          <li className="hover:text-red-600 transition"><Link to="/cart"><FiShoppingCart className="inline mr-1" />Cart</Link></li>
          <li className="hover:text-red-600 transition"><Link to="/profile"><FiUser className="inline mr-1" />Profile</Link></li>
        </ul>

        {/* Search Box (Desktop) */}
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg focus-within:ring-2 focus-within:ring-red-500">
          <FiSearch className="text-gray-500 hover:text-red-600 transition" />
          <input
            type="text"
            placeholder="Search products..."
            className="ml-2 bg-transparent outline-none text-sm w-48"
          />
        </div>
      </div>
    </nav>
  );
}
