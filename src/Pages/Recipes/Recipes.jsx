import React from "react";
import "./recipes.scss";
import CardRecipe from "../../Components/CardRecipe";
import { recipesArray } from "../../Constans/recipe";
import Footer from "../../Components/Footer"

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
        <div>
        <div className="recipes">Healthy and easy recipes...</div>
        <div className="description">{mapRecipes()}</div>
        </div>
        
      </div>

      <Footer />
    </div>
  );
}

export default RecipesPage;
