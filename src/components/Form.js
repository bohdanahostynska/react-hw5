import React from "react";
import { useState, useContext } from "react";

import { CardsContext } from "../context/CardsContext";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../helpers/functions";

import Card from "./Card";
import { useNavigate } from "react-router-dom";

export function Form() {
  const nav = useNavigate();
  const [cardData, setCardData] = useState({});
  const { addNewCard } = useContext(CardsContext);
  let type;

  const handleInputChange = ({ target }) => {
    if (target.name === "cvv") {
      target.value = formatCVC(target.value);
    } else if (target.name === "expiry_date") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "numbers") {
      target.value = formatCreditCardNumber(target.value);
    }
    setCardData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewCard(cardData);
    setCardData({});
    nav("/your_cards");
  };
  return (
    <div className="form_container">
      <>
        <Card
          data={cardData}
          user_name={cardData.user_name}
          numbers={cardData.numbers}
          cvv={cardData.cvv}
          expiry_date={cardData.expiry_date}
          statistic={cardData.statistic}
        />
        <form onSubmit={handleSubmit}>
          <div className="card-form">
            <small>Full name:</small>

            <input
              type="text"
              name="user_name"
              className="card-control"
              placeholder="John Snow"
              pattern="[a-z A-Z-]+"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="card-form">
            <small>Card Number:</small>

            <input
              type="tel"
              name="numbers"
              className="card-control"
              placeholder="0000000000000000"
              pattern="[\d| ]{16,22}"
              maxLength="19"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="card-form">
            <small>Expiration Date:</small>

            <input
              type="tel"
              name="expiry_date"
              className="card-control"
              placeholder="00/00"
              pattern="\d\d/\d\d"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="card-form">
            <small>CVC:</small>

            <input
              type="tel"
              name="cvc"
              className="card-control"
              placeholder="123"
              pattern="\d{3}"
              maxLength="3"
              required
              onChange={handleInputChange}
            />
          </div>
          <input type="hidden" name="type" value={type} />
          <div className="card-actions">
            <button className="form-button" value="Update">
              Add card
            </button>
          </div>
        </form>
      </>
    </div>
  );
}
export default Form;
