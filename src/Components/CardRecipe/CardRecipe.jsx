import React, { useState } from "react";
import "./cardRecipe.scss";
import Modal from "../../Components/Modal";
import FullDetails from "../FullDetails";
import prep from "../../Images/prep.png";
import cook from "../../Images/cook.png";

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
            <div className="prep">
              <img src={prep} alt="Prep" />
              {`Prep: ${recipe.prepTime}`}
            </div>
            <div className="cook">
              <img src={cook} alt="Cook" />
              {`Cook: ${recipe.cookTime}`}
            </div>

            {openModal && <FullDetails recipe={recipe} />}
            {/* TODO: improve modal, work in progress */}
            {/* {!openModal && (
              <button
                className="openModalBtn"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Full recipe
              </button>
            )} */}
            {openModal && (
              <Modal closeModal={setOpenModal} recipeNumber={index} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecipe;
