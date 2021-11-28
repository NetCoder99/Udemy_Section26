import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  
  test("renders - hello world", () => {
    render(<Greeting />);
    const testElement1 = screen.getByText("Hello World!", { exact: true });
    expect(testElement1).toBeInTheDocument();
  });
  
  test("renders - good to see you", () => {
    render(<Greeting />);
    const testElement = screen.getByText("It's good to see you", { exact: false });
    expect(testElement).toBeInTheDocument();
  });

  test("renders - changed after button click", () => {
    render(<Greeting />);
    const btnElement1 = screen.getByRole('button');
    userEvent.click(btnElement1);
    const testElement = screen.getByText("Text was changed", { exact: true });
    expect(testElement).toBeInTheDocument();
  });

  test("renders - removed after button click", () => {
    render(<Greeting />);
    const btnElement1 = screen.getByRole('button');
    userEvent.click(btnElement1);
    const testElement = screen.queryByText("It's good to see you!", { exact: false });
    expect(testElement).toBeNull();
  });
});
