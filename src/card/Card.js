import React from "react";
import "./index.scss";
import image2 from "../images/0fbdfa105355065.5f7711b8ae7d2(1).png";

function Card({ showStatus, props }) {
  return (
    <div className={`card-page-2 ${showStatus}`}>
      <div className="show-image">
        <img src={image2} />
      </div>
      <h1 className="text-grey">{props.number}</h1>
      <h2>{props.heading}</h2>
      <p className="show-text">
        {props.description}
      </p>
    </div>
  );
}

export default Card;
