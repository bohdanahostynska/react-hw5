import {
    Routes,
    Route,
    NavLink,
  } from "react-router-dom";
  import YourCards from "./components/YourCards";
  import { NextButton } from "./components/Button";
  import { PrevButton } from "./components/Button";
import { CreditCard } from "./components/CreditCard";
import AddNewCard from "./components/AddNewCard";
const links = [
    { id: '1', link: "/", name: "AddNewCard" },
    { id: '2', link: "your_cards", name: "YourCards" },
    { id: '3', link: "credit_card", name: "CreditCard" },
  ];

  
  const RouterApp = () => {
    return (
 <div className="container">
      <nav className="header-nav">
        <ul className="header-ul">
          <NextButton />
          {links.map(({ id, link, name }) => (
            <li key={id} className="nav_item">
              <NavLink
                className="nav_link"
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "grey" : "transparent",
                  };
                }}
                to={link}
              >
                {name}
              </NavLink>
            </li>
          ))}
          <PrevButton />
        </ul>
        <Routes>
          <Route path="/" element={<AddNewCard/>} />
          <Route path="credit_card" element={<CreditCard />} />
          <Route path="your_cards" element={<YourCards />} />
        </Routes>
        </nav>
    </div>
    );
  };
  
  export default RouterApp;

  