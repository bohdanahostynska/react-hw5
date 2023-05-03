

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   alert('You have added a card')
  //   addCard({"user_name":"","numbers":"","expiry_date":"","cvc":""})
     
  //   }

function clearNumber(value = "") {
  return value.replace(/\D+/g, "");
}

export function formatCreditCardNumber(value) {
  if (!value) {
    return value;
  }

  const type = value;
  const clearValue = clearNumber(value);
  let nextValue;

  switch (type) {
    case "mastercard":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 15)}`;
      break;
    case "visa":
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 14)}`;
      break;
    default:
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        8
      )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;
      break;
  }

  return nextValue.trim();
}
export function formatExpirationDate(value) {
    const clearValue = clearNumber(value);
  
    if (clearValue.length >= 3) {
      return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
    }
  
    return clearValue;
  }
export function formatCVC(value, prevValue, allValues = {}) {
  const clearValue = clearNumber(value);
  let maxLength = 3;

  if (allValues.number) {
    const type = allValues.number;
    console.log(type)
  }

  return clearValue.slice(0, maxLength);
}


