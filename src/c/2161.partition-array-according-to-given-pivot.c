#include <stdio.h>
#include <stdlib.h>

/*
 * @lc app=leetcode id=2161 lang=c
 *
 * [2161] Partition Array According to Given Pivot
 */

// @lc code=start
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *pivotArray(int *nums, int numsSize, int pivot, int *returnSize)
{
    int *ans = malloc(numsSize * sizeof(int));
    int lss = 0;
    int eql = 0;
    *returnSize = numsSize;

    for (int i = 0; i < numsSize; i++)
    {
        const int num = nums[i];

        if (num < pivot)
        {
            lss++;
        }
        else if (num == pivot)
        {
            eql++;
        }
    }
    for (int i = 0, z = 0, x = lss, w = lss + eql; i < numsSize; i++)
    {
        const int num = nums[i];

        if (num < pivot)
        {
            ans[z++] = num;
        }
        else if (num > pivot)
        {
            ans[w++] = num;
        }
        else
        {
            ans[x++] = num;
        }
    }
    return ans;
}
// @lc code=end

int main(void)
{
    int ans1Sz = 0;
    int *ans1 = pivotArray((int[]){9, 12, 5, 10, 14, 3, 10}, 7, 10, &ans1Sz);
    printf("[");

    for (int i = 0; i < ans1Sz; i++)
    {
        printf("%d%c", ans1[i], i + 1 < ans1Sz ? ',' : ']');
    }
    puts(" it should be [9,5,3,10,10,12,14]");
    return 0;
}

/*
Accepted
44/44 cases passed (3 ms)
Your runtime beats 76 % of c submissions
Your memory usage beats 45 % of c submissions (99.1 MB)
*/