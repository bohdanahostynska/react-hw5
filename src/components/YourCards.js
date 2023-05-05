import React, { useContext, useState, } from "react";
import chip from "../assets/chip.png";
import master_logo from "../assets/master_logo.png";
import plus from "../assets/plus 1.png";
import view_eye from "../assets/view_eye.png";
import view_eye_crossed from "../assets/view_eye_crossed.png"
import man from "../assets/man 1.svg";
import flip from "../assets/flip 1.svg";
import { visa_front} from "../assets/visa_front.png";
import { Link } from "react-router-dom";
import { CardsContext } from "../context/CardsContext";

export  const myStatistic = {
  statistic: [
    {date:'',place:'',expense:'',currency:''}
  ]
   
    }
    export const myCard = {
      user_id: 1,
      user_name:'',
      data: [
        {
          card: { numbers: '', type: '', cvv: '' },
          statistic: [],
        },
      ],
    }
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
          <><><myCard
              showOptions={showOptions}
              handleEyeOpen={handleEyeOpen}
              handleShowStatistic={handleShowStatistic}
              handleFlip={handleFlip}
              eyeOpen={!eyeOpen}
           
              /></></>
          {cardData?.map(({ data, user_name }) => {
            return data?.map(({ card,statistic }) => ( 

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
                          alt="img" />
                      </div></div>
                    <div className="sides-back" isFlip={isFlip}>
                      <div className="card_info-second">
                        <p className="card_expiry-date">{card.expiry_date}</p>
                        <p className="card_cvc">{card.cvv}</p>
                      </div>
                    </div>

                  </div>
                  <div className="show_card_details"
            
                  >
                    <div className="icons-bar">
                      <img className="view_eye" handleEyeOpen={handleEyeOpen} alt="img-eye"  src={eyeOpen ? view_eye : view_eye_crossed}/>
                      <img className="man" src={man} alt="img-img"  onClick={handleShowStatistic}/>
                      <img className="flip" src={flip} alt="flip-img" onClick={handleFlip}/>
                    </div>
                    
{showStatistic &&  statistic.map((data)=>{
  return( 

                   <div className="info">
                      <p className="card_date">{data.date}</p>
                      <p className="card_place">{data.place}</p>
                      <p className="card_expense">{data.expense}</p>
                      <p className="card_currency">{ data.currency}</p>
                    </div>
                    
                    ) })}
                  </div>
                </div>
                ))
              })
            }
        </div>
      </div>
    </>
  );
}

export default YourCards;
