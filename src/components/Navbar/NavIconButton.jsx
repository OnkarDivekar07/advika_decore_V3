// src/components/Navbar/NavIconButton.jsx
import React from "react";

const NavIconButton = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      title={label}
      className="text-xl hover:text-blue-600 transition-all"
      aria-label={label}
    >
      {icon}
    </button>
  );
};

export default React.memo(NavIconButton);
