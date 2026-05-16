#include <stdio.h>

/*
 * @lc app=leetcode id=154 lang=c
 *
 * [154] Find Minimum in Rotated Sorted Array II
 */

// @lc code=start
int findMin(int *nums, int numsSize)
{
    int ans = nums[0];

    for (int i = 1; i < numsSize; i++)
    {
        if (nums[i] < ans)
            ans = nums[i];
    }
    return ans;
}
// @lc code=end

int main(void)
{
    int nums1[] = {1, 3, 5};
    int nums2[] = {2, 2, 2, 0, 1};

    int ans1 = findMin(nums1, 3);
    int ans2 = findMin(nums2, 5);

    printf("answer 1: %d, answer 2: %d\n", ans1 == 1, ans2 == 0);
    return 0;
}

/*
Accepted
193/193 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 44.42 % of c submissions (9.1 MB)
*/