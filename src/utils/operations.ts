// 1. CART VALUE OPERATION
export const cartValueFeeOperation = (cartValue: number) => {
  let surcharge = 0;
  if (surcharge < 0) {
    surcharge = 0;
  }
  if (cartValue <= 10) {
    surcharge = 10 - cartValue;
  }
  if (cartValue > 10) {
    surcharge = 0;
  }
  const cartValueFee = Math.max(0, surcharge);

  return Number(cartValueFee.toFixed(2));
};

// 2. DISTANCE FEE OPERATION
export const distanceFeeOperation = (deliveryDistance: number) => {
  let surcharge = 1;

  if (deliveryDistance < 500) {
    return surcharge;
  }
  if (deliveryDistance >= 500 && deliveryDistance <= 1000) {
    return (surcharge = 2);
  }
  if (deliveryDistance > 1000) {
    return (surcharge = Math.ceil(deliveryDistance / 500));
  }

  return surcharge;
};

// 3. AMOUNT OF ITEMS
export const amountItemsFeeOperation = (items: number) => {
  let surcharge = 0.5;
  let extraBulk = 1.2;

  if (items < 5) {
    return (surcharge = 0);
  }
  if (items >= 5 && items <= 12) {
    return (items - 4) * surcharge;
  }
  if (items > 12) {
    return (items - 4) * surcharge + extraBulk;
  }

  return surcharge;
};

// 4. RUSH TIME
export const rushTimeFeeOperation = (selectedTime: string): boolean => {
  const currentDate = new Date(selectedTime);

  if (
    currentDate.getHours() >= 15 &&
    currentDate.getHours() <= 19 &&
    currentDate.getDay() === 5
  ) {
    return true;
  } else {
    return false;
  }
};

// 5. SUM ALL FEES
export const sumAllFees = (
  cartValue: number,
  deliveryDistance: number,
  items: number,
  time: string
) => {
  const cartValueFee = cartValueFeeOperation(cartValue);
  const distanceFee = distanceFeeOperation(deliveryDistance);
  const amountItemsFee = amountItemsFeeOperation(items);
  const isRushHour = rushTimeFeeOperation(time);

  let sumCartDistanceItems = cartValueFee + distanceFee + amountItemsFee;

  if (isRushHour === true) {
    return +(sumCartDistanceItems * 1.2).toFixed(2);
  } else {
    return +sumCartDistanceItems;
  }
};

export const deliveryFee = (
  cartValue: number,
  deliveryDistance: number,
  items: number,
  time: string
) => {
  let totalFees = sumAllFees(cartValue, deliveryDistance, items, time);

  if (totalFees > 15 && totalFees < 100) {
    return (totalFees = 15);
  }
  if (totalFees >= 100) {
    return (totalFees = 0);
  } else {
    return totalFees;
  }
};
