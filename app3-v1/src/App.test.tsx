import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

import NavBar from "./components/NavBar";

// describe("test on NavBar", () => {
//   test("rendering NavBar", () => {
//     render(<NavBar />);
//     screen.debug();
//   });
// });

// describe("test on NavBar", () => {
//   test("finding text inside the NavBar ", () => {
//     render(<NavBar />);
//     const element = screen.getByText(/Post/i);
//     expect(element).toBeInTheDocument();
//   });
// });

import RawJson from "./pages/RawJson";
import { BrowserRouter } from "react-router-dom";

// describe("test on RawJson", () => {
//   test("displaying RawJson ", () => {
//     render(
//       <BrowserRouter>
//         <RawJson />
//       </BrowserRouter>
//     );
//     screen.debug();
//   });
// });

// describe("test on RawJson", () => {
//   test("finding text inside the RawJson ", () => {
//     render(
//       <BrowserRouter>
//         <RawJson />
//       </BrowserRouter>
//     );
//     const element = screen.getByText(/Data Not Found/);
//     expect(element).toBeInTheDocument();
//   });
// });

const postData = [[{ author: "sooraj", title: "my App" }]];

import PostListPage from "./pages/PostListPage";

describe("test on PostListPage", () => {
  test("displaying PostListPage ", () => {
    render(
      <BrowserRouter>
        <PostListPage postData={postData} page={1} setPage={jest.fn()} />
      </BrowserRouter>
    );
    screen.debug();
  });
});

// describe("test on PostListPage", () => {
//   test("finding text inside the PostListPage ", () => {
//     render(
//       <BrowserRouter>
//         <PostListPage />
//       </BrowserRouter>
//     );
//     const element = screen.getByText(/Data Not Found/);
//     expect(element).toBeInTheDocument();
//   });
// });
