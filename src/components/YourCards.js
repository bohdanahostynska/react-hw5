import React, { useContext, useState } from "react";
import chip from "../assets/chip.png";
import master_logo from "../assets/master_logo.png";
import plus from "../assets/plus 1.png";
import eye from "../assets/eye.png";
import eye_crossed from "../assets/eye_crossed.png";
import man from "../assets/man 1.svg";
import flip from "../assets/flip 1.svg";
import { Link } from "react-router-dom";
import { CardsContext } from "../context/CardsContext";

export const myStatistic = {
  statistic: [{ date: "", place: "", expense: "", currency: "" }],
};
export const myCard = {
  user_id: 1,
  user_name: "",
  data: [
    {
      card: { numbers: "", type: "", cvv: "", expiry_date: "" },
      statistic: [],
    },
  ],
};
export function YourCards() {
  const { cardData } = useContext(CardsContext);
  const [isFlip, setIsFlip] = useState(false);
  const [showStatistic, setShowStatistic] = useState("");
  const [eyeOpen, setEyeOpen] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const maskNumbers = (numbers) => {
    const MASK = "****";
    const groups = [];
    for (let j = 1; j < 4; j++) {
      groups.push(MASK);
      continue;
    }
    const group = numbers.slice(-4);
    groups.push(group);

    const maskedDigits = groups.join(" ");
    return maskedDigits;
  };

  const handleShowOptions = (id) => {
    if (showOptions === id) {
      setShowOptions("");
      return;
    }
    setShowOptions((prevState) => !prevState);
  };

  const handleShowStatistic = (id) => {
    if (showStatistic === id) {
      setShowStatistic("");
      return;
    }
    setShowStatistic(id);
  };

  const handleEyeOpen = (id) => {
    if (eyeOpen === id) {
      setEyeOpen("");
      return;
    }
    setEyeOpen(id);
  };

  const handleFlip = (id) => {
    if (isFlip === id) {
      setIsFlip("");
      return;
    }
    setIsFlip(id);
  };

  return (
    <>
      <h3>Your cards</h3>
      <div className="card_container">
        <div className="card_wrapper">
          {cardData?.map(({ data, user_name }) => {
            return data?.map(({ card, statistic }) => (
              <div className="card_case" key={data.id}>
                <div
                  className={`sides ${isFlip === card.numbers ? "active" : ""}`}
                >
                  <div className="sides-front" onClick={handleShowOptions}>
                    <img className="image" src={chip} alt="img" />
                    <p className="card_number">
                      {eyeOpen ? card.numbers : maskNumbers(card.numbers)}
                    </p>
                    <p className="user_name">{user_name}</p>
                    <div className="card_info">
                      <img className="card_logo" src={master_logo} alt="img" />
                    </div>
                  </div>
                  <div className="sides-back">
                    <div className="card_info-second">
                      <p className="card_expiry-date">{card.expiry_date}</p>
                      <p className="card_cvc">{card.cvv}</p>
                    </div>
                  </div>
                </div>
                <div className="show_card_details">
                  <div className="icons-bar">
                    <img
                      className="eye"
                      onClick={() => handleEyeOpen(card.numbers)}
                      alt="img-eye"
                      src={eyeOpen === card.numbers ? eye : eye_crossed}
                    />
                    <img
                      className="man"
                      src={man}
                      alt="img-img"
                      onClick={() => handleShowStatistic(card.numbers)}
                    />
                    <img
                      className="flip"
                      src={flip}
                      alt="flip-img"
                      onClick={() => handleFlip(card.numbers)}
                    />
                  </div>

                  {showStatistic === card.numbers &&
                    statistic.map((d, idx) => {
                      return (
                        <div className="info" key={idx}>
                          <p className="card_date">{d.date}</p>
                          <p className="card_place">{d.place}</p>
                          <p className="card_expense">{d.expense}</p>
                          <p className="card_currency">{d.currency}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
            ));
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
