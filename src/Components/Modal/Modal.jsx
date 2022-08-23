import React from "react";
import "./modal.scss";
import CardRecipe from "../../Components/CardRecipe";
import { recipesArray } from "../../Constans/recipe";

const FullRecipe = () => {
  if (recipesArray) {
    return recipesArray.map((part, index) => {
      return <CardRecipe recipe={part} index={index} />;
    });
  }
};

function Modal({ closeModal }, recipeName) {
  return (
    <div className="modalBackground">
      <div className="modal-container">
        <button className="closeBtn" onClick={() => closeModal(false)}>
          X
        </button>

        <div className="full-recipe">{FullRecipe()}</div>

        <button className="close-recipe" onClick={() => closeModal(false)}>
          Close recipe
        </button>
      </div>
    </div>
  );
}

export default Modal;
