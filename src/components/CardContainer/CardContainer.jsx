import React from "react";
import PropTypes from "prop-types";
import { MdOutlineWatchLater } from "react-icons/md";
import { GoFlame } from "react-icons/go";

function CardContainer(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Card-1 */}
      <div className="card bg-base-100 shadow-xl px-4 py-4 max-w-96">
        <figure className="">
          <img
            src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-xl"
          />
        </figure>
        <h2 className="text-[#282828] text-xl font-semibold mt-3 mb-2">
          Spaghetti Bolognese
        </h2>
        <p className="text-[#878787]">
          Classic Italian pasta dish with savory meat sauce.
        </p>
        <div className="border-b-2 mt-2 mb-4"></div>
        <p className="text-lg font-medium">Ingredients: 6</p>
        <div className="ml-10 text-[#878787] text-lg">
          <ul className="list-disc">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
        </div>
        <div className="border-b-2 mt-2 mb-4"></div>
        <div className="flex items-center gap-4 mb-7 text-[rgba(40,40,40,0.80)]">
          <div className="flex items-center gap-1">
            <MdOutlineWatchLater />
            <p>30 minutes</p>
          </div>
          <div className="flex items-center gap-1">
            <GoFlame />
            <p>600 calories</p>
          </div>
        </div>
        <button className="p-3 bg-[#0BE58A] rounded-full text-[#150B2B] text-lg font-medium">
          Want to Cook
        </button>
      </div>
    </div>
  );
}

CardContainer.propTypes = {};

export default CardContainer;
