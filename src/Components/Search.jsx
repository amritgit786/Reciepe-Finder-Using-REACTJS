import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Search = ({ setSearchedQuery }) => {
  const [value, setValue] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    setSearchedQuery(value);
  };
  return (
    <>
      <div className="container search-box">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center fw-bold fs-1">
              Search Reciepe with{" "}
              <span style={{ color: "#2585D0" }}>Our Reciepe</span>
            </h2>
            <h4 className="mt-3 mb-4 text-center">
              Input Reciepes Seprated by Comma
            </h4>
            <form onSubmit={onFormSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for recipes..."
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
                <span className="input-group-text" id="basic-addon2">
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
