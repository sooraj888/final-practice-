import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import NavBar from "./components/NavBar";
import ShowError from "./utility/ShowError";
import CountryDeatils from "./components/CountryDeatils";
import { BrowserRouter } from "react-router-dom";

describe("test on NavBar Componet", () => {
  test("rendering NavBar ", () => {
    render(<NavBar />);
    screen.debug();
  });
});

describe("test on NavBar Componet", () => {
  test("finding text inside NavBar ", () => {
    render(<NavBar />);
    const element = screen.getByText(/Country and Weather App/);
    expect(element).toBeInTheDocument();
  });
});

describe("test on NavBar Componet", () => {
  test("finding text inside NavBar ", () => {
    const { container } = render(<NavBar />);

    expect(container).toMatchSnapshot();
  });
});

describe("test on NavBar Componet", () => {
  test("finding text inside NavBar ", () => {
    render(<NavBar />);
    const element = screen.getByText(/Country and Weather App/);
    expect(element).toHaveAttribute("class");
  });
});

describe("test on ShowError Componet", () => {
  test("rendering ShowError ", () => {
    render(<ShowError />);
    screen.debug();
  });
});

describe("test on ShowError Componet", () => {
  test("finding text inside ShowError ", () => {
    render(<ShowError />);
    const element = screen.getByText(/Error/);
    expect(element).toBeInTheDocument();
  });
});

describe("test on ShowError Componet", () => {
  test("snapshot testing on ShowError ", () => {
    const { container } = render(<ShowError />);

    expect(container).toMatchSnapshot();
  });
});

describe("test on ShowError Componet", () => {
  test("finding attribute of particular element", () => {
    render(<ShowError />);
    const element = screen.getByText(/Error/);
    expect(element).not.toHaveAttribute("class");
  });
});

const data = {
  name: { common: "india" },
  capital: "dehli",
  population: "130cr",
  flags: { png: "" },
};

describe("test on CountryDeatils Componet", () => {
  test("rendering CountryDeatils without prop ", () => {
    render(
      <BrowserRouter>
        <CountryDeatils countryData={""} />
      </BrowserRouter>
    );
    screen.debug();
  });
});

describe("test on CountryDeatils Componet", () => {
  test("rendering CountryDeatils with prop ", () => {
    render(
      <BrowserRouter>
        <CountryDeatils countryData={data} />
      </BrowserRouter>
    );
    screen.debug();
  });
});

describe("test on CountryDeatils Componet", () => {
  test("finding text inside CountryDeatils which is sent as prop ", () => {
    render(
      <BrowserRouter>
        <CountryDeatils countryData={data} />
      </BrowserRouter>
    );
    const element = screen.getByText(/Lat-Lng/);
    expect(element).toBeInTheDocument();

    expect(screen.getByText(/130cr/)).toBeInTheDocument();
    expect(screen.getByText(/dehli/)).toBeInTheDocument();
  });
});

describe("test on CountryDeatils Componet", () => {
  test("snapshot testing on CountryDeatils ", () => {
    const { container } = render(
      <BrowserRouter>
        <CountryDeatils countryData={data} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});

describe("test on CountryDeatils Componet", () => {
  test("finding attribute of particular element", () => {
    render(
      <BrowserRouter>
        <CountryDeatils countryData={data} />
      </BrowserRouter>
    );
    screen.debug();
    const element = screen.getByText(/india/);
    expect(element).toHaveAttribute("class");
  });
});

//  //intensional error this will throw erro because after clicking button the text was removed so we get erro  here "screen.getByText(/130cr/)"
describe("test on CountryDeatils Componet", () => {
  test("intensional error this will throw erro because after clicking button the text was removed so we get erro  here ", () => {
    const { container } = render(
      <BrowserRouter>
        <CountryDeatils countryData={data} />
      </BrowserRouter>
    );
    screen.debug();
    expect(screen.getByText(/130cr/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button"));

    // expect(screen.getByText(/130cr/)).toBeInTheDocument();
  });
});
