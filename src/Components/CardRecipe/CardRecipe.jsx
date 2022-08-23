import React, { useState } from "react";
import "./cardRecipe.scss";
import Modal from "../../Components/Modal";

function FullRecipeBtn() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Full recipe
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

const CardRecipe = (props) => {
  const { recipe, index } = props;
  return (
    <div className="card-recipe">
      <div key={index}>
        <div>{recipe.recipeName}</div>
        <img src={recipe.image} alt="Recipe" />
        <div>{recipe.prepTime}</div>
        <div>{recipe.cookTime}</div>
        <ul>
          {recipe.ingredients.map((ingredient, index) => {
            return <li key={index}>{ingredient}</li>;
          })}
        </ul>
        <ul>
          {recipe.procedure.map((procedure, index) => {
            return <li key={index}>{procedure}</li>;
          })}
        </ul>
        <div>{FullRecipeBtn()}</div>
      </div>
    </div>
  );
};

export default CardRecipe;
