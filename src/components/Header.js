import React from 'react';

const Header = () => {
    return (
      <header
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          backgroundColor: "#4d1770",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <p className="headerText is-flex is-justify-content-center is-align-items-center">
          Fetch-a-Friend{" "}
        </p>
      </header>
    );
  };
  
  export default Header;
