import React from "react";

const Header = () => {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <h1 className="m-0" style={{ fontSize: "3rem" }}>
          Massage Booker
        </h1>
        <p className="m-0" style={{ fontSize: "1.75rem", fontWeight: "700" }}>
          Easily Book a massage
        </p>
      </div>
    </header>
  );
};

export default Header;
