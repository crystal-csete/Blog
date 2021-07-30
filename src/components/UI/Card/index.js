/** @format */

import React from "react";
import "./style.css";

const Card = (props) => {
  return <div className='card__container'>{props.children}</div>;
};

export default Card;
