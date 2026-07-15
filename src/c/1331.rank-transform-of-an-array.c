#include <stdio.h>
#include <stdlib.h>
#include <string.h>
/*
 * @lc app=leetcode id=1331 lang=c
 *
 * [1331] Rank Transform of an Array
 */

// @lc code=start
#define max(a, b) (((a) > (b)) ? (a) : (b))

int compare(const void *a, const void *b)
{
    return (*(int *)a - *(int *)b);
}
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *arrayRankTransform(int *arr, int arrSize, int *returnSize)
{
    if (!arrSize)
    {
        *returnSize = 0;
        return arr;
    }
    int rank = 1;
    int *ans = malloc(arrSize * sizeof(int));
    int *carr = malloc(arrSize * sizeof(int));
    memcpy(carr, arr, arrSize * sizeof(int));
    qsort(carr, arrSize, sizeof(int), compare);
    const int size = abs(carr[arrSize - 1]) + 1;
    int *posNums = calloc(size, sizeof(int));
    int *negNums = calloc(abs(carr[0]) + 1, sizeof(int));
    int prv = carr[0];

    for (int i = 0; i < arrSize; i++)
    {
        const int num = carr[i];

        if (num != prv)
        {
            prv = num;
            rank++;
        }
        if (num < 0)
        {
            negNums[abs(num)] = rank;
        }
        else
        {
            posNums[num] = rank;
        }
    }
    for (int i = 0; i < arrSize; i++)
    {
        const int num = arr[i];
        if (num < 0)
            ans[i] = negNums[abs(num)];
        else
            ans[i] = posNums[num];
    }
    *returnSize = arrSize;
    free(posNums);
    free(carr);
    return ans;
}
// @lc code=end

int main(void)
{
    int arr1[] = {40, 10, 20, 30};
    int size1 = sizeof(arr1) / sizeof(arr1[0]);
    int arr1Size;
    int *ans1 = arrayRankTransform(arr1, size1, &arr1Size);
    printf("\nCase 1: answer ");

    for (int i = 0; i < arr1Size; i++)
    {
        printf("%d ", ans1[i]);
    }

    int arr2[] = {100, 100, 100};
    int size2 = sizeof(arr2) / sizeof(arr2[0]);
    int arr2Size;
    int *ans2 = arrayRankTransform(arr2, size2, &arr2Size);
    printf("\nCase 2: answer ");

    for (int i = 0; i < arr2Size; i++)
    {
        printf("%d ", ans2[i]);
    }

    int arr3[] = {-43};
    int size3 = sizeof(arr3) / sizeof(arr3[0]);
    int arr3Size;
    int *ans3 = arrayRankTransform(arr3, size3, &arr3Size);
    printf("\nCase 3: answer ");

    for (int i = 0; i < arr3Size; i++)
    {
        printf("%d ", ans3[i]);
    }

    return 0;
}
/*
Accepted
43/43 cases passed (24 ms)
Your runtime beats 62.87 % of c submissions
Your memory usage beats 7.82 % of c submissions (36.7 MB)
*/