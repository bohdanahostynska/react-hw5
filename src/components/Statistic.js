import React, { useContext, useState } from "react";
import chip from "../assets/chip.png";
import master_logo from "../assets/master_logo.png";
import plus from "../assets/plus 1.png";
import { Link } from "react-router-dom";
import { CardsContext } from "../context/CardsContext";
import YourCards from "./YourCards";

export function Statistic({date,place,expense,currency}) {
  const [cardData, setCardData] = useState({});
  // const {data }=cardData

    return (
        <>
        {/* <div className="card_container">
        <div className="card_wrapper">
        <div className="card_case">
          <div className="sides" >   
          <div className="sides-front">
          <img className="image-clone" src={chip} alt="img-img" />
          <img className="card_logo" src={master_logo} alt="img" />       
          <p className="card_number">{numbers}</p>
          <p className="user_name">{user_name}</p> 
          </div>
          <div className="sides-back">
          <p className="card_cvv">{cvv}</p>
          <p className="card_expiry_date">{expiry_date}</p>
          </div>
        </div>
      </div>
      </div></div> */}
        </>
      );
}

export default Statistic;