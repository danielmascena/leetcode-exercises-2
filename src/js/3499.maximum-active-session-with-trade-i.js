/**
 * @param {string} s
 * @return {number}
 */
function maxActiveSectionsAfterTrade(s) {
  const len = s.length;
  const { max } = Math;
  const pfx = new Array(len);
  const sfx = new Array(len);
  let ans = 0;
  let z = 0;

  for (let i = 0, t = 0; i < len; i++) {
    pfx[i] = t += +(s[i] === '1');
  }
  for (let i = len - 1, t = 0; i >= 0; i--) {
    sfx[i] = t += +(s[i] === '1');
  }
  ans = sfx[0];

  for (let i = 0; i < len; i++) {
    const c = s[i];

    z += +(c === '0'); 

    if (z && c === '1') {
      let j = i;

      while (s[j] === '1' && j < len) {
        j++;
      }
      let rr = j;

      while (s[rr] === '0' && rr < len) {
        rr++;
      }
      if (rr > j) {
        const v = ((rr - i) + z) + (pfx[i - 1] ?? 0) + (sfx[rr] ?? 0);
        ans = max(ans, v);
      }
      z = rr - j;
      i = rr - 1;
    }
  }
  return ans;
}

console.log(maxActiveSectionsAfterTrade("01") === 1);
console.log(maxActiveSectionsAfterTrade("0100") == 4);
console.log(maxActiveSectionsAfterTrade("1000100") === 7);
console.log(maxActiveSectionsAfterTrade("01010") === 4);
console.log(maxActiveSectionsAfterTrade("1000111010") === 9);
console.log(maxActiveSectionsAfterTrade("01101001") === 7);

/*
Accepted
996 / 996 testcases passed

Solution
Runtime
183 ms
Beats 33.13%

Memory
83.82 MB
Beats 23.84%
*/