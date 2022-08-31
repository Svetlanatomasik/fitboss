const FullDetails = ({recipe}) => {
    if (recipe) {
      return (
        <>
            <ul>
              {recipe.ingredients.map((ingredient, j) => {
                return <li key={j}>{ingredient}</li>;
              })}
            </ul>
            <ul>
              {recipe.procedure.map((procedure, k) => {
                return <li key={k}>{procedure}</li>;
              })}
            </ul>
            <div>
              
            </div>
          </>
      )
    }
  }

  export default FullDetails;
