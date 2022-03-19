import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import ShowError from "./utility/ShowError";
import NavBar from "./components/NavBar";
import CountryInput from "./pages/CountryInput";
import { BrowserRouter } from "react-router-dom";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import CountryDetailsCard from "./components/CountryDetailsCard";

describe("test on ShowError componet ", () => {
  test("rendering ShowError componet on terminal", () => {
    render(<ShowError />);
    screen.debug();
  });
});

describe("test on ShowError componet ", () => {
  test("finding the element", () => {
    render(<ShowError />);
    const ele = screen.getByText(/Somthing Went wrong!/);
    expect(ele).toBeInTheDocument();
  });
});

describe("test on ShowError componet ", () => {
  test("snapshot tes on ShowError componet ", () => {
    const { container } = render(<ShowError />);
    expect(container).toMatchSnapshot();
  });
});

describe("test on NavBar componet ", () => {
  test("rendering NavBar componet on terminal", () => {
    render(<NavBar />);
    screen.debug();
  });
});

describe("test on NavBar componet ", () => {
  test("finding the element", () => {
    render(<NavBar />);
    const ele = screen.getByText(/Country Weather App/);
    expect(ele).toBeInTheDocument();
  });
});

describe("test on NavBar componet ", () => {
  test("snapshot tes on NavBar componet ", () => {
    const { container } = render(<NavBar />);

    expect(container).toMatchSnapshot();
  });
});

describe("test on CountryInput componet ", () => {
  test("rendering CountryInput componet on terminal", () => {
    render(
      <BrowserRouter>
        <CountryInput />
      </BrowserRouter>
    );
    screen.debug();
  });
});

describe("test on CountryInput componet ", () => {
  test("finding the element", () => {
    render(
      <BrowserRouter>
        <CountryInput />
      </BrowserRouter>
    );
    const ele = screen.getByText(/Search/);
    expect(ele).toBeInTheDocument();
  });
});

describe("test on CountryInput componet ", () => {
  test("finding the element with role", () => {
    render(
      <BrowserRouter>
        <CountryInput />
      </BrowserRouter>
    );
    const ele = screen.getByRole("button");
    expect(ele).toBeInTheDocument();
  });
});

describe("test on CountryInput componet ", () => {
  test("snapshot tes on CountryInput componet ", () => {
    const { container } = render(
      <BrowserRouter>
        <CountryInput />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});

describe("test on CountryInput componet ", () => {
  test(" snapshot tes and fireEvent changing input value ", () => {
    const { container } = render(
      <BrowserRouter>
        <CountryInput />
      </BrowserRouter>
    );
    const ele = screen.getByRole("textbox");
    fireEvent.change(ele, { target: { value: "sooraj" } });
    expect(screen.getByDisplayValue("sooraj")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

const countryData = {
  capital: "Dehli",
  latlng: [20, 17],
  population: "130cr",
  name: { common: "India" },
};

describe("test on CountryDetailsCard componet ", () => {
  test("rendering CountryDetailsCard componet on terminal without prop", () => {
    render(
      <BrowserRouter>
        <CountryDetailsCard />
      </BrowserRouter>
    );
    screen.debug();
  });
});

describe("test on CountryDetailsCard componet ", () => {
  test("rendering CountryDetailsCard componet on terminal with prop", () => {
    render(
      <BrowserRouter>
        <CountryDetailsCard countryData={countryData} />
      </BrowserRouter>
    );
    screen.debug();
  });
});

describe("test on CountryDetailsCard componet ", () => {
  test("finding the element", () => {
    render(
      <BrowserRouter>
        <CountryDetailsCard countryData={countryData} />
      </BrowserRouter>
    );
    const ele = screen.getByText(/130cr/);
    expect(ele).toBeInTheDocument();
    expect(screen.getByText(/20-17/)).toBeInTheDocument();
    expect(screen.getByText(/Dehli/)).toBeInTheDocument();
    expect(screen.getByText(/India/)).toBeInTheDocument();
  });
});

describe("test on CountryDetailsCard componet ", () => {
  test("finding the element with role", () => {
    render(
      <BrowserRouter>
        <CountryDetailsCard />
      </BrowserRouter>
    );
    const ele = screen.getByRole("button");
    expect(ele).toBeInTheDocument();
  });
});

describe("test on CountryDetailsCard componet ", () => {
  test("snapshot tes on CountryInput componet  without prop", () => {
    const { container } = render(
      <BrowserRouter>
        <CountryDetailsCard />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});

describe("test on CountryDetailsCard componet ", () => {
  test("snapshot test on CountryInput componet  with prop", () => {
    const { container } = render(
      <BrowserRouter>
        <CountryDetailsCard countryData={countryData} />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
