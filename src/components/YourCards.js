import React from "react";
import chip from "../assets/chip.png";
import master_logo from "../assets/master_logo.png";
import plus from "../assets/plus 1.png";
import { Link } from "react-router-dom";
import  { useEffect, useState} from "react";

export const YourCards = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/cards/123.json?key=778301b0")
      .then(res => res.json())
      .then(res =>setCardData([res]))
  }, []);


  useEffect(()=>{
    console.log({cardData});
  },[cardData])
  
  return (
    <>
    <div className="card_container">
      <div className="card_move">
        <h2>Your Cards</h2>
        <button className="button_plus">    
          <img src={plus} alt="plus"/>
        </button>
      </div>
      <div className="card_wrapper">
        {cardData && cardData.map((data,card) => {
            console.log(data);
            return (
              <div className="card_case">
                <div className="card_item_front" key={card.id}>
                  <img className="image" src={chip} alt="img-img" />
                  <p className="card_number">{data.numbers}</p>
                  <div className="card_info">
                    <p className="user_name">{data.user_name}</p>
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
    </div>
        </>
  );
};

export default YourCards;
