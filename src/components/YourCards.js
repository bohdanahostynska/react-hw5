import React, { useContext } from "react";
import chip from "../assets/chip.png";
import master_logo from "../assets/master_logo.png";
import plus from "../assets/plus 1.png";
import { Link } from "react-router-dom";
import { CardsContext } from "../context/CardsContext";

export function YourCards() {
  const { cardData } = useContext(CardsContext);
  const { user_name, data } = cardData;

  return (
    <>
      <div className="card_container">
        <div className="card_wrapper">
          <h2>Your Cards</h2>
          {data?.map(({ card, id, statistic }) => {
            return (
              <div className="card_case">
                <div className="card_item_front" key={card.id}>
                  <img className="image" src={chip} alt="img-img" />
                  <p className="card_number">{card.numbers}</p>
                  <p className="user_name">{user_name}</p>
                  <div className="card_info">
                    <img className="card_logo" src={master_logo} alt="img" />
                  </div>
                </div>
                <div className="card_item_back">
                  <div className="card_info-second">
                    <p className="card_date">{card.expiry_date}</p>
                    <p className="card_cvc">{card.cvv}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Link to={"/"}>
          <button className="button_plus">
            <img className="plus" src={plus} alt="img" />
          </button>
        </Link>
      </div>
    </>
  );
}

export default YourCards;
