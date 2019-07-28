import { isDataLoading } from "./index";

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
