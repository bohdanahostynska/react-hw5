import React, { useEffect, useState, createContext } from "react";

export const CardsContext = createContext();

export const DataContext = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/cards/123.json?key=778301b0")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error({ message: "Something went wrong..." });
      })
      .then((json) => setData(json))
      .catch((error) => setError(error.message));
  }, []);

  const addCard = (newCard) => {
    setData((prev) => [...prev, newCard]);
  };
console.log(addCard);
  return (
    <CardsContext.Provider value={{ data, error }}>
      {props.children}
    </CardsContext.Provider>
  );
};
