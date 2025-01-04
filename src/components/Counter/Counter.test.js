import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
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

  test("Initial Count value should be equal to 0", () => {
    render(<Counter />);
    let counterDiv = screen.getByTitle("counter-div");
    expect(counterDiv.textContent).toEqual("Count: 0");
  });

  test("count should be 1 when user clicks Increment Button once", () => {
    render(<Counter></Counter>);
    let incrementButton = screen.getByRole("button", { name: "Increment" });
    fireEvent.click(incrementButton);
    let counterDiv = screen.getByTitle("counter-div");
    expect(counterDiv.textContent).toEqual("Count: 1");
  });
  test("count should be 1 when user clicks Increment Button once", async () => {
    user.setup();
    render(<Counter></Counter>);
    let incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    let counterDiv = screen.getByTitle("counter-div");
    expect(counterDiv.textContent).toEqual("Count: 1");
  });

  test("count should be 2 when user clicks Increment Button twice", async () => {
    user.setup();
    render(<Counter></Counter>);
    let incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.dblClick(incrementButton);
    let counterDiv = screen.getByTitle("counter-div");
    expect(counterDiv.textContent).toEqual("Count: 2");
  });

  test("Count should be -1 when Decrement Button is clicked once ", async () => {
    user.setup();
    render(<Counter />);
    let decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });
    await user.click(decrementButton);
    const counterDiv = screen.getByTitle("counter-div");
    expect(counterDiv.textContent).toEqual("Count: -1");
  });
});
