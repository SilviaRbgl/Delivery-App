import { render, screen, fireEvent } from '@testing-library/react';
import Button from "./Button"

const mockedClick = jest.fn();

describe("Button", () => {
    it('should render input element', () => {
        render(
            <Button
                buttonText="button"
                className='button'
                handleClick={mockedClick}
            />
        );
        const buttonElement = screen.getByRole("button", { name: /button/i });

        expect(buttonElement).toBeInTheDocument();
    });
})