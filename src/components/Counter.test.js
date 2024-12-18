import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  test("should render correctly ", () => {
    render(<Counter />);
    const countElement = screen.getByText(/count/i);
    expect(countElement).toBeInTheDocument();
  });
});
describe("Counter Buttons", () => {
  test("Increment Button should render fine", () => {
    render(<Counter />);
    const IncrementButton = screen.getByRole("button", { name: "Increment" });
    expect(IncrementButton).toBeInTheDocument();
  });

  it("Decrement Button should render fine", () => {
    render(<Counter />);
    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    expect(decrementButton).toBeInTheDocument();
  });
});
