import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("Counter should render correctly ", () => {
  render(<Counter />);
  const countElement = screen.getByText(/count/i);
  expect(countElement).toBeInTheDocument();
});
