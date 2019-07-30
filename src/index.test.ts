import { isDataLoading, hasDataError, withGraphLoading } from "./index";

describe("isDataLoading", () => {
  test("returns false when loading", () => {
    expect(
      isDataLoading({
        data: { error: undefined, loading: false, items: undefined }
      })
    ).toBe(false);
  });

  test("returns true when loaded", () => {
    expect(
      isDataLoading({
        data: { error: undefined, loading: true, items: undefined }
      })
    ).toBe(true);
  });
});

describe("hasDataError", () => {
  test("returns false without error", () => {
    expect(
      hasDataError({
        data: { error: undefined, loading: true, items: undefined }
      })
    ).toBe(false);
  });

  test("returns true with error", () => {
    expect(
      hasDataError({
        data: { error: Symbol("error"), loading: true, items: undefined }
      })
    ).toBe(true);
  });
});
