import React, { useEffect, useState, createContext } from "react";

export const CardsContext = createContext();

export const DataContext = (props) => {
  const [cardData, setCardData] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/cards/123.json?key=778301b0")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error({ message: "Something went wrong..." });
      })
      .then((json) => setCardData([json]))
      .catch((error) => setError(error.message));
  }, []);

  const addNewCard = (newCard) => {
    setCardData((prev) => [ newCard,...prev]);
    console.log(newCard)
  };
  console.log(addNewCard);
  return (
    <CardsContext.Provider value={{ cardData, error, addNewCard}}>
      {props.children}
    </CardsContext.Provider>
  );
};
