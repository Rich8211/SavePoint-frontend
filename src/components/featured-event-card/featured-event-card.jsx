import React from "react";
import "./featured-event-card.scss";
import bostonCon from "../../assets/hatch-pile.png";

const FeaturedCard = ({ title, date, location, body }) => {
  return (
    <div className="featured-card">
      <img src={bostonCon} />
      <div className="con-title">
        <h4>{title}</h4>
      </div>
      <div className="con-info">
        <p>
          {body}
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard;
