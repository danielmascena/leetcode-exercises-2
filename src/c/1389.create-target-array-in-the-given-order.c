#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*
 * @lc app=leetcode id=1389 lang=c
 *
 * [1389] Create Target Array in the Given Order
 */

// @lc code=start
#define max(a, b) (((a) > (b)) ? (a) : (b))

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *createTargetArray(int *nums, int numsSize, int *index, int indexSize, int *returnSize)
{
    int *ans = malloc(numsSize * sizeof(int));
    *returnSize = numsSize;

    for (int i = 0, j = 0; i < numsSize; i++, j++)
    {
        const int num = nums[i];
        const int idx = index[i];

        if (idx <= j)
        {
            memcpy(&ans[idx + 1], &ans[idx], (j - idx) * sizeof(int));
            ans[idx] = num;
        }
        else
        {
            ans[idx] = num;
            j = max(idx, j);
        }
    }
    return ans;
}
// @lc code=end

void printArray(int *arr, size_t size, char *txt)
{
    printf("%s", txt);
    for (int i = 0; i < size; i++)
    {
        printf("%d, ", arr[i]);
    }
    puts("");
}

int main(void)
{
    int ans1Sz = 0;
    int *ans1 = createTargetArray((int[]){0, 1, 2, 3, 4}, 5, (int[]){0, 1, 2, 2, 1}, 5, &ans1Sz);
    printArray(ans1, ans1Sz, "Case 1: answer ");
    printArray((int[]){0, 4, 1, 3, 2}, 5, " expected ");
    free(ans1);

    int ans2Sz = 0;
    int *ans2 = createTargetArray((int[]){1, 2, 3, 4, 0}, 5, (int[]){0, 1, 2, 3, 0}, 5, &ans2Sz);
    printArray(ans2, ans2Sz, "Case 2: answer ");
    printArray((int[]){0, 1, 2, 3, 4}, 5, " expected ");
    free(ans2);

    return 0;
}
/*
Accepted
45/45 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 49.06 % of c submissions (9.9 MB)
*/