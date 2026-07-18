#include <stdio.h>
#include <limits.h>
/*
 * @lc app=leetcode id=1979 lang=c
 *
 * [1979] Find Greatest Common Divisor of Array
 */

// @lc code=start
#define max(a, b) (((a) > (b)) ? (a) : (b))
#define min(a, b) (((a) < (b)) ? (a) : (b))

int findGCD(int *nums, int numsSize)
{
    int ans;
    int mxv = 0;
    int mnv = INT_MAX;

    for (int i = 0; i < numsSize; i++)
    {
        int num = nums[i];
        mxv = max(num, mxv);
        mnv = min(num, mnv);
    }
    ans = mnv;

    for (; mnv % ans || mxv % ans; ans--)
        ;
    return ans;
}
// @lc code=end

int main(void)
{
    int nums1[] = {2, 5, 6, 9, 10};
    int numsSize1 = sizeof(nums1) / sizeof(nums1[0]);
    int ans1 = findGCD(nums1, numsSize1);
    printf("Case 1: answer %d", ans1 == 2);
    return 0;
}
/*
Accepted
215/215 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 23.26 % of c submissions (9.2 MB)
*/