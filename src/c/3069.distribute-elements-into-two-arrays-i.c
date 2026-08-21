#include <stdio.h>
#include <stdlib.h>

/*
 * @lc app=leetcode id=3069 lang=c
 *
 * [3069] Distribute Elements Into Two Arrays I
 */

// @lc code=start
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *resultArray(int *nums, int numsSize, int *returnSize)
{
    int *ans = calloc(numsSize, sizeof(int));
    *returnSize = numsSize;
    int l1 = nums[0];
    int l2 = nums[1];
    int t1 = 1;

    for (int i = 2; i < numsSize; i += 1)
    {
        if (l1 > l2)
        {
            l1 = nums[i];
            t1 += 1;
        }
        else
        {
            l2 = nums[i];
        }
    }
    l1 = nums[0];
    l2 = nums[1];
    ans[0] = l1;
    ans[t1] = l2;
    printf("%d %d %d\n", t1, l1, l2);

    for (int i = 2, z = 1, j = t1 + 1; i < numsSize; i++)
    {
        int num = nums[i];
        printf("%d\n", num);

        if (l1 > l2)
        {
            ans[z] = num;
            l1 = num;
            z += 1;
        }
        else
        {
            ans[j] = num;
            l2 = num;
            j += 1;
        }
    }
    return ans;
}
// @lc code=end

int main(void)
{
    int exp1[] = {2, 1, 3};
    int sz1 = sizeof(exp1) / sizeof(exp1[0]);
    int rsz1;
    int *ans1 = resultArray(exp1, sz1, &rsz1);
    puts("Example 1: answer");

    for (int i = 0; i < rsz1; i++)
    {
        printf("%d, ", ans1[i]);
    }
    puts(" expected [2,3,1]");

    int exp2[] = {5, 4, 3, 8};
    int sz2 = sizeof(exp2) / sizeof(exp2[0]);
    int rsz2;
    int *ans2 = resultArray(exp2, sz2, &rsz2);
    puts("Example 2: answer");

    for (int i = 0; i < rsz2; i++)
    {
        printf("%d, ", ans2[i]);
    }
    puts(" expected [5,3,4,8]");
    return 0;
}

/*
Accepted
622/622 cases passed (12 ms) [WARN] Failed to get runtime percentile.
*/