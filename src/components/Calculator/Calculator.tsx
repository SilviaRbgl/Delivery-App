import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { deliveryFee } from "../../utils/operations";

function Calculator() {
  const [valueCart, setValueCart] = useState(0);
  const [valueDistance, setValueDistance] = useState(0);
  const [valueAmount, setValueAmount] = useState(0);
  const [valueTime, setValueTime] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    deliveryFee(valueCart, valueDistance, valueAmount, valueTime);
    setResult(deliveryFee(valueCart, valueDistance, valueAmount, valueTime));
  };

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    setValueCart(0);
    setValueDistance(0);
    setValueAmount(0);
    setValueTime("");
    setResult(0);
  };

  return (
    <div className="m-4">
      <form className="form">
        <p className="p">Cart Value:</p>
        <div className="flex flex-row justify-center relative">
          <Input
            value={valueCart}
            setValue={setValueCart}
            name="cart"
            min="0"
            type="number"
          />
          <div className="flex justify-self-end absolute ml-32">
            <p className="font-body uppercase mt-3 "> €</p>
          </div>
        </div>
        <br />
        <p className="p">Delivery distance:</p>
        <div className="flex flex-row justify-center relative">
          <Input
            value={valueDistance}
            setValue={setValueDistance}
            name="distance"
            type="number"
            min="0"
            step={100}
          />
          <div className="flex justify-self-end absolute ml-32">
            <p className="font-body uppercase mt-3">M</p>
          </div>
        </div>
        <br />
        <p className="p">Amount of items:</p>
        <div className="flex flex-row justify-center">
          <Input
            value={valueAmount}
            setValue={setValueAmount}
            name="amount"
            type="number"
            min="0"
          />
        </div>
        <br />
        <p className="p">Time:</p>
        <Input
          value={valueTime}
          setValue={setValueTime}
          name="time"
          type="datetime-local"
          min="2023-01-23T00:00"
        />
        <br />
        <Button
          className="button"
          handleClick={handleClick}
          buttonText="Calculate delivery price"
        />
        <p className="p">Delivery Fee: {result} €</p>
      </form>
      <Button
        className="button"
        handleClick={handleReset}
        buttonText="Reset calculator"
      />
    </div>
  );
}

export default Calculator;
