import React, { useState } from "react";
import "./recipes.scss";
import CardRecipe from "../../Components/CardRecipe";
import { recipesArray } from "../../Constans/recipe";

const mapRecipes = () => {
  if (recipesArray) {
    return recipesArray.map((everything, index) => {
      return <CardRecipe recipe={everything} index={index} />;
    });
  }
};

function RecipesPage() {
  return (
    <div>
      <div className="about-recipe">
        <div className="description">{mapRecipes()}</div>
      </div>
    </div>
  );
}

export default RecipesPage;
