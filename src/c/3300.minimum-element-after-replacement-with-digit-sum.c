#include <stdio.h>
#include <limits.h>

/*
 * @lc app=leetcode id=3300 lang=c
 *
 * [3300] Minimum Element After Replacement With Digit Sum
 */

// @lc code=start
#define min(a, b) (((a) < (b)) ? (a) : (b))

int minElement(int *nums, int numsSize)
{
    int ans = INT_MAX;

    for (int i = 0; i < numsSize; i++)
    {
        int num = nums[i];
        int ttl = 0;

        while (num)
        {
            ttl += num % 10;
            num /= 10;
        }
        ans = min(ans, ttl);
    }
    return ans;
}
// @lc code=end

int main(void)
{
    printf("Case 1: answer %d expected %d\n", minElement((int[]){10, 12, 13, 14}, 4), 1);
    printf("Case 2: answer %d expected %d\n", minElement((int[]){1, 2, 3, 4}, 4), 1);
    printf("Case 3: answer %d expected %d\n", minElement((int[]){999, 19, 199}, 3), 10);
    return 0;
}

/*
Accepted
835/835 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 50 % of c submissions (9.7 MB)
*/