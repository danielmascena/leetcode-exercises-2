#include <stdio.h>
/*
 * @lc app=leetcode id=3014 lang=c
 *
 * [3014] Minimum Number of Pushes to Type Word I
 */

// @lc code=start
int minimumPushes(char *word)
{
    int ans = 0;
    int wgt = 0;

    for (int i = 0; word[i]; i++)
    {
        if (i % 8 == 0)
        {
            wgt++;
        }
        ans += wgt;
    }
    return ans;
}
// @lc code=end

int main(void)
{
    printf("Case 1: answer %d\n", minimumPushes("abcde") == 5);
    printf("Case 2: answer %d\n", minimumPushes("xycdefghij") == 12);
    return 0;
}
/*
Accepted
500/500 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 11.76 % of c submissions (8.9 MB)
*/