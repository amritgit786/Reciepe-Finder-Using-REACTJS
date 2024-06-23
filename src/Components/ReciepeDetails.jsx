import React, { useEffect, useState } from "react";
import { getRecipe } from "../Services/api";
import { Link, useParams } from "react-router-dom";

const ReciepeDetails = () => {
  const [recipe, setRecipe] = useState({});
  const { reciepeId } = useParams();
  useEffect(() => {
    const getData = async () => {
      let result = await getRecipe(reciepeId);
      console.log(reciepeId);
      if (result && result.recipe) {
        console.log(result.recipe);
        setRecipe(result.recipe);
      }
    };
    getData();
  });
  return Object.keys(recipe).length > 0 ? (
    <div className="container detailsPageContent">
      <div className="row">
        <div className="col-md-6">
          <Link to={`/reciepe`} className="btn btn-warning mb-4 text-white">
            Back to Recipe List
          </Link>
          <img src={recipe.image_url} alt="ImageDescription" />
        </div>
        <div className="col-md-6">
          <h2 className="text-center fw-bold fs-1 ms-5">{recipe.title}</h2>
          <p className="ms-5">Provided By : {recipe.publisher}</p>
          <a
            href={recipe.publisher_url}
            target="_blank"
            className="btn btn-info ms-5 mb-3"
            rel="noreferrer"
          >
            Publisher Webpage
          </a>
          <a
            href={recipe.source_url}
            target="_blank"
            className="btn btn-success mb-3 mx-2"
            rel="noreferrer"
          >
            Recipe URL
          </a>
          <h2 className="text-center fw-bold fs-1">Ingredients</h2>
          <ul class="list-group ms-5 mt-5">
            {recipe &&
              recipe.ingredients.map((data) => (
                <li class="list-group-item">{data}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  ) : null;
};

export default ReciepeDetails;
