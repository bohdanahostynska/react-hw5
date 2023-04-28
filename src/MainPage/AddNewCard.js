import React from "react";
import { CreditCard } from "./CreditCard";
import { useState } from "react";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./CreditCard";

export default function AddNewCard() {
  const [data, setData] = useState({});
  let issuer;

  function handleCallback({ issuer }, isValid) {
    if (isValid) {
      setData({ issuer });
    }
  }

  const handleInputFocus = ({ target }) => {
    setData({
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

    setData({ [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have finished payment!");
  };

  return (
    <div className="card_container"> 
         <div className="card_wrapper">
         <h3 className="card_title">Create a new card</h3>
     <div className="card_item_front-mod"><></></div> 
        <CreditCard
          data={data}
          number={data.number}
          user_name={data.user_name}
          expiry_date={data.expiry_date}
          cvv={data.cvc}
          callback={handleCallback}
        />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <small>Full name:</small>

            <input
              type="text"
              name="user_name"
              className="form-control"
              placeholder="John Snow"
              pattern="[a-z A-Z-]+"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="form-group">
            <small>Card Number:</small>

            <input
              type="tel"
              name="number"
              className="form-control"
              placeholder="00000000000000"
              pattern="[\d| ]{16,22}"
              maxLength="19"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>

          <div className="form-group">
            <small>Expiration Date:</small>

            <input
              type="tel"
              name="expiry_date"
              className="form-control"
              placeholder="00/00"
              pattern="\d\d/\d\d"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="form-group">
            <small>CVC:</small>

            <input
              type="tel"
              name="cvc"
              className="form-control"
              placeholder="123"
              pattern="\d{3}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <input type="hidden" name="issuer" value={issuer} />
          <div className="form-actions">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
