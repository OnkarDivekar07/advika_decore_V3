// src/components/Navbar/MobileNav.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FiHome, FiShoppingCart, FiUser, FiHeart } from "react-icons/fi";

const MobileNav = ({ closeMenu }) => {
  const navigate = useNavigate();

  const handleNav = (path) => {
    closeMenu();
    navigate(path);
  };

  return (
    <div className="flex flex-col gap-3 mt-4">
      <button onClick={() => handleNav("/")} className="flex items-center gap-2 text-lg">
        <FiHome /> Home
      </button>
      <button onClick={() => handleNav("/wishlist")} className="flex items-center gap-2 text-lg">
        <FiHeart /> Wishlist
      </button>
      <button onClick={() => handleNav("/cart")} className="flex items-center gap-2 text-lg">
        <FiShoppingCart /> Cart
      </button>
      <button onClick={() => handleNav("/account")} className="flex items-center gap-2 text-lg">
        <FiUser /> Account
      </button>
    </div>
  );
};

export default React.memo(MobileNav);
