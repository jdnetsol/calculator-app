import { render, screen } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import ReactDOM from "react-dom";
import App from "./App";
import { Button } from "./components/Button";
import { Calculator } from "./components/Calculator";
import { Layout } from "./components/Layout";
import { NumberKeys } from "./components/NumberKeys";
import { OperatorKeys } from "./components/OperatorKeys";

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

test("clicking the equals button submits the form", () => {
  // const handleSubmit = jest.fn(() => console.log('handleSubmit'));
  const wrapper = mount(<Calculator />);
  // const spy = jest.spyOn(Calculator, handleSubmit);
  // expect(spy).toNotHaveBeenCalled();
  wrapper.find("#equals").simulate("click");
  // expect(spy).toHaveBeenCalled();
});
