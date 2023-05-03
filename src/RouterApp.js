import { Routes, Route, NavLink } from "react-router-dom";
import YourCards from "./components/YourCards";
import { NextButton } from "./components/Button";
import { PrevButton } from "./components/Button";
import FormPage from "./pages/FormPage"
// import { Card } from "./components/Card";
// import Form from "./components/Form";
// import {Statistic} from "./components/Statistic"

const links = [
  { id: "1", link: "/", name:"FormPage" },
  { id: "2", link: "your_cards", name: "YourCards" ,},
  // { id: "3", link: "card", name: "Card" },
  { id: "4", link: "statistic", name: "Statistic" },
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
          <Route path="/" element={<FormPage/>} />
          {/* <Route path="card" element={< Card />} /> */}
          <Route path="your_cards" element={<YourCards />} />
          {/* <Route path="statistic" element={<Statistic />} /> */}
        </Routes>
      </nav>
    </div>
  );
};

export default RouterApp;
