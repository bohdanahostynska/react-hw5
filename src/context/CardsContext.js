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
    if (cardData.some((user) => user.user_name === newCard.user_name)) {
      const newData = cardData.map((d) => {
        if (d.user_name !== newCard.user_name) {
          return d;
        }

        return {
          ...d,
          data: [
            ...d.data,
            {
              card: {
                cvv: newCard.cvv,
                expiry_date: newCard.expiry_date,
                numbers: newCard.numbers,
                type: newCard.type,
              },
              id: d.data[d?.data.length - 1].id + 1,
            },
          ],
        };
      });

      setCardData(newData);
      return;
    }

    setCardData((ps) => [
      {
        data: [
          {
            card: {
              cvv: newCard.cvv,
              expiry_date: newCard.expiry_date,
              numbers: newCard.numbers,
              type: newCard.type,
            },
            id: 1,
          },
        ],
        id: ps.length + 1,
        user_id: ps.length + 1,
        user_name: newCard.user_name,
      },
      ...ps,
    ]);
  };

  console.log(cardData);
  return (
    <CardsContext.Provider value={{ cardData, error, addNewCard }}>
      {props.children}
    </CardsContext.Provider>
  );
};
