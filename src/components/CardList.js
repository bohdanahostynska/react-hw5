import React, { useContext } from "react";
import { CardsContext } from "./CardsContext";
import { CreditCard } from "./CreditCard";

export const CardsList = () => {
  const { cardData } = useContext(CardsContext);
  const { user_name, data} = cardData;

  console.log("user_name:", user_name);
  console.log("data:", data);
  console.log("cardData:", cardData);

  return (
    <>
      {data.map(({ id, card, statistic }) => (
          <CreditCard
            key={id}
            user_name={user_name}
            numbers={card.numbers}
            issuer={card.issuer}
            expiryDate={card.expiry_date}
            cvc={card.cvv}
            statistic={statistic}
          />
        ))}
    </>
  );
};