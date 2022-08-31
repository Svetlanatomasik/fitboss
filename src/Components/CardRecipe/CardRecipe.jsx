import React, { useState } from "react";
import "./cardRecipe.scss";
import Modal from "../../Components/Modal";
import FullDetails from "../FullDetails";

const CardRecipe = (props) => {
  const [openModal, setOpenModal] = useState();
  const { recipe, index } = props;
  console.log("openModal ", openModal);

  return (
    <div className="card-recipe">
      <div key={index}>
        <div className="wrapper">
          <img className="recipe-img" src={recipe.image} alt="Recipe" />
          <div className="info">
            <div className="title">{recipe.recipeName}</div>
            <div>{`Prep: ${recipe.prepTime}`}</div>
            <div>{`Cook: ${recipe.cookTime}`}</div>
          </div>
        </div>

        {openModal && <FullDetails recipe={recipe} />}
        {!openModal && (
          <button
            className="openModalBtn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Full recipe
          </button>
        )}
        {openModal && <Modal closeModal={setOpenModal} recipeNumber={index} />}
      </div>
    </div>
  );
};

export default CardRecipe;
