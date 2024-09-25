import PropTypes from "prop-types";

function WantToCook({ cookItem, index, handlePreparing }) {
  const { recipe_name, preparing_time, calories } = cookItem;
  return (
    <>
      <tr className="bg-[rgba(40,40,40,0.03)] text-sm md:text-base border">
        <td className="p-2 md:p-4">{index + 1}.</td>
        <td className="p-2 md:p-4">{recipe_name}</td>
        <td className="p-2 md:p-4">{preparing_time}</td>
        <td className="p-2 md:p-4">{calories}</td>
        <td className="">
          <button
            className="p-2 bg-[#0BE58A] rounded-full text-[#150B2B] text-sm md:text-lg font-medium "
            onClick={() => {
              handlePreparing(cookItem);
            }}
          >
            Preparing
          </button>
        </td>
      </tr>
    </>
  );
}

WantToCook.propTypes = {
  cookItem: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  handlePreparing: PropTypes.func.isRequired,
};

export default WantToCook;
