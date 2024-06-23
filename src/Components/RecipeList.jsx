import React from "react";
import ReciepeListItems from "./ReciepeListItems";

const RecipeList = ({ recipe, searchedQuery }) => {
  return (
    <>
      <div className="container">
        <h2 className="text-center fw-bold fs-3">
          RECIPE LIST FOR {searchedQuery}
        </h2>
        <div className="row">
          {recipe &&
            recipe.map((res) => (
              <div className="col-md-3">
                <ReciepeListItems res={res} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default RecipeList;
