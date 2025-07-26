import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1948 lang=typescript
 *
 * [1948] Delete Duplicate Folders in System
 */

// @lc code=start
function deleteDuplicateFolder(paths: string[][]): string[][] {
  const remove = new Set<string>();
  const safe = new Set<string>();
  const grp = new Map<string, string[][]>();

  paths.forEach((path, idx) => {
    if (path.length > 1) {
      const last = path.at(-1)!;
      const arr = grp.get(last) ?? [];
      arr.push([...path].reverse());
      grp.set(last, arr);
    }
  });
  grp.forEach((arr) => {
    if (arr.length > 1) {
      arr.sort((a, b) => a.length - b.length);
      const limit = arr?.[0]?.length ?? 0;
      arr.forEach((a) => {
        var ss = "";
        a.forEach((c, i) => {
          if (i < limit) {
            ss = c + ss;
          } else {
            safe.add(c);
          }
        });
        remove.add(ss);
      });
    }
  });
  safe.forEach((c) => grp.delete(c));
  console.log(remove, "safe >>", safe, "@@@ ", grp);
}
// @lc code=end
deleteDuplicateFolder([
  ["a"],
  ["c"],
  ["d"],
  ["a", "b"],
  ["c", "b"],
  ["d", "a"],
]);
deleteDuplicateFolder([
  ["a"],
  ["c"],
  ["a", "b"],
  ["c", "b"],
  ["a", "b", "x"],
  ["a", "b", "x", "y"],
  ["w"],
  ["w", "y"],
]);
deleteDuplicateFolder([["a", "b"], ["c", "d"], ["c"], ["a"]]);
//expect(deleteDuplicateFolder([["a"],["c"],["d"],["a","b"],["c","b"],["d","a"]])?.map(v => v.join())).toContainAllValues(["d","d,a"]);
