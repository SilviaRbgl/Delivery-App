import { render } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator", () => {
  it("should render input element", () => {
    render(<Calculator />);
  });
});
