import React from "react";
import chip from '../assets/chip.png'
import master_logo from '../assets/master_logo.png'
export const CardList = (props) => {
  const { data} = props.data;

  return (
    <div className="card_container">
      <div className="card_wrapper">
        {data &&
          data.map((data,card) => {
            console.log(card);
            return (
                <div className="card_case">
              <div className="card_item_front" key={data.id}>
                 <img className="image"src={chip}  alt="img-img" />
                <p className="card_number">{data.card.numbers}</p>
                {/* <><p className="user_name">{user_name}</p></> */}
                <div className="card_info" ><p className="user_name">{data.user_name}</p>
                <img className="card_logo" src={master_logo }alt="img" /></div>
              </div>
                            <div className="card_item_back">
                          <div  className="card_info-second"> <p className="card_date">{data.card.expiry_date}</p>
                           <p className="card_cvc">{data.card.cvv}</p></div>
                         </div></div>
            );
          })}
 
      </div>
    </div>
  );
};

export default CardList;
