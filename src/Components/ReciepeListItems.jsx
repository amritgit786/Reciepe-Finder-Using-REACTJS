import React from "react";
import { Link } from "react-router-dom";

const ReciepeListItems = ({ res }) => {
  return (
    <>
      <div className="card mt-3" style={{ width: "18rem" }}>
        <img
          src={res.image_url}
          className="card-img-top"
          alt="thumbnail"
          style={{ height: 180 }}
        />
        <div className="card-body">
          <h5 className="card-title">{res.title}</h5>
          <p className="card-text">{res.publisher}</p>
          <Link to={`/reciepe/${res.recipe_id}`}>
            <button className="btn btn-primary btn-sm">Details</button>
          </Link>
          <a href={res.source_url} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-success btn-sm mx-2">Reciepe URL</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ReciepeListItems;
