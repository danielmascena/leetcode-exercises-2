#include <stdio.h>
#include <stdlib.h>

/*
 * @lc app=leetcode id=2149 lang=c
 *
 * [2149] Rearrange Array Elements by Sign
 */

// @lc code=start
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *rearrangeArray(int *nums, int numsSize, int *returnSize)
{
    int *ans = malloc(numsSize * sizeof(nums[0]));

    for (int i = 0, ng = 1, ps = 0; i < numsSize; i++)
    {
        const int num = nums[i];
        if (num < 0)
        {
            ans[ng] = num;
            ng += 2;
        }
        else
        {
            ans[ps] = num;
            ps += 2;
        }
    }
    *returnSize = numsSize;
    return ans;
}
// @lc code=end

int main(void)
{
    int nums1[] = {3, 1, -2, -5, 2, -4};
    int returnSize1;
    int *ans1 = rearrangeArray(nums1, sizeof(nums1) / sizeof(nums1[0]), &returnSize1);
    puts("Case 1: answer ");

    for (int i = 0; i < returnSize1; i++)
    {
        printf("%d ", ans1[i]);
    }
    puts(".");

    int nums2[] = {-1, 1};
    int returnSize2;
    int *ans2 = rearrangeArray(nums2, sizeof(nums2) / sizeof(nums2[0]), &returnSize2);
    puts("Case 2: answer ");

    for (int i = 0; i < returnSize2; i++)
    {
        printf("%d ", ans2[i]);
    }
    puts(".");
    return 0;
}

/*
Accepted
133/133 cases passed (2 ms)
Your runtime beats 82.92 % of c submissions
Your memory usage beats 73.6 % of c submissions (104.6 MB)
*/