import React from "react";
import { useState, useContext } from "react";
import chip from "../assets/chip.png";
import master_logo from "../assets/master_logo.png";
import { CardsContext } from "../context/CardsContext";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../helpers/functions";

export const Card = ({ numbers, user_name }) => {
  return (
    <>
      <div className="card_wrapper">
        <h3 className="card_title-new">My card</h3>
        <div className="card_item_front">
          <img className="image-clone" src={chip} alt="img-img" />
          <img className="card_logo" src={master_logo} alt="img" />
          <p className="card_number">{numbers}</p>
          <p className="user_name">{user_name}</p>
        </div>
      </div>
    </>
  );
};

export function Form() {
  const [cardData, setCardData] = useState({});
  const { addCard } = useContext(CardsContext);
  let type;
  const handleInputChange = ({ target }) => {
    if (target.name === "numbers") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry_date") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvv") {
      target.value = formatCVC(target.value);
    }

    setCardData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCard({ user_name: "", numbers: "", expiry_date: "", cvv: "" });
  };

  return (
    <div>
      <>
        <Card
          data={cardData}
          numbers={cardData.numbers}
          user_name={cardData.user_name}
          expiry_date={cardData.expiry_date}
          cvv={cardData.cvc}
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
              placeholder="00000000000000"
              pattern="[\d| ]{16,22}"
              maxLength="16"
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
