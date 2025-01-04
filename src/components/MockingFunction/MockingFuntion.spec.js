import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockingFunction from "./MockingFunction";

describe("Testing Counter Component using mocking function", () => {
  const handleIncrement = jest.fn();
  const handleDecrement = jest.fn();
  test("test handler functions using function mocking", async () => {
    userEvent.setup();
    render(
      <MockingFunction
        count={0}
        incrementHandler={handleIncrement}
        decrementHandler={handleDecrement}
      />
    );
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });
    await userEvent.click(incrementBtn);
    await userEvent.click(decrementBtn);
    expect(handleIncrement).toHaveBeenCalledTimes(1);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });
});
