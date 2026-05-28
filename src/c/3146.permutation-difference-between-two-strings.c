#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*
 * @lc app=leetcode id=3146 lang=c
 *
 * [3146] Permutation Difference between Two Strings
 */

// @lc code=start
int findPermutationDifference(char *s, char *t)
{
    int lts[26] = {};
    int ans = 0;
    memset(lts, -1, 26 * sizeof(int));

    for (int i = 0; s[i] != '\0'; i++)
    {
        const int c1 = s[i];
        const int c2 = t[i];

        if (c1 == c2)
            continue;

        if (lts[c1 - 97] >= 0)
        {
            ans += abs(lts[c1 - 97] - i);
        }
        else
        {
            lts[c1 - 97] = i;
        }
        if (lts[c2 - 97] >= 0)
        {
            ans += abs(lts[c2 - 97] - i);
        }
        else
        {
            lts[c2 - 97] = i;
        }
    }
    return ans;
}
// @lc code=end

int main(void)
{
    printf("Case 1: %d %d\n", findPermutationDifference("abc", "bac"), 2);
    printf("Case 2: %d %d\n", findPermutationDifference("abcde", "edbac"), 12);
    printf("Case 15: %d %d\n", findPermutationDifference("rwohu", "rwuoh"), 4);
    return 0;
}

/*
Accepted
823/823 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 28.57 % of c submissions (9.2 MB)
*/