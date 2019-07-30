import React from "react";
import { cleanup, render } from "@testing-library/react";
import { withGraphError } from "./index";

afterEach(cleanup);

describe("withGraphError", () => {
  function Component() {
    return <span>My Component</span>;
  }

  function ErrorComponent() {
    return <span>An error has occurred</span>;
  }

  test("renders error component", () => {
    const EnhancedComponent = withGraphError(ErrorComponent)(Component);
    const { getByText } = render(
      <EnhancedComponent data={{ error: Symbol("error"), loading: true }} />
    );
    expect(getByText("An error has occurred")).toBeDefined();
  });

  test("skips error component", () => {
    const EnhancedComponent = withGraphError(ErrorComponent)(Component);
    const { getByText } = render(
      <EnhancedComponent data={{ error: null, loading: true }} />
    );
    expect(getByText("My Component")).toBeDefined();
  });
});
