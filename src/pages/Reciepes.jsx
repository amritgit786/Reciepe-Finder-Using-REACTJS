import { useEffect, useState } from "react";
import RecipeList from "../Components/RecipeList";
import Search from "../Components/Search";
import { getRecipes } from "../Services/api";

const Reciepes = () => {
  const [searchedQuery, setSearchedQuery] = useState("pizza");
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getSearchedResult();
  }, [searchedQuery]);

  const getSearchedResult = async () => {
    let result = await getRecipes(searchedQuery);
    if (result && result.recipes) {
      setRecipe(result.recipes);
    }
  };

  return (
    <>
      <Search setSearchedQuery={setSearchedQuery} />
      <RecipeList recipe={recipe} searchedQuery={searchedQuery} />
    </>
  );
};
export default Reciepes;
