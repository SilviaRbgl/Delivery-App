import { render, screen } from "@testing-library/react";
import Input from "./Input";

const mockedSetValue = jest.fn();

describe("Input", () => {
  it("should render input element", () => {
    render(
      <Input
        id={"cart"}
        value={3}
        setValue={mockedSetValue}
        type="number"
        min="0"
        step={100}
      />
    );
    const inputElement = screen.getByPlaceholderText(/Enter Value/i);
    expect(inputElement).toBeInTheDocument();
  });
});
