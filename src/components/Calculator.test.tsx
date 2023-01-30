import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from "./Calculator"

const mockedClick = jest.fn();

describe("Calculator", () => {
    it('should render input element', () => {
        render(
            <Calculator
                // buttonText="button"
                // className='button'
                // handleClick={mockedClick}
            />
        );
        // const buttonElement = screen.getByRole("button", { name: /button/i });

        // expect(buttonElement).toBeInTheDocument();
    });
})