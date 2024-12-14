import fs from "fs/promises";

export const getListsDistance = (left: number[], right: number[]): number => {
  const sortedLeft = left.sort((a, b) => a - b);
  const sortedRight = right.sort((a, b) => a - b);

  console.log("sorted lists");

  let total = 0;

  for (let i = 0; i < sortedLeft.length; i++) {
    const leftPiece = sortedLeft[i];
    const rightPiece = sortedRight[i];

    total += Math.abs(leftPiece - rightPiece);
  }

  console.log("total", total);

  return total;
};

export const convertTxtToLists = (
  txt: string
): { left: number[]; right: number[] } => {
  const lines = txt.split("\n");
  const leftArr: number[] = [];
  const rightArr: number[] = [];

  for (const line of lines) {
    if (!line) continue;
    const [left, right] = line.split("   ").map(Number);
    leftArr.push(left ?? 0);
    rightArr.push(right ?? 0);
  }

  return {
    left: leftArr,
    right: rightArr,
  };
};

export const getSimilarity = (left: number[], right: number[]): number => {
  const map = new Map<number, number>();
  for (const item of right) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  console.log("constructed map");
  const res = left.reduce((acc, cur) => {
    acc += cur * (map.get(cur) || 0);
    return acc;
  }, 0);

  return res;
};

export const solveDayOne = async (path: string) => {
  const file = await fs.readFile(path, "utf-8");

  console.log("read file:", file);

  const { left, right } = convertTxtToLists(file);

  console.log("got lists: ", left, right);

  return getListsDistance(left, right);
};

export const solveDayOnePartTwo = async (path: string) => {
  const file = await fs.readFile(path, "utf-8");

  console.log("read file:", file);

  const { left, right } = convertTxtToLists(file);

  console.log("got lists: ", left, right);

  return getSimilarity(left, right);
};
