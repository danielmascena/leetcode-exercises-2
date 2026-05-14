#include <stdio.h>

/*
 * @lc app=leetcode id=1674 lang=c
 *
 * [1674] Minimum Moves to Make Array Complementary
 */

// @lc code=start
int minMoves(int *nums, int numsSize, int limit)
{
    int ans = 0;
    return ans;
}

// @lc code=end

int main(void)
{

    int nums1[] = {1, 2, 4, 3};
    int nums2[] = {1, 2, 2, 1};
    int nums3[] = {1, 2, 1, 2};
    int ans1 = minMoves(nums1, 4, 4);
    int ans2 = minMoves(nums2, 4, 2);
    int ans3 = minMoves(nums3, 4, 2);

    printf("%d\n", ans1);
    printf("%d\n", ans2);
    printf("%d\n", ans3);
    return 0;
}