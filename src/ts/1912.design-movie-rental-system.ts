import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1912 lang=typescript
 *
 * [1912] Design Movie Rental System
 */

// @lc code=start

const sfn = (
  [shopA, movieA, priceA]: number[],
  [shopB, movieB, priceB]: number[]
) =>
  priceA === priceB
    ? shopA === shopB
      ? movieA - movieB
      : shopA - shopB
    : priceA - priceB;

class MovieRentingSystem {
  private rented = new Set<number[]>();
  private movies = new Map<number, number[][]>();
  private shMov = new Map<string, number[]>();

  constructor(private n: number, private readonly entries: number[][]) {
    const { shMov, movies } = this;
    entries.sort(sfn).forEach((entry) => {
      const [shop = 0, movie = 0, price = 0] = entry;
      shMov.set(`${shop}-${movie}`, entry);
      movies.set(movie, [...(movies.get(movie) ?? []), entry]);
    });
  }

  search(movie: number): number[] {
    const { rented, movies } = this;
    const mps = movies.get(movie) ?? [];
    const ans = new Array<number>();
    var count = 0;

    for (const e of mps) {
      if (!rented.has(e)) {
        ans[count++] = e[0]!;
      }
      if (count === 5) {
        return ans;
      }
    }
    return ans;
  }

  rent(shop: number, movie: number): void {
    const { shMov, rented } = this;
    const k = `${shop}-${movie}`;
    const entry = shMov.get(k)!;
    rented.add(entry);
  }

  drop(shop: number, movie: number): void {
    const { shMov, rented } = this;
    const k = `${shop}-${movie}`;
    const entry = shMov.get(k)!;
    rented.delete(entry);
  }

  report(): number[][] {
    const { entries, rented } = this;
    const ans = new Array<number[]>();
    var count = 0;

    for (const entry of entries) {
      if (rented.has(entry)) {
        ans[count++] = [entry[0]!, entry[1]!];
      }
      if (count === 5) {
        return ans;
      }
    }
    return ans;
  }
}

/**
 * Your MovieRentingSystem object will be instantiated and called as such:
 * var obj = new MovieRentingSystem(n, entries)
 * var param_1 = obj.search(movie)
 * obj.rent(shop,movie)
 * obj.drop(shop,movie)
 * var param_4 = obj.report()
 */
// @lc code=end

const obj = new MovieRentingSystem(3, [
  [0, 1, 5],
  [0, 2, 6],
  [0, 3, 7],
  [1, 1, 4],
  [1, 2, 7],
  [2, 1, 5],
]);
expect(obj.search(1)).toEqual([1, 0, 2]);
obj.rent(0, 1);
obj.rent(1, 2);
expect(obj.report()).toEqual([
  [0, 1],
  [1, 2],
]);
obj.drop(1, 2);
expect(obj.search(2)).toEqual([0, 1]);

// Time Limit Exceeded
// 37/42 cases passed (N/A)
