import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1233 lang=typescript
 *
 * [1233] Remove Sub-Folders from the Filesystem
 */

// @lc code=start
function removeSubfolders(folder: string[]): string[] {
    const seen = new Set<string>();
    const ans: string[] = [];
    folder.sort((w1, w2) => w1.length - w2.length);

    main:
    for (const dir of folder) {
        const path = dir.split('/');

        while (path.length) {
            if (seen.has(path.join('/'))) {
                continue main;
            }
            path.pop();
        }
        seen.add(dir);
        ans.push(dir);
    }
    return ans;
};
// @lc code=end

expect(removeSubfolders(["/a","/a/b","/c/d","/c/d/e","/c/f"])).toContainAllValues(["/a","/c/d","/c/f"]);
expect(removeSubfolders(["/a","/a/b/c","/a/b/d"])).toContainAllValues(["/a"]);
expect(removeSubfolders(["/a/b/c","/a/b/ca","/a/b/d"])).toContainAllValues(["/a/b/c","/a/b/ca","/a/b/d"]);
expect(removeSubfolders(["/ah/al/am","/ah/al"])).toContainAllValues(["/ah/al"]);

/**
 * Accepted
 * 35/35 cases passed (161 ms)
 * Your runtime beats 26.67 % of typescript submissions
 * Your memory usage beats 66.67 % of typescript submissions (73.9 MB)
 */