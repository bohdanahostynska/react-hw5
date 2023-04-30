import React from "react";
import { CreditCard } from "./CreditCard";
import { useState, useEffect } from "react";
import chip from "../assets/chip.png";
import master_logo from "../assets/master_logo.png";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./CreditCard";
export default function AddNewCard() {
  const [data, setData] = useState({});
  const [newData, setNewData] = useState([]);

  //     const card = {
  //       user_name: "",
  //       data: [{}],
  //       issuer: "",
  //     };
  let issuer;

  const handleAddButtonClick = () => {
    const newCard = {
      card: newData,
      quantity: 1,
    };

    setData(newCard);
    setNewData("");
  };
  console.log(newData);
  console.log(data);

  //     const addCard = (newCard) => {
  //       setData((prev) => [...prev, newCard]);
  //     };
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
    let toAdd = newData;
    alert("You have added a card");
    setNewData((prevNewData) => [...prevNewData, toAdd]);
  };

  const isNewDataEmpty = newData.length === 0;

  return (
    <>
      {" "}
      <div className="card_wrapper">
        <h3 className="card_title-new">Create a new card</h3>
        <div className="card_item_front-mod">
        <img className="image-clone" src={chip} alt="img-img" />
        <img className="card_logo-clone" src={master_logo} alt="img" /> </div>
        {/* {newData.map((item)=>{ 
            return(
                  <div key = {item.id}>{item}</div>)
             } )} */}
        <CreditCard
          data={data}
          number={data.number}
          user_name={data.user_name}
          expiry_date={data.expiry_date}
          cvv={data.cvc}
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
            <hr />
            {!isNewDataEmpty ? (
              newData.forEach((newData) => {
                <newData title={newData} />;
              })
            ) : (
              <span></span>
            )}
            <button className="form-button"onClick={() => handleAddButtonClick()}>Add card</button>
          </div>
        </form>
      </div>
    </>
  );
}
