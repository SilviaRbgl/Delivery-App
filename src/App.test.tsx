import { render, screen } from '@testing-library/react';
import Calculator from './components/Calculator';
import App from './App';

describe("loading main page", () => {

  it('renders title component', () => {
    render(<App />);
    const titleValue = screen.getByRole('heading', { name: /Delivery fee calculator/i });
    expect(titleValue).toBeInTheDocument();
  })
  it('renders calculator component', () => {
    render(<Calculator />)
  })
})