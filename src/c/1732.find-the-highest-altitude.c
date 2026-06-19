#include <stdio.h>
/*
 * @lc app=leetcode id=1732 lang=c
 *
 * [1732] Find the Highest Altitude
 */

// @lc code=start
#define max(a, b) (((a) > (b)) ? (a) : (b))

int largestAltitude(int *gain, int gainSize)
{
    int ans = 0;
    int acc = 0;

    for (int i = 0; i < gainSize; i++)
    {
        acc += gain[i];
        ans = max(ans, acc);
    }
    return ans;
}
// @lc code=end

int main(void)
{
    printf("Case 1: answer %d\n", largestAltitude((int[]){-5, 1, 5, 0, -7}, 5) == 1);
    printf("Case 2: answer %d\n", largestAltitude((int[]){-4, -3, -2, -1, 4, 3, 2}, 7) == 0);
    return 0;
}

/*
Accepted
80/80 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 65.75 % of c submissions (8.9 MB)
*/