import PropTypes from "prop-types";
import { MdOutlineWatchLater } from "react-icons/md";
import { GoFlame } from "react-icons/go";
import "react-toastify/dist/ReactToastify.css";

function CardContainer({ recipe, handleWantToCook, handleCount }) {
  const {
    recipe_id,
    recipe_image,
    recipe_name,
    description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl px-4 py-4 max-w-96 border-2">
        <figure className="">
          <img src={recipe_image} alt="" className="rounded-xl" />
        </figure>
        <h2 className="text-[#282828] text-xl font-semibold mt-3 mb-2">
          {recipe_name}
        </h2>
        <p className="text-[#878787]">{description}</p>
        <div className="border-b-2 mt-2 mb-4"></div>
        <p className="text-lg font-medium">Ingredients: {ingredients.length}</p>
        <div className="ml-10 text-[#878787] md:text-lg">
          <ul className="list-disc">
            {ingredients.map((ingredient) => (
              <li key={recipe_id}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="border-b-2 mt-2 mb-4"></div>
        <div className="flex items-center gap-4 mb-7 text-[rgba(40,40,40,0.80)]">
          <div className="flex items-center gap-1">
            <MdOutlineWatchLater />
            <p>{preparing_time}</p>
          </div>
          <div className="flex items-center gap-1">
            <GoFlame />
            <p>{calories}</p>
          </div>
        </div>
        <button
          className="p-2 bg-[#0BE58A] rounded-full text-[#150B2B] md:text-lg font-medium"
          onClick={() => {
            handleWantToCook(recipe);
            handleCount();
          }}
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
}

CardContainer.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func.isRequired,
  handleCount: PropTypes.func.isRequired,
};

export default CardContainer;
