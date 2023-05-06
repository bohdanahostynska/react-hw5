import chip from "../assets/chip.png";
import master_logo from "../assets/master_logo.png";

 const Card = ({user_name,cvv, expiry_date,numbers}) => {
  return (
    <>
        <div className="card_container">
        <div className="card_wrapper">
        <div className="card_case">
          <div className="sides" >   
          <div className="sides-front">
          <img className="image-clone" src={chip} alt="img-img" />
          <img className="card_logo" src={master_logo} alt="img" />       
          <p className="card_number">{numbers}</p>
          <p className="user_name">{user_name}</p> 
          </div>
          <div className="sides-back">
          <p className="card_number">{cvv}</p>
          <p className="card_number">{expiry_date}</p>
          </div>
        </div>
      </div>
      </div></div>
    </>
  );
};

export default Card