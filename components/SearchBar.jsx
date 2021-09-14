import React, { useState } from "react";

const SearchBar = (props) => {
  const [productName, setProductName] = useState("");

  const handleChange = (e) => {
    setProductName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(productName);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          id="search"
          type="text"
          value=""
          placeholder="Search for anything"
          onChange={handleChange}
          className="search-placeholder"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
