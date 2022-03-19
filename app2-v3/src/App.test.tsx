import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import NavBar from "./components/NavBar";
import PieChart from "./components/PieChart";
import PageNotFound from "./pages/PageNotFound";
import UserInputPage from "./pages/UserInputPage";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(<NavBar></NavBar>);
  screen.debug();
});

test("renders learn react link", () => {
  render(<NavBar></NavBar>);
  expect(screen.getByText("Question And Answer App")).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(<NavBar></NavBar>);
  expect(screen.getByText("Question And Answer App")).toHaveAttribute("class");
});

test("renders le react link", () => {
  const { container } = render(<NavBar></NavBar>);
  expect(container).toMatchSnapshot();
});

test("renders learn react link", () => {
  render(<PieChart percent={50}></PieChart>);
  screen.debug();
});

test("PieChart snapshot test", () => {
  const { container } = render(<PieChart percent={50}></PieChart>);
  expect(container).toMatchSnapshot();
});

test("renders learn react link", () => {
  render(<PageNotFound></PageNotFound>);
  screen.debug();
});

test("renders learn react link", () => {
  render(<PageNotFound></PageNotFound>);
  expect(screen.getByText("Page Not Found")).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(<PageNotFound></PageNotFound>);
  expect(screen.getByText("Page Not Found")).not.toHaveAttribute("class");
});

describe("", () => {
  test("PageNotFound snapshot", () => {
    const { container } = render(<PageNotFound></PageNotFound>);
    expect(container).toMatchSnapshot();
  });
});

test("UserInputPage test", () => {
  render(
    <BrowserRouter>
      <UserInputPage></UserInputPage>
    </BrowserRouter>
  );
  screen.debug();
});

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <UserInputPage></UserInputPage>
    </BrowserRouter>
  );
  expect(screen.getByText("Enter the Exam")).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <UserInputPage></UserInputPage>
    </BrowserRouter>
  );
  expect(screen.getByText("Enter the Exam")).toHaveAttribute("class");
});

describe("", () => {
  test("UserInputPage snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <UserInputPage></UserInputPage>
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});

describe("", () => {
  test("UserInputPage inserting value using fire event", () => {
    const { container } = render(
      <BrowserRouter>
        <UserInputPage></UserInputPage>
      </BrowserRouter>
    );
    const ele = screen.getByRole("textbox");
    fireEvent.change(ele, { target: { value: "sooraj" } });
    expect(ele).toHaveValue("sooraj");
  });
});
