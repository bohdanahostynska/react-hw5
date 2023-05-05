import React, { useContext, useState } from "react";
import chip from "../assets/chip.png";
import master_logo from "../assets/master_logo.png";
import plus from "../assets/plus 1.png";
import { Link } from "react-router-dom";
import { CardsContext } from "../context/CardsContext";
import {myCard }from "./YourCards";

export function Statistic({date,place,expense,currency}) {

  const { cardData } = useContext(CardsContext);

    return (
        <>
  <myCard
  
  />
        </>
      );
}

export default Statistic;