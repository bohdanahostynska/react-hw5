import { Card } from "./Card";

export const CardsList = (
  user_name,
  numbers,
  type,
  expiry_date,
  cvv,
  statistic
) => {
  return (
    <>
      <Card
        user_name={user_name}
        numbers={numbers}
        type={type}
        expiry_date={expiry_date}
        cvv={cvv}
        statistic={statistic}
      />
    </>
  );
};
