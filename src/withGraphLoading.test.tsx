import React from "react";
import { cleanup, render } from "@testing-library/react";
import { withGraphLoading } from "./index";

afterEach(cleanup);

describe("withGraphLoading", () => {
  function Component() {
    return <span>My Component</span>;
  }

  function LoadingComponent() {
    return <span>Loading...</span>;
  }

  test("renders loading component", () => {
    const EnhancedComponent = withGraphLoading(LoadingComponent)(Component);
    const { getByText } = render(
      <EnhancedComponent data={{ loading: true }} />
    );
    expect(getByText("Loading...")).toBeDefined();
  });

  test("skips loading component", () => {
    const EnhancedComponent = withGraphLoading(LoadingComponent)(Component);
    const { getByText } = render(
      <EnhancedComponent data={{ loading: false }} />
    );
    expect(getByText("My Component")).toBeDefined();
  });
});
