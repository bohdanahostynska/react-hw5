import React, { useContext, useState, } from "react";
import chip from "../assets/chip.png";
import master_logo from "../assets/master_logo.png";
import plus from "../assets/plus 1.png";
import view from "../assets/view 1.svg";
import line from "../assets/Line 2.svg"
import man from "../assets/man 1.svg";
import flip from "../assets/flip 1.svg";
import { visa_front} from "../assets/visa_front.png";
import { Link } from "react-router-dom";
import { CardsContext } from "../context/CardsContext";

export function YourCards() {
  const { cardData } = useContext(CardsContext);
  const [isFlip, setIsFlip] = useState(false);
  const [showStatistic, setShowStatistic] = useState(false);
  const [eyeOpen, setEyeOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
 
  const handleShowOptions = () => {
    setShowOptions((prevState) => !prevState);
  };

  const handleShowStatistic = () => {
    setShowStatistic((prevState) => !prevState);
  };
    const handleEyeOpen = () => {
    setEyeOpen((prevState) => !prevState);
  };
  const handleFlip = () => {
    setIsFlip((prevState) => !prevState);
  };
  return (
    <>
      <div className="card_container">
        <div className="card_wrapper">
          <div>
          <h3>Your cards</h3>             
        <Link to={"/"}>
            <button className="button_plus">
              <img className="plus" src={plus} alt="img" />
            </button>
          </Link></div>
          {cardData?.map(({ data, user_name }) => {
            return data?.map(({ card,statistic }) => {
              return statistic?.map(({ date,place,expense,currency}) => {
                return (
                  <div className="card_case">
                    <div className="sides">
                      <div
                        className="sides-front"
                        key={data.id}
                        isFlip={isFlip}
                        onClick={handleShowOptions}
                      >  
                        <img className="image" src={chip}
                        alt="img" />
                        <p className="card_number">{card.numbers}</p>
                        <p className="user_name">{user_name}</p>
                        <div className="card_info">
                          <img
                            className="card_logo"
                            src={master_logo}
                            alt="img" 
                          />
                        </div></div>
                      <div className="sides-back" isFlip={isFlip}>
                        <div className="card_info-second">
                          <p className="card_expiry-date">{card.expiry_date}</p>
                          <p className="card_cvc">{card.cvv}</p>
                        </div>
                      </div>
                  
                  </div>
                  <div className="show_card_details"
                   showOptions={showOptions}
                   handleEyeOpen={handleEyeOpen}
                   handleShowStatistic={handleShowStatistic}
                   handleFlip={handleFlip}
                   eyeOpen={!eyeOpen}
                  >
                          <div className="icons-bar"handleEyeOpen={handleEyeOpen}>
                            <img className="eye" src={view} alt="img" />
                            <img className="man" src={man} alt="img-img" />
                            <img className="flip" src={flip} alt="flip-img" />
                          </div>
                          <div
                            className="card_details"
                            
                          >
                            <p className="card_date">{ date}</p>
                            <p className="card_place">{place}</p>
                            <p className="card_expense">{expense}</p>
                            <p className="card_currency">{currency}</p>
                          </div>
                        </div>
                      </div>
                );
              });
            });
          })}
        </div>
      </div>
    </>
  );
}

export default YourCards;
