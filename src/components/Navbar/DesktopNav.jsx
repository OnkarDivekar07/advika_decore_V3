// src/components/Navbar/DesktopNav.jsx
import React from "react";
import NavIconButton from "./NavIconButton";
import { FiHome, FiShoppingCart, FiUser, FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const DesktopNav = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavIconButton icon={<FiHome />} label="Home" onClick={() => navigate("/")} />
      <NavIconButton icon={<FiHeart />} label="Wishlist" onClick={() => navigate("/wishlist")} />
      <NavIconButton icon={<FiShoppingCart />} label="Cart" onClick={() => navigate("/cart")} />
      <NavIconButton icon={<FiUser />} label="Account" onClick={() => navigate("/account")} />
    </>
  );
};

export default React.memo(DesktopNav);
