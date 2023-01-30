
// 1. CART VALUE OPERATION
export const cartValueFeeOperation = (cartValue: number) => {
  // console.log("cartValue type", typeof cartValue);

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
  // console.log("surcharge", surcharge)
  const cartValueFee = Math.max(0, surcharge);

  return Number(cartValueFee.toFixed(2));
  
};
// console.log("cartValueFeeOperation>>> ", cartValueFeeOperation(5.30));

// 2. DISTANCE FEE OPERATION
export const distanceFeeOperation = (deliveryDistance: number) => {
  // console.log("deliveryDistance type", typeof deliveryDistance);
  let surcharge = 1; 

  if (deliveryDistance < 500) {
    return surcharge;
  }
  if (deliveryDistance >= 500 && deliveryDistance <= 1000) {
    // console.log("surcharge<100", surcharge)
    return (surcharge = 2);
  }
  if (deliveryDistance > 1000) {
    // console.log("surcharge>100", surcharge)
    return (surcharge = Math.ceil(deliveryDistance / 500));
  }

  return surcharge; // this avoid "deliveryDistance is possibly undefined". Buscar un caso "default"
};
// console.log("distanceFeeOperation", distanceFeeOperation(1501))

// 3. AMOUNT OF ITEMS
export const amountItemsFeeOperation = (items: number) => {
  //  console.log("items type>", typeof items)
  let surcharge = 0.5;
  let extraBulk = 1.2;

  if (items < 5) {
    // console.log("surcharge", surcharge);
    return (surcharge = 0);
  }
  if (items >= 5 && items <= 12) {
    // console.log("surcharge", surcharge)
    return (items - 4) * surcharge;
  }
  if (items > 12) {
    // console.log("surcharge", surcharge)
    // console.log("extraBulk", extraBulk)
    return (items - 4) * surcharge + extraBulk;
  }

  return surcharge; // this avoid "items is possibly undefined". Buscar un caso "default"
};
// console.log("amountItemsFeeOperation", amountItemsFeeOperation(13))

// 4. RUSH TIME
export const rushTimeFeeOperation = (selectedTime: string): boolean => {
  const currentDate = new Date(selectedTime); // we receive a string and we convert it in a Date
  // console.log("day of the week :>> ", currentDate.getDay());
  // console.log("hour :>> ", currentDate.getHours());

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
  time: string // i want to receive a boolean here, why do i receive a string?
) => {
  // console.log("time typeof>>", typeof time);
  // console.log("items typeof>>", typeof items);
  // console.log("deliveryDistance typeof>>", typeof deliveryDistance);
  // console.log("cartValue typeof>>", typeof cartValue);
  
  const cartValueFee = cartValueFeeOperation(cartValue);
  const distanceFee = distanceFeeOperation(deliveryDistance);
  const amountItemsFee = amountItemsFeeOperation(items);
  const isRushHour = rushTimeFeeOperation(time);

  // console.log('cartValueFee, distanteFee, amountItemsFee, isRushHour >>> ', cartValueFee, distanceFee, amountItemsFee, isRushHour);

  let sumCartDistanceItems = cartValueFee + distanceFee + amountItemsFee;
  // console.log("sumCartDistanceItems", sumCartDistanceItems);
  
  if (isRushHour === true) {
    return +(sumCartDistanceItems * 1.2).toFixed(2);
  } else {
    return +sumCartDistanceItems
  }
};
// console.log("sumAllFees>>", sumAllFees(8.70, 900, 4, "2023-01-31T18:07"))

export const deliveryFee = (
    cartValue: number,
    deliveryDistance: number,
    items: number,
    time: string
  ) => {
    // console.log("TYPE>>>", typeof cartValue)
    let totalFees = sumAllFees(cartValue, deliveryDistance, items, time);
    //  console.log("totalFeesTYPE", typeof totalFees)

    if (totalFees > 15 && totalFees < 100) {
      return (totalFees = 15);
    }
    if (totalFees >= 100) {
       return (totalFees = 0);
    } else {
      return totalFees
    }
};
  
// console.log("deliveryFees>>", deliveryFee(5, 900, 5, "2023-01-31T18:07"))