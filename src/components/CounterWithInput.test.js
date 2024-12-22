import { getByRole, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import CounterWithInput from "./CounterWithInput";

describe("CounterWithInput", () => {
  test("render the input with 10 and set the count value to the same ", async () => {
    user.setup();
    render(<CounterWithInput />);
    let inputBox = screen.getByRole("spinbutton");
    await user.type(inputBox, "20");
  });
});
