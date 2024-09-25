import React from "react";
import PropTypes from "prop-types";
import WantToCook from "../WantToCook/WantToCook";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";

function Sidebar(props) {
  return (
    <div className="border-2 p-3 rounded-xl ">
      <WantToCook></WantToCook>
      <CurrentlyCooking></CurrentlyCooking>
    </div>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
