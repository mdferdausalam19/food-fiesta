import React from "react";
import PropTypes from "prop-types";
import CardContainer from "../CardContainer/CardContainer";
import Sidebar from "../Sidebar/Sidebar";

function CardSidebarContainer(props) {
  return <div className="flex flex-col lg:flex-row mb-24 gap-6">
    <CardContainer></CardContainer>
    <Sidebar></Sidebar>
  </div>;
}

CardSidebarContainer.propTypes = {};

export default CardSidebarContainer;
