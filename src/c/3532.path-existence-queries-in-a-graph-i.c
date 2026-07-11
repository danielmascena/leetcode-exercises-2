#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

/*
 * @lc app=leetcode id=3532 lang=c
 *
 * [3532] Path Existence Queries in a Graph I
 */

// @lc code=start
#define max(a, b) (((a) > (b)) ? (a) : (b))
#define min(a, b) (((a) < (b)) ? (a) : (b))
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
bool *pathExistenceQueries(int n, int *nums, int numsSize, int maxDiff, int **queries, int queriesSize, int *queriesColSize, int *returnSize)
{
    int *diffs = calloc(numsSize, sizeof(int));
    int *nodes = malloc(numsSize * sizeof(int));
    bool *ans = malloc(queriesSize * sizeof(bool));
    diffs[numsSize - 1] = 0;

    for (int i = 0; i < numsSize - 1; i++)
    {
        diffs[i] = nums[i + 1] - nums[i];
    }
    for (int i = 0; i < numsSize; i++)
    {
        int j = i;

        while (j < numsSize && diffs[j] <= maxDiff)
        {
            j++;
        }
        for (int z = min(j, numsSize - 1); z >= i; z--)
        {
            nodes[z] = j;
        }
        i = j;
    }
    for (int i = 0; i < queriesSize; i++)
    {
        const int u = queries[i][0];
        const int v = queries[i][1];
        ans[i] = nodes[min(u, v)] >= max(u, v);
    }
    free(diffs);
    free(nodes);
    *returnSize = queriesSize;
    return ans;
}
// @lc code=end

int main(void)
{
    int nums1[] = {1, 3};
    int maxDiff1 = 1;
    int retSize1 = 0;
    int *queries1[] = {(int[]){0, 0}, (int[]){0, 1}};
    bool *ans1 = pathExistenceQueries(2, nums1, 2, 1, queries1, 2, (int[]){2, 2}, &retSize1);

    printf("Case 1: answer ");

    for (int i = 0; i < retSize1; i++)
    {
        printf("%d ", ans1[i]);
    }
    puts(".");
    return 0;
}

/*
Accepted
550/550 cases passed (4 ms)
Your runtime beats 70.24 % of c submissions
Your memory usage beats 25.37 % of c submissions (66.1 MB)
*/