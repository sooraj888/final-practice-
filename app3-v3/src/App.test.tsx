import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import PageNotFound from "./pages/PageNotFound";
import RawJson from "./pages/RawJson";
import { BrowserRouter } from "react-router-dom";
import PostList from "./pages/PostList";

describe("test on PageNotFound components ", () => {
  test("rendering PageNotFound", () => {
    render(<PageNotFound />);
    screen.debug();
  });
});

describe("test on PageNotFound components ", () => {
  test("finding test on  PageNotFound", () => {
    render(<PageNotFound />);
    const ele = screen.getByText(/Page not found/);
    expect(ele).toBeInTheDocument();
  });
});

describe("test on PageNotFound components ", () => {
  test("snapshot test test on  PageNotFound", () => {
    const { container } = render(<PageNotFound />);
    expect(container).toMatchSnapshot();
  });
});

describe("test on RawJson components ", () => {
  test("rendering RawJson", () => {
    render(
      <BrowserRouter>
        <RawJson />
      </BrowserRouter>
    );
    screen.debug();
  });
});

describe("test on RawJson components ", () => {
  test("finding test on  RawJson", () => {
    render(
      <BrowserRouter>
        <RawJson />
      </BrowserRouter>
    );
    const ele = screen.getByText(/Data notFound/);
    expect(ele).toBeInTheDocument();
  });
});

describe("test on RawJson components ", () => {
  test("snapshot test test on  RawJson", () => {
    const { container } = render(
      <BrowserRouter>
        <RawJson />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});

describe("test on PostList components ", () => {
  test("rendering PostList", () => {
    render(
      <BrowserRouter>
        <PostList error={false} page={1} data={[]} setPage={jest.fn()} />
      </BrowserRouter>
    );
    screen.debug();
  });
});

describe("test on PostList components ", () => {
  test("rendering PostList", () => {
    render(
      <BrowserRouter>
        <PostList error={false} page={1} data={[]} setPage={jest.fn()} />
      </BrowserRouter>
    );
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });
});

const hits = [
  [
    {
      created_at: "123",
      title: "sooraj1",
      ur: "http:/sooraj.com",
      author: "soory",
    },
  ],
  [{ created_at: "124", title: "raj1", ur: "http:/raj.com", author: "sry" }],
];

const prop = { page: 1, data: hits, setPage: jest.fn() };

describe("test on PostList components ", () => {
  test("rendering PostList", () => {
    render(
      <BrowserRouter>
        <PostList error={false} page={1} data={hits} setPage={jest.fn()} />
      </BrowserRouter>
    );
    screen.debug();
  });
});

describe("test on PostList components ", () => {
  test(" test test on  PostList 2", () => {
    const { container } = render(
      <BrowserRouter>
        <PostList error={false} page={1} data={hits} setPage={jest.fn()} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});

describe("test on PostList components ", () => {
  test(" test on  PostList", () => {
    const { container } = render(
      <BrowserRouter>
        <PostList error={false} {...prop} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getAllByRole("button")[2]);
    expect(prop.setPage).toHaveBeenCalledTimes(1);
  });
});
