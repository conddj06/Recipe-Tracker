import React from "react";

// TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
 
   function RecipeList({ recipes, setRecipes }) {
    const deleteRecipe = (nameToDelete) => {
      setRecipes((currentRecipes) =>
        currentRecipes.filter((recipe) => recipe.name !== nameToDelete)
      );
    };
  
    const rows = recipes.map((recipe, index) => {
      const { name, cuisine, photo, ingredients, preparation } = recipe;
  
      return (
        <tr key={index}>
          <td>
            <p>{name}</p>
          </td>
          <td>
            <p>{cuisine}</p>
          </td>
          <td>
            <img src={photo} alt={`${name}, ${cuisine}`} />
          </td>
          <td className="content_td">
            <p>{ingredients}</p>
          </td>
          <td className="content_td">
            <p>{preparation}</p>
          </td>
          <td>
            <button
              name="delete"
              id={index}
              type="submit"
              onClick={() => deleteRecipe(name)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  
    return (
      <div className="recipe-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Cuisine</th>
              <th>Photo</th>
              <th>Ingredients</th>
              <th>Preparation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
  

export default RecipeList;
