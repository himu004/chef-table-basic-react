/* eslint-disable react/prop-types */

const SideBar = ({ recipeQueue, handleRemove, preparingRecipe }) => {
  return (
    <aside className="w-1/3 border rounded-xl p-3">
      <h1 className="text-center text-xl font-bold">
        Want to cook: {recipeQueue.length}
      </h1>
      <div className="divider w-2/3 mx-auto"></div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipeName}</td>
                <td>{recipe.preparingTime} minutes.</td>
                <td>{recipe.calories} calories</td>
                <td>
                  <button onClick={() => handleRemove(recipe.id)} className="btn btn-sm btn-success rounded-full">
                    Pending
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divider w-2/3 mx-auto"></div>

      <div className="overflow-x-auto mt-10">
        <h1 className="text-center text-xl font-bold">
          Currently Cooking: {preparingRecipe.length}
        </h1>
        <table className="table">
       
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {preparingRecipe.map((recipe, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{recipe.recipeName}</td>
                <td>{recipe.preparingTime} minutes.</td>
                <td>{recipe.calories} calories</td>
                <td>
                  <button
                    className="btn btn-sm btn-neutral rounded-full text-white"
                  >
                    Cooking
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-left">
          <p>Total Time = {preparingRecipe.reduce((total, recipe) => total + recipe.preparingTime, 0)}</p>
          <p>Total Calories = {preparingRecipe.reduce((total, recipe) => total + recipe.calories, 0)}</p>
        </div>
      </div>


    </aside>
  );
};

export default SideBar;
