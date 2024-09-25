import PropTypes from "prop-types";
function CurrentlyCooking({ cookingItem, index }) {
  const { recipe_name, preparing_time, calories } = cookingItem;
  return (
    <>
      <tr className="bg-[rgba(40,40,40,0.03)] text-sm md:text-base border">
        <td className="p-2 md:p-4">{index + 1}</td>
        <td className="p-2 md:p-4">{recipe_name}</td>
        <td className="p-2 md:p-4">{preparing_time}</td>
        <td className="p-2 md:p-4">{calories}</td>
      </tr>
    </>
  );
}

CurrentlyCooking.propTypes = {
  cookingItem: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default CurrentlyCooking;
