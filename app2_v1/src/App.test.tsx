import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import UserInputPage from "./pages/UserInputPage";
import { BrowserRouter } from "react-router-dom";
import Question from "./pages/Question";

// test("renders learn react link", () => {
//   const { container } = render(
//     <BrowserRouter>
//       <UserInputPage />
//     </BrowserRouter>
//   );
//   fireEvent.change(screen.getByPlaceholderText("name"), {
//     target: { value: "sooraj" },
//   });

//   expect(container).toMatchSnapshot();
//   expect(screen.getByPlaceholderText("name")).toHaveValue("sooraj");
// });

// test("", () => {
//   render(
//     <BrowserRouter>
//       <Question />
//     </BrowserRouter>
//   );
//   screen.debug();
// });

test("asd", () => {
  const { container } = render(
    <BrowserRouter>
      <Question />
    </BrowserRouter>
  );
  screen.debug();
  expect(container).toMatchSnapshot();
  fireEvent.click(screen.getByRole("button"));
  // expect(screen.getByText(/1+2/)).toBeInTheDocument();
});
