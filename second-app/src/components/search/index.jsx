// import { useState } from "react";
import React from "react";

const Search = ({ searchValue, handleChange }) => {
  return (
    <>
      <p>Search Value: {searchValue}</p>
      <input placeholder="Хайх" onChange={handleChange} />
    </>
  );
};

export default Search;
