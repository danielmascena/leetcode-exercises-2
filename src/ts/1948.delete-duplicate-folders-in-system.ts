import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1948 lang=typescript
 *
 * [1948] Delete Duplicate Folders in System
 */

// @lc code=start
function deleteDuplicateFolder(paths: string[][]): string[][] {}
// @lc code=end

const fm = (a: string[]) => a.join("");

//expect(
//  deleteDuplicateFolder([
//    ["a"],
//    ["c"],
//    ["d"],
//    ["a", "b"],
//    ["c", "b"],
//    ["d", "a"],
//  ]).flatMap(fm)
//).toContainAllValues([["d"], ["d", "a"]].flatMap(fm));

expect(
  deleteDuplicateFolder([
    ["a"],
    ["c"],
    ["a", "b"],
    ["c", "b"],
    ["a", "b", "x"],
    ["a", "b", "x", "y"],
    ["w"],
    ["w", "y"],
  ]).flatMap(fm)
).toContainAllValues([["c"], ["c", "b"], ["a"], ["a", "b"]].flatMap(fm));
