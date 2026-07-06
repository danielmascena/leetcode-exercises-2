/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    //[[0,3],[1,4],[2,5]]
    const sz = s.length;
    const { max }=Math;
    const a = [];
    const b = [];
    const c = [];
    let ans = 0;

    for (let i = 0; i < sz; i++) {
        const chr = s[i];

        if (chr == 'a') a.push(i);
        else if (chr == 'b') b.push(i);
        else c.push(i);

        if (a.length && b.length && c.length) {
            ans++;
        }
    }
    for (let i = 0; i<sz; i++) {
        const chr = s[i];
        if (chr == 'a') {
            a.shift();
        } else if (chr == 'b') {
            b.shift();
        } else {
            c.shift();
        }
        if (a.length && b.length && c.length) {
            ans += sz - max(a[0], b[0], c[0]);
        }
    }
    return ans;
};
/*
Solved

Runtime
380 ms
Beats 5.10%

Memory
64.26 MB
Beats 5.10%
*/