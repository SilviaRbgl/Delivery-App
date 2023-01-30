import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className: string;
  buttonText: string;
};

function Button({ handleClick, buttonText }: ButtonProps) {
  return (
    <div>
      <button className="button" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default Button;
