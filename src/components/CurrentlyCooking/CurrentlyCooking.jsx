import React from 'react'
import PropTypes from 'prop-types'

function CurrentlyCooking(props) {
  return (
    <div className="mt-8 mb-8">
      <h2 className="text-[#282828] text-center font-semibold text-2xl">
        Currently cooking: 02
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
          </tr>
        </table>
      </div>
    </div>
  );
}

CurrentlyCooking.propTypes = {}

export default CurrentlyCooking
