import React from "react";
import "./modal.scss";
import CardRecipe from "../../Components/CardRecipe";
import { recipesArray } from "../../Constans/recipe";

const FullRecipe = (index) => { 
  console.log('recipes ', recipesArray);
  console.log('recipe ', recipesArray[index]);
  console.log('index ', index)
  if (recipesArray) {
    return <CardRecipe recipe={recipesArray[index]} index={index} />
  }
};



function Modal({ closeModal , recipeNumber}) {
  return (
    <div className="modalBackground">
      <div className="modal-container">
        <button className="closeBtn" onClick={() => closeModal(false)}>
          X
        </button>

        <div className="full-recipe">{FullRecipe(recipeNumber)}</div>

        <button className="close-recipe" onClick={() => closeModal(false)}>
          Close recipe
        </button>
      </div>
    </div>
  );
}

export default Modal;
