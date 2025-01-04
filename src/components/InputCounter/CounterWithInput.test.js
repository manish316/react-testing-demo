import { getByRole, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import CounterWithInput from "./CounterWithInput";

describe("CounterWithInput", () => {
  test("render the input with 10 and set the count value to the same ", async () => {
    user.setup();
    render(<CounterWithInput />);
    let inputBox = screen.getByRole("spinbutton");
    await user.type(inputBox, "20");
    let setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButton);
    let counterElement = screen.getByTestId("count-div");
    expect(counterElement.textContent).toEqual("20");
  });

  test("When input value is empty then the count should be 0", async () => {
    user.setup();
    render(<CounterWithInput />);
    let inputBox = screen.getByRole("spinbutton");
    await user.clear(inputBox);
    let setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButton);
    let counterElement = screen.getByTestId("count-div");
    expect(counterElement.textContent).toBe("0");
  });

  test("When initialCount passed a 10 then count value should be 10", () => {
    user.setup();
    render(<CounterWithInput initialCount={10} />);
    let counterElement = screen.getByTestId("count-div");
    expect(counterElement.textContent).toBe("10");
  });
});
