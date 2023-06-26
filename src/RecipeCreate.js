import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  const emptyRecipe = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [recipeInfo, setRecipeInfo] = useState(emptyRecipe);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipes([...recipes, recipeInfo]);
    setRecipeInfo(emptyRecipe);
  };

  const handleChange = (e) => {
    setRecipeInfo({
      ...recipeInfo,
      [e.target.name]: e.target.value,
    });
  };


  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                placeholder="Name"
                value={recipeInfo.name}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                name="cuisine"
                placeholder="Cuisine"
                value={recipeInfo.cuisine}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                name="photo"
                placeholder="URL"
                value={recipeInfo.photo}
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                placeholder="Ingredients"
                value={recipeInfo.ingredients}
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                placeholder="Preparation"
                value={recipeInfo.preparation}
                onChange={handleChange}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
