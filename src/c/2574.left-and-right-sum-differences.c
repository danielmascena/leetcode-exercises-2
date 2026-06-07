#include <stdio.h>
#include <stdlib.h>

/*
 * @lc app=leetcode id=2574 lang=c
 *
 * [2574] Left and Right Sum Differences
 */

// @lc code=start
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *leftRightDifference(int *nums, int numsSize, int *returnSize)
{
    int *ans = malloc(numsSize * sizeof(int));
    int *acc = malloc((numsSize + 1) * sizeof(int));
    int total = 0;
    acc[numsSize] = 0;

    for (int i = 0; i < numsSize; i++)
    {
        acc[i] = total;
        total += nums[i];
    }
    for (int i = numsSize - 1, t = 0; i >= 0; i--)
    {
        ans[i] = abs(acc[i] - t);
        t += nums[i];
    }
    *returnSize = numsSize;
    return ans;
}
// @lc code=end

int main(void)
{
    int rs1 = 0;
    int *ans1 = leftRightDifference((int[]){10, 4, 8, 3}, 4, &rs1);
    printf("Case 1: answer [");
    for (int i = 0; i < rs1; i++)
    {
        printf("%d ", ans1[i]);
    }
    puts("] (expected [15,1,11,22])");
    return 0;
}

/*
    Accepted
    53/53 cases passed (3 ms)
    Your runtime beats 24.24 % of c submissions
    Your memory usage beats 16.97 % of c submissions (14.6 MB)
*/