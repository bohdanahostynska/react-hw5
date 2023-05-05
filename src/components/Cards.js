import { useContext } from "react";
import { Card } from "./Card";
import { CardsContext } from "./DataContext";

export const CardsList = (user_name,numbers,type,expiry_date,cvv,statistic) => {
  const { cardData } = useContext(CardsContext);
  return (
    <>
      {/* {cardData?.map(({user_name, id, card, statistic}) => ( */}
          <Card
            // key={id}
            user_name={user_name}
            numbers={numbers}
            type={type}
            expiry_date={expiry_date}
            cvv={cvv}
            statistic={statistic}
          />
        {/* ))} */}
    </>
  );
};
