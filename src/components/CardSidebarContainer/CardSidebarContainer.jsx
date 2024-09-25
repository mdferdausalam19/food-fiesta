import PropTypes from "prop-types";
import CardContainer from "../CardContainer/CardContainer";
import Sidebar from "../Sidebar/Sidebar";

function CardSidebarContainer({
  recipes,
  handleWantToCook,
  wantToCook,
  handlePreparing,
  currentlyCooking,
}) {
  return (
    <div className="flex flex-col lg:flex-row justify-center mb-24 gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {recipes.map((recipe) => (
          <CardContainer
            key={recipe.recipe_id}
            recipe={recipe}
            handleWantToCook={handleWantToCook}
          ></CardContainer>
        ))}
      </div>
      <div>
        <Sidebar
          wantToCook={wantToCook}
          handlePreparing={handlePreparing}
          currentlyCooking={currentlyCooking}
        ></Sidebar>
      </div>
    </div>
  );
}

CardSidebarContainer.propTypes = {
  recipes: PropTypes.array.isRequired,
  handleWantToCook: PropTypes.func.isRequired,
  handlePreparing: PropTypes.func.isRequired,
  wantToCook: PropTypes.array.isRequired,
  currentlyCooking: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
};

export default CardSidebarContainer;
