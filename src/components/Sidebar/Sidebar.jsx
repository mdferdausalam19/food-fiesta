import PropTypes from "prop-types";
import WantToCook from "../WantToCook/WantToCook";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";

function Sidebar({ wantToCook, handlePreparing, currentlyCooking }) {
  return (
    <div className="border-2 py-1 md:p-3 rounded-xl ">
      <div className="mt-4">
        <h2 className="text-[#282828] text-center font-semibold text-xl md:text-2xl">
          Want to cook: {wantToCook.length}
        </h2>
        <div className="border-b-2 mt-2 mb-3"></div>
        <div>
          <table className="w-full text-left">
            <tr>
              <th className="p-4"></th>
              <th className="p-4">Name</th>
              <th className="p-4">Time</th>
              <th className="p-4">Calories</th>
            </tr>
            {wantToCook.map((cookItem, index) => (
              <WantToCook
                key={cookItem.recipe_id}
                cookItem={cookItem}
                index={index}
                handlePreparing={handlePreparing}
              ></WantToCook>
            ))}
          </table>
        </div>
      </div>
      {/* Currently Cooking */}
      <div className="mt-8 mb-4">
        <h2 className="text-[#282828] text-center font-semibold text-xl md:text-2xl">
          Currently cooking: {currentlyCooking.length}
        </h2>
        <div className="border-b-2 mt-2 mb-3"></div>
        <div>
          <table className="w-full text-left">
            <tr>
              <th className="p-4"></th>
              <th className="p-4">Name</th>
              <th className="p-4">Time</th>
              <th className="p-4">Calories</th>
            </tr>
            {currentlyCooking.map((cookingItem, index) => (
              <CurrentlyCooking
                cookingItem={cookingItem}
                index={index}
                key={index}
              ></CurrentlyCooking>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  wantToCook: PropTypes.array.isRequired,
  currentlyCooking: PropTypes.array.isRequired,
  handlePreparing: PropTypes.func.isRequired,
};

export default Sidebar;
