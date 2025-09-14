import { expect } from "bun:test";
/*
 * @lc app=leetcode id=966 lang=typescript
 *
 * [966] Vowel Spellchecker
 */

// @lc code=start
function spellchecker(wordlist: string[], queries: string[]): string[] {
  // wordlist = wordlist.toSorted((a, b) => a.localeCompare(b));
  const rv = (word: string) => {
    let copy = "";

    for (const c of word) {
      switch (c) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
          copy += "#";
          break;
        default:
          copy += c;
      }
    }
    return copy;
  };
  const words = new Set(wordlist);
  const capitalMap = new Map<string, string>();
  wordlist.forEach((word) => {
    const lcWord = word.toLowerCase();
    if (!capitalMap.has(lcWord)) {
      capitalMap.set(lcWord, word);
    }
  });
  const vowelMap = new Map<string, string>();
  wordlist.forEach((word) => {
    const lrWord = rv(word.toLowerCase());

    if (!vowelMap.has(lrWord)) {
      vowelMap.set(lrWord, word);
    }
  });
  const ans = queries.map((word) => {
    const lcWord = word.toLowerCase();
    return words.has(word)
      ? word
      : capitalMap.get(lcWord) ?? vowelMap.get(rv(lcWord)) ?? "";
  });
  return ans;
}
// @lc code=end

expect(
  spellchecker(
    ["KiTe", "kite", "hare", "Hare"],
    [
      "kite",
      "Kite",
      "KiTe",
      "Hare",
      "HARE",
      "Hear",
      "hear",
      "keti",
      "keet",
      "keto",
    ]
  )
).toEqual(["kite", "KiTe", "KiTe", "Hare", "hare", "", "", "KiTe", "", "KiTe"]);
expect(spellchecker(["yellow"], ["YellOw"])).toEqual(["yellow"]);
expect(spellchecker(["zeo", "Zuo"], ["zuo"])).toEqual(["Zuo"]);

/**
 * Accepted
 * 55/55 cases passed (23 ms)
 * Your runtime beats 90 % of typescript submissions
 * Your memory usage beats 100 % of typescript submissions (67.5 MB)
 */
