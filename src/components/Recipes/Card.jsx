/* eslint-disable react/prop-types */
const Card = ({ recipe, addRecipeToQueue }) => {
  const {
    recipeName,
    recipeImage,
    shortDescription,
    ingredients,
    preparingTime,
    calories,
  } = recipe;

  // {
  //     "id": 1,
  //     "recipeImage": "https://images.unsplash.com/photo-1546069901-eacef0df6022",
  //     "recipeName": "Chicken Basil Stir Fry",
  //     "shortDescription": "A quick and delicious chicken stir fry with fresh basil and mushrooms.",
  //     "ingredients": [
  //       "550 g chicken",
  //       "120 ml soy sauce",
  //       "200 g basil leaf",
  //       "400 g mushroom"
  //     ],
  //     "preparingTime": 30,
  //     "calories": 320
  //   }
  return (
    <div>
      <div className="card bg-base-100 border">
        <figure className="">
          <img
            src={recipeImage}
            alt={recipeName}
            className="rounded-xl w-full h-[200px] object-cover object-center"
          />
        </figure>
        <div className="text-start space-y-5 py-4">
          <h2 className="card-title">{recipeName}</h2>
          <p className="text-gray-400">{shortDescription}</p>
          <div className="h-[200px]">
            <p className="text-lg font-bold mb-5">Ingredients: {ingredients.length}</p>
            <ul className="ml-5">
              {ingredients.map((ingredient, index) => (
                <li className="text-gray-400 mb-1 list-disc" key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="divider"></div>
          <div className="text-sm flex gap-3 text-gray-600 font-thin">
            <p> 
               
                <span className="font-bold">Time: </span>
                <span className="text-red-700">{preparingTime}</span> minutes.
            </p>
            <p>
                <span className="font-bold">Calories: </span>
                <span className="text-red-700">{calories}</span>
            </p>
          </div>
          <div className="card-actions">
            <button onClick={() => addRecipeToQueue(recipe)} className="btn btn-sm btn-success text-white rounded-full">Want to cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
