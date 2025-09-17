import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

/*
 * @lc app=leetcode id=2353 lang=typescript
 *
 * [2353] Design a Food Rating System
 */

// @lc code=start
const { max } = Math;
class FoodRatings {
  // {name, rating, cuisine}
  private mpq1 = new Map<
    number,
    Record<"food" | "rating" | "cuisine", number | string>
  >();
  // cuisine - foods
  private mpq2 = new Map<
    string,
    Record<"food" | "rating" | "cuisine", number | string>[]
  >();
  private mpc = new Map<string, [number, string]>();

  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    const { mpq1, mpq2, mpc } = this;
    foods.forEach((food, idx) => {
      const pos = FoodRatings.genPos(food);
      const rating = ratings[idx]!;
      const cuisine = cuisines[idx]!;
      const obj = {
        food,
        rating,
        cuisine,
      };
      const [m, f] = mpc.get(cuisine) ?? [0, ""];
      mpq1.set(pos, obj);
      mpq2.set(cuisine, [...(mpq2.get(cuisine) ?? []), obj]);

      if (rating > m || (rating === m && food < f)) {
        mpc.set(cuisine, [rating, food]);
      }
    });
  }

  changeRating(food: string, newRating: number): void {
    const { mpq2, mpc, mpq1 } = this;
    const pos = FoodRatings.genPos(food);
    const obj = mpq1.get(pos)!;
    const { rating, cuisine = "" } = obj;
    const [m, f] = mpc.get(cuisine as string) ?? [0, ""];
    obj.rating = newRating;

    if (f === food) {
      mpc.set(cuisine as string, [max(rating as number, newRating), food]);
    }
    let nm = 0;
    let nf = "";
    mpq2.get(cuisine as string)?.forEach((o) => {
      const pr = o.rating as number;
      const pf = o.food as string;
      if (pr > nm || (pr === nm && pf < nf)) {
        nm = pr;
        nf = pf;
      }
    });
    mpc.set(cuisine as string, [nm, nf]);
  }

  highestRated(cuisine: string): string {
    return this.mpc.get(cuisine)?.[1] ?? "";
  }

  private static genPos(text: string): number {
    const cp = Buffer.from(text);
    let t = 0;

    for (let i = text.length - 1, n = 1; i >= 0; i--, n *= 10) {
      t += cp[i]! * n;
    }
    return t;
  }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
// @lc code=end
export default FoodRatings;
