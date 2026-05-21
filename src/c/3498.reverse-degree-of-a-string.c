#include <stdio.h>

/*
 * @lc app=leetcode id=3498 lang=c
 *
 * [3498] Reverse Degree of a String
 */

// @lc code=start
int reverseDegree(char *s)
{
    int ans = 0;

    for (int i = 0; s[i] != '\0'; i++)
    {
        ans += ((26 - (s[i] - 97)) * (i + 1));
    }
    return ans;
}
// @lc code=end

int main(void)
{
    printf("answer 1: %d", reverseDegree("abc") == 148);
    printf("answer 2: %d", reverseDegree("zaza") == 160);

    return 0;
}

/*
    Accepted
    933/933 cases passed (0 ms)
    Your runtime beats 100 % of c submissions
    Your memory usage beats 64.65 % of c submissions (9.2 MB)
*/