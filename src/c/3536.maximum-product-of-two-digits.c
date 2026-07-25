#include <stdio.h>
#include <stdlib.h>

/*
 * @lc app=leetcode id=3536 lang=c
 *
 * [3536] Maximum Product of Two Digits
 */

// @lc code=start
int maxProduct(int n)
{
    int a = 0;
    int b = 0;

    for (int d = n; d; d /= 10)
    {
        const int v = d % 10;

        if (v > a)
        {
            b = a;
            a = v;
        }
        else if (v > b)
        {
            b = v;
        }
    }
    return a * b;
}
// @lc code=end

int main(void)
{
    printf("Case 1: answer %d\n", maxProduct(31) == 3);
    printf("Case 2: answer %d\n", maxProduct(22) == 4);
    printf("Case 3: answer %d\n", maxProduct(124) == 8);
    return 0;
}
/*
Accepted
1088/1088 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 95.83 % of c submissions (8.9 MB)
*/