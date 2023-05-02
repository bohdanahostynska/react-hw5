import { useNavigate } from "react-router-dom";
import Left from "../assets/left.png";
import Right from "../assets/right.png";

export const NextButton = () => {
  const navigate = useNavigate();
  const handleLinkClick = () => {
    navigate(+1);
  };
  return (
    <button className="btn-btn" onClick={handleLinkClick}>
      {<img className="links-img" src={Left} alt="next" />}
    </button>
  );
};
export const PrevButton = () => {
  const navigate = useNavigate();
  const handleLinkClick = () => {
    navigate(-1);
  };
  return (
    <button className="btn-btn" onClick={handleLinkClick}>
      {<img className="links-img" src={Right} alt="previous" />}
    </button>
  );
};
