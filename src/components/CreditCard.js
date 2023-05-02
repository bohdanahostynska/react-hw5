import React from "react";
import {AddNewCard } from "./AddNewCard";
import { useState } from "react";
import chip from "../assets/chip.png";
import master_logo from "../assets/master_logo.png";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./AddNewCard";

export default function CreditCard() {
  const [cardData, setCardData] = useState({});

  let issuer;

  function handleCallback({ issuer }, isValid) {
    if (isValid) {
      setCardData({ issuer });
    }
  }

  const handleInputFocus = ({ target }) => {
    setCardData({
      focused: target.name,
    });
  };

  const handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry_date") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    setCardData({ [target.name]: target.value });
  };

 const handleSubmit = e => {
    e.preventDefault()
    alert('You have added a card')
   
  }
  return (
    <>
      {" "}
      <div className="card_wrapper">
        <h3 className="card_title-new">Create a new card</h3>
        <div className="card_item_front-mod">
        <img className="image-clone" src={chip} alt="img-img" />
        <img className="card_logo-clone" src={master_logo} alt="img" /> </div>
        <AddNewCard
          data={cardData}
          number={cardData.number}
          user_name={cardData.user_name}
          expiry_date={cardData.expiry_date}
          cvv={cardData.cvc}
          callback={handleCallback}
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
              onFocus={handleInputFocus}
            />
          </div>
          <div className="card-form">
            <small>Card Number:</small>

            <input
              type="tel"
              name="number"
              className="card-control"
              placeholder="00000000000000"
              pattern="[\d| ]{16,22}"
              maxLength="19"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
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
              onFocus={handleInputFocus}
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
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <input type="hidden" name="issuer" value={issuer} />
          <div className="card-actions">
            <button className="form-button" value="Update">Add card</button>
          </div>
        </form>
      </div>
    </>
  );
}
