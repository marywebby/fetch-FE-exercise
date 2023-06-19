import React from "react";
// import Search from "../Search"
import Header from "../Header";
import DogCard from "../DogCard";

const SearchPage = () => {
  return (
    <div>
        {/* <Header/> */}
        <DogCard/>
        {/* <Search/> */}
    <footer
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <p className="footerText is-flex is-justify-content-center is-align-items-center">
        © 2023{" "}
      </p>
    </footer>
    </div>
  );
};

export default SearchPage;