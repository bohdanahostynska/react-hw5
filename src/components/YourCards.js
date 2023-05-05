import React, { useContext, useState } from "react";
import chip from "../assets/chip.png";
import master_logo from "../assets/master_logo.png";
import plus from "../assets/plus 1.png";
import view from "../assets/view 1.svg";
import man from "../assets/man 1.svg";
import flip from "../assets/flip 1.svg";
import { Link } from "react-router-dom";
import { CardsContext } from "../context/CardsContext";

export function YourCards() {
  const { cardData } = useContext(CardsContext);
  // const { user_name, data} = cardData;
  const [isFlip, setIsFlip] = useState(false);
  console.log(cardData);
  const [showStatistic, setShowStatistic] = useState(false);
  //  const [eyeOpen, setEyeOpen] = useState(false);

  //  const maskCardNumber = (cardNumber) => {
  //   const MASK = "****";
  //   const groups = [];
  //   for (let j = 1; j < 4; j++) {
  //     groups.push(MASK);
  //     continue;
  //   }
  //   const group = cardNumber.slice(-4);
  //   groups.push(group);

  //   const maskedDigits = groups.join(" ");
  //   return maskedDigits;
  // };

  const handleShowStatistic = () => {
    setShowStatistic((prevState) => !prevState);
  };

  return (
    <>
      <div className="card_container">
        <div className="card_wrapper">
          {cardData?.map(({ data, user_name }) => {
            return data?.map(({ card, id, statistic }) => {
              return statistic?.map(({ date, place, expense, currency }) => {
                return (
                  <div className="card_case">
                    <div className="sides">
                      <div
                        className="sides-front"
                        key={data.id}
                        isFlip={isFlip}
                      >
                        <img className="image" src={chip} alt="img-img" />
                        <p className="card_number">{card.numbers}</p>
                        <p className="user_name">{user_name}</p>
                        <div className="card_info">
                          <img
                            className="card_logo"
                            src={master_logo}
                            alt="img"
                          />
                        </div>
                        <div className="show_card_details">
                          <div className="show-details">
                            <img className="eye" src={view} alt="img" />
                            <img className="man" src={man} alt="img-img" />
                            <img className="flip" src={flip} alt="flip-img" />
                          </div>
                          <div
                            className="card_details"
                            onClick={handleShowStatistic}
                          >
                            <p className="card_date">{date}</p>
                            <p className="card_place">{place}</p>
                            <p className="card_expense">{expense}</p>
                            <p className="card_currency">{currency}</p>
                          </div>
                        </div>
                      </div>
                      <div className="sides-back" isFlip={isFlip}>
                        <div className="card_info-second">
                          <p className="card_expiry-date">{card.expiry_date}</p>
                          <p className="card_cvc">{card.cvv}</p>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                );
              });
            });
          })}
          <Link to={"/"}>
            <button className="button_plus">
              <img className="plus" src={plus} alt="img" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default YourCards;
