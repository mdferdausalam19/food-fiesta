import React from "react";
import PropTypes from "prop-types";

function WantToCook(props) {
  return (
    <div className="mt-4">
      <h2 className="text-[#282828] text-center font-semibold text-2xl">
        Want to cook: 01
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
          <tr className="bg-[rgba(40,40,40,0.03)]">
            <td className="p-4">1.</td>
            <td className="p-4">Chicken Caesar Salad</td>
            <td className="p-4">20 minutes</td>
            <td className="p-4">400 calories</td>
            <td>
              <button className="p-2 bg-[#0BE58A] rounded-full text-[#150B2B] text-lg font-medium">
                Preparing
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

WantToCook.propTypes = {};

export default WantToCook;
