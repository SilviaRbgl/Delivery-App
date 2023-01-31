import {
  cartValueFeeOperation,
  distanceFeeOperation,
  amountItemsFeeOperation,
  rushTimeFeeOperation,
  sumAllFees,
  deliveryFee,
} from "./operations";

describe("check the operation of card value", () => {
  it("cart value = 0, no surcharge", () => {
    let res = cartValueFeeOperation(0);
    expect(res).toBeDefined();
    expect(res).toEqual(0);
  });
  it("cart value < 10 has surcharge", () => {
    let res = cartValueFeeOperation(8.9);
    expect(res).toBeDefined();
    expect(res).toEqual(1.1);
  });
  it("cart value = 10, no surcharge", () => {
    let res = cartValueFeeOperation(10);
    expect(res).toBeDefined();
    expect(res).toEqual(0);
  });
  it("cart value > 10, no surcharge", () => {
    let res = cartValueFeeOperation(12);
    expect(res).toBeDefined();
    expect(res).toEqual(0);
  });
});

describe("check the operation of delivery distance", () => {
  it("delivery distance < 500m has 1€ surcharge", () => {
    let res = distanceFeeOperation(400);
    expect(res).toBeDefined();
    expect(res).toEqual(1);
  });
  it("delivery distance <= 1000m has 2€ surcharge", () => {
    let res = distanceFeeOperation(1000);
    expect(res).toBeDefined();
    expect(res).toEqual(2);
  });
  it("delivery distance > 1000m has 0.5€ surcharge * each 500m", () => {
    let res = distanceFeeOperation(1501);
    expect(res).toBeDefined();
    expect(res).toEqual(4);
  });
});

describe("check the operation of amount of items", () => {
  it("amount items < 4, no surcharge", () => {
    let res = amountItemsFeeOperation(4);
    expect(res).toBeDefined();
    expect(res).toEqual(0);
  });
  it("amount items => 5, has 0.5€ surcharge * each item", () => {
    let res = amountItemsFeeOperation(10);
    expect(res).toBeDefined();
    expect(res).toEqual(3);
  });
  it("amount items > 12 has 0.5€ surcharge * each item + 1.20 bulkfee", () => {
    let res = amountItemsFeeOperation(13);
    expect(res).toBeDefined();
    expect(res).toEqual(5.7);
  });
});

describe("check the operation of rush hour", () => {
  it("its rush hour", () => {
    let res = rushTimeFeeOperation("2023-02-03T18:07");
    expect(res).toBeDefined();
    expect(res).toEqual(true);
  });
  it("its not rush hour", () => {
    let res = rushTimeFeeOperation("2023-01-31T18:07");
    expect(res).toBeDefined();
    expect(res).toEqual(false);
  });
});

describe("check the operation of the sum of all fees", () => {
  it("fees with rush hour", () => {
    let res = sumAllFees(8.7, 900, 4, "2023-02-03T18:07");
    expect(res).toBeDefined();
    expect(res).toEqual(3.96);
  });
  it("fees without rush hour", () => {
    let res = sumAllFees(8.7, 900, 4, "2023-01-31T18:07");
    expect(res).toBeDefined();
    expect(res).toEqual(3.3);
  });
});

describe("check the operation of the final delivery fee", () => {
  it("fees < 15", () => {
    let res = deliveryFee(8.7, 900, 4, "2023-02-01T18:07");
    expect(res).toBeDefined();
    expect(res).toEqual(3.3);
  });
  it("fees > 15", () => {
    let res = deliveryFee(1, 1501, 13, "2023-02-03T18:07");
    expect(res).toBeDefined();
    expect(res).toEqual(15);
  });
  it("fees > 100", () => {
    let res = deliveryFee(1, 10000, 1000, "2023-02-03T18:07");
    expect(res).toBeDefined();
    expect(res).toEqual(0);
  });
});
