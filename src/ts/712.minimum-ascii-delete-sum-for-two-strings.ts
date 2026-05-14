import { expect } from "bun:test";
/*
 * @lc app=leetcode id=712 lang=typescript
 *
 * [712] Minimum ASCII Delete Sum for Two Strings
 */

// @lc code=start
function minimumDeleteSum(s1: string, s2: string): number {
  const irsn = new Set(s1).intersection(new Set(s2));
  const a1 = Array.from(s1);
  const a2 = Array.from(s2);
  let ans = 0;
  a1.forEach((c, i) => {
    if (!irsn.has(c)) {
      a1[i] = "";
      ans += c.codePointAt(0);
    }
  });
  a2.forEach((c, i) => {
    if (!irsn.has(c)) {
      a2[i] = "";
      ans += c.codePointAt(0);
    }
  });
  while (a1.join("") !== a2.join("")) {}
  console.log(a1, a2);
}
// @lc code=end

expect(minimumDeleteSum("sea", "eat")).toBe(231);
expect(minimumDeleteSum("delete", "leet")).toBe(403);
expect(minimumDeleteSum("ccaccjp", "fwosarcwge")).toBe(1399);
expect(minimumDeleteSum("djoqzmzxe", "onydroiizrlggfh")).toBe(1971);
expect(
  minimumDeleteSum(
    "igijekdtywibepwonjbwykkqmrgmtybwhwjiqudxmnniskqjfbkpcxukrablqmwjndlhblxflgehddrvwfacarwkcpmcfqnajqfxyqwiugztocqzuikamtvmbjrypfqvzqiwooewpzcpwhdejmuahqtukistxgfafrymoaodtluaexucnndlnpeszdfsvfofdylcicrrevjggasrgdhwdgjwcchyanodmzmuqeupnpnsmdkcfszznklqjhjqaboikughrnxxggbfyjriuvdsusvmhiaszicfa",
    "ikhuivqorirphlzqgcruwirpewbjgrjtugwpnkbrdfufjsmgzzjespzdcdjcoioaqybciofdzbdieegetnogoibbwfielwungehetanktjqjrddkrnsxvdmehaeyrpzxrxkhlepdgpwhgpnaatkzbxbnopecfkxoekcdntjyrmmvppcxcgquhomcsltiqzqzmkloomvfayxhawlyqxnsbyskjtzxiyrsaobbnjpgzmetpqvscyycutdkpjpzfokvi"
  )
).toBe(41731);
