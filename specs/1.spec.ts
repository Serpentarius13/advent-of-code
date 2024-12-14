import { test, expect } from "bun:test";
import { getListsDistance, getSimilarity } from "../solutions/1";

test("getListDistance example", () => {
  const left = [3, 4, 2, 1, 3, 3];
  const right = [4, 3, 5, 3, 9, 3];

  expect(getListsDistance(left, right)).toBe(11);
});

test("getSimilary example", () => {
  const left = [3, 4, 2, 1, 3, 3];
  const right = [4, 3, 5, 3, 9, 3];

  expect(getSimilarity(left, right)).toBe(31);
});
