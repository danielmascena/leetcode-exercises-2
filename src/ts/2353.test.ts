import { describe, beforeEach, test, expect, beforeAll } from "bun:test";

import FoodRatings from "./2353.design-a-food-rating-system";

const actions = [
  [
    "FoodRatings",
    "highestRated",
    "highestRated",
    "changeRating",
    "highestRated",
    "changeRating",
    "highestRated",
  ],
  [
    "FoodRatings",
    "changeRating",
    "highestRated",
    "changeRating",
    "changeRating",
    "changeRating",
    "highestRated",
    "highestRated",
  ],
];
const mocks = [
  [
    [
      ["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"],
      ["korean", "japanese", "japanese", "greek", "japanese", "korean"],
      [9, 12, 8, 15, 14, 7],
    ],
    ["korean"],
    ["japanese"],
    ["sushi", 16],
    ["japanese"],
    ["ramen", 16],
    ["japanese"],
  ],
  [
    [
      ["emgqdbo", "jmvfxjohq", "qnvseohnoe", "yhptazyko", "ocqmvmwjq"],
      ["snaxol", "snaxol", "snaxol", "fajbervsj", "fajbervsj"],
      [2, 6, 18, 6, 5],
    ],
    ["qnvseohnoe", 11],
    ["fajbervsj"],
    ["emgqdbo", 3],
    ["jmvfxjohq", 9],
    ["emgqdbo", 14],
    ["fajbervsj"],
    ["snaxol"],
  ],
];

const answers = [
  [null, "kimchi", "ramen", null, "sushi", null, "ramen"],
  [null, null, "yhptazyko", null, null, null, "yhptazyko", "emgqdbo"],
];

const methodMap = {
  highestRated: (...a: Parameters<FoodRatings["highestRated"]>) =>
    obj.highestRated(...a),
  changeRating: (...a: Parameters<FoodRatings["changeRating"]>) =>
    obj.changeRating(...a),
} as const;

let mock: unknown[],
  action: string[],
  obj!: FoodRatings,
  answer: (string | null)[],
  i = 0;

describe("", () => {
  beforeEach(() => {
    action = actions[i]!;
    mock = mocks[i]!;
    answer = answers[i]!;
    i++;
  });

  test("test 1", () => {
    action.forEach((act, idx) => {
      const params = mock[idx];
      const result = answer[idx];
      if (act === "FoodRatings") {
        obj = new FoodRatings(
          ...(params as ConstructorParameters<typeof FoodRatings>)
        );
      } else if (act === "highestRated") {
        expect(
          methodMap.highestRated(
            ...(params as Parameters<FoodRatings["highestRated"]>)
          )
        ).toBe(result as string);
      } else if (act === "changeRating") {
        expect(
          methodMap.changeRating(
            ...(params as Parameters<FoodRatings["changeRating"]>)
          )
        ).toBeUndefined();
      }
    });
  });
  test("test 2", () => {
    action.forEach((act, idx) => {
      if (act === "FoodRatings") {
        obj = new FoodRatings(
          ...(mock[idx] as ConstructorParameters<typeof FoodRatings>)
        );
      } else if (act === "highestRated") {
        methodMap.highestRated(
          ...(mock[idx] as Parameters<FoodRatings["highestRated"]>)
        );
      } else if (act === "changeRating") {
        methodMap.changeRating(
          ...(mock[idx] as Parameters<FoodRatings["changeRating"]>)
        );
      }
    });
  });
});
