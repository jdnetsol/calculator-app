import { fireEvent, render, cleanup, screen, Simulate } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import App from "./App";
import { Button } from "./components/Button";
import { Calculator } from "./components/Calculator";
import { Keypad } from "./components/Keypad";
import { Layout } from "./components/Layout";
import { NumberKeys } from "./components/NumberKeys";
import { OperatorKeys } from "./components/OperatorKeys";

afterEach(cleanup)

const mockOperators = [
      { displayName: "Multiply", Symbol: "*" },
      { displayName: "Subtract", Symbol: "-" },
    ];

// test ("should take a snapshot", () => {
//   const { asFragment } = render(<App />)
//   expect (asFragment(<App />)).toMatchSnapshot()
// })

test("renders 'Welcome to the Calculator...' heading", () => {
  render(<Layout />);
  const headingElement = screen.getByText(/Welcome to the Calculator.../i);
  expect(headingElement).toBeInTheDocument();
});

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders 10 number buttons", () => {
  const wrapper = shallow(<NumberKeys />);
  expect(wrapper.find(Button)).toHaveLength(10);
});

test("renders a button for each operator", () => {
  const mockOperators = [
    { displayName: "Multiply", Symbol: "*" },
    { displayName: "Subtract", Symbol: "-" },
  ];
  const wrapper = shallow(<OperatorKeys operators={mockOperators} />);
  expect(wrapper.find(Button)).toHaveLength(mockOperators.length);
});
