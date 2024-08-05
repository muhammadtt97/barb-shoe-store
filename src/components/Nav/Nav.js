import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import cartImage2 from "../../images/cart7.svg";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { selectTotalItems } from "../../store";

function Nav() {
  // Use state
  const [activeState, setActiveState] = useState("home");

  const navItems = [
    { name: "home", label: "Home", path: "/" },
    { name: "about", label: "About", path: "/about" },
    { name: "product", label: "Products", path: "/product" },
    { name: "contact", label: "Contact Us", path: "/contact" },
    { name: "signin", label: "Sign In", path: "/signin" },
    { name: "signup", label: "Sign Up", path: "/signup" },
  ];

  // Function to set active state
  const setActive = (stateName) => {
    setActiveState(stateName);
  };

  // Total
  let totalItems = useSelector(selectTotalItems);

  return (
    <div>
      <h1 className="barb-shoes">Barb Shoe Store</h1>
      <div className="nav-container">
        <nav>
          <h2>
            <h3 className="logo">Barb Shoe Store</h3>

            {navItems.map((item) => (
              <Link
                key={item.name}
                className={`hvr-underline-from-center nav-link ${
                  activeState === item.name ? "active" : ""
                }`}
                to={item.path}
                onClick={() => setActive(item.name)}
              >
                {item.label}
              </Link>
            ))}

            {/* Badged */}
            <Badge badgeContent={totalItems} color="primary">
              <Link
                className={`hvr-underline-from-center nav-link ${
                  activeState === "cart" ? "active" : ""
                }`}
                to="/cart"
                onClick={() => setActive("cart")}
              >
                <img
                  alt="cart"
                  title="cart"
                  className="nav-cart"
                  src={cartImage2}
                />
              </Link>
            </Badge>
          </h2>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
