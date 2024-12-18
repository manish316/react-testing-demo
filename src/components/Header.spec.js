import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("Counter should render correctly ", () => {
  render(<Header />);
  const countElement = screen.getByText(/header/i);
  expect(countElement).toBeInTheDocument();
});
