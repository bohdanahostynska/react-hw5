import React, { useContext, useState } from "react";
import chip from "../assets/chip.png";
import master_logo from "../assets/master_logo.png";
import plus from "../assets/plus 1.png";
import { Link } from "react-router-dom";
import { CardsContext } from "../context/CardsContext";
import YourCards from "./YourCards";

export function Statistic({date,place,expense,currency}) {
  const [cardData, setCardData] = useState({});
  const {data }=cardData

    return (
        <>
        <div className="card_container">
        <div className="card_wrapper">
          <div className="card_statistic">
          <div className="sides" >
            <div className="sides_mod">
              <img className="image-clone" src={chip} alt="img-img" />
              <img className="card_logo" src={master_logo} alt="img" />
              <div className="card_details">
                                <p className="card_date">{date}</p>           
                              <p className="card_place">{place}</p>
                              <p className="card_expense">{expense}</p>
                              <p className="card_currency">{currency}</p>
                              </div>   </div>
            </div>
          </div>
          <div className="menu_stat"></div>
          </div>
          </div>
        </>
      );
}

export default Statistic;