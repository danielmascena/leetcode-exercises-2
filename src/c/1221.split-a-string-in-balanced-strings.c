#include <stdio.h>

/*
 * @lc app=leetcode id=1221 lang=c
 *
 * [1221] Split a String in Balanced Strings
 */

// @lc code=start
int balancedStringSplit(char *s)
{
    int counter = 0;

    for (int i = 0, ls = 0, rs = 0; s[i] != '\0'; i++)
    {
        if (s[i] == 'R')
            rs++;
        else
            ls++;

        if (ls == rs)
        {
            counter++;
            ls = rs = 0;
        }
    }
    return counter;
}
// @lc code=end

int main(void)
{
    printf("Case 1: %d\n", balancedStringSplit("RLRRLLRLRL") == 4);
    printf("Case 2: %d\n", balancedStringSplit("RLRRRLLRLL") == 2);
    printf("Case 3: %d\n", balancedStringSplit("LLLLRRRR") == 1);
    return 0;
}

/*
Accepted
40/40 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 1.91 % of c submissions (8.7 MB)
*/