import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import NavBar from "./components/NavBar";
import PieChart from "./components/PieChart";
import QuestionIndicator from "./components/QuestionIndicator";
import { BrowserRouter } from "react-router-dom";

describe("test on NavBar", () => {
  test("rendering NavBar", () => {
    render(<NavBar />);
    screen.debug();
  });
});

describe("test on NavBar", () => {
  test("snapshot test NavBar", () => {
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });
});

describe("test on NavBar", () => {
  test("finding element NavBar", () => {
    render(<NavBar />);
    expect(screen.getByText("Question and Weather App")).toBeInTheDocument();
  });
});

describe("test on NavBar", () => {
  test("finding element NavBar", () => {
    render(<NavBar />);
    expect(screen.getByText("Question and Weather App")).toHaveAttribute(
      "class"
    );
  });
});

describe("test on PieChart", () => {
  test("rendering PieChart", () => {
    render(<PieChart precent={50} />);
    screen.debug();
  });
});

describe("test on PieChart", () => {
  test("snapshot test PieChart", () => {
    const { container } = render(<PieChart precent={50} />);
    expect(container).toMatchSnapshot();
  });
});

describe("test on QuestionIndicator", () => {
  test("rendering QuestionIndicator", () => {
    render(
      <BrowserRouter>
        <QuestionIndicator answerArray={["2", "4", "", ""]} id={1} />
      </BrowserRouter>
    );
    screen.debug();
  });
});

describe("test on QuestionIndicator", () => {
  test("snapshot test QuestionIndicatorR", () => {
    const { container } = render(
      <BrowserRouter>
        <QuestionIndicator answerArray={["2", "4", "", ""]} id={1} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});

describe("test on NavBar", () => {
  test("finding element NavBar", () => {
    render(
      <BrowserRouter>
        <QuestionIndicator answerArray={["2", "4", "", ""]} id={1} />
      </BrowserRouter>
    );
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});

describe("test on NavBar", () => {
  test("finding element NavBar", () => {
    render(
      <BrowserRouter>
        <QuestionIndicator answerArray={["2", "4", "", ""]} id={1} />
      </BrowserRouter>
    );
    expect(screen.getByText("2")).toHaveAttribute("class");
  });
});
