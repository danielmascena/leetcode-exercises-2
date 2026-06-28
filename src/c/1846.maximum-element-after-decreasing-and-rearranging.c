#include <stdio.h>
#include <stdlib.h>
/*
 * @lc app=leetcode id=1846 lang=c
 *
 * [1846] Maximum Element After Decreasing and Rearranging
 */

// @lc code=start
#define max(a, b) (((a) > (b)) ? (a) : (b))

int sf(const void *a, const void *b)
{
    return *((int *)a) - *((int *)b);
}

int maximumElementAfterDecrementingAndRearranging(int *arr, int arrSize)
{
    qsort(arr, arrSize, sizeof(int), &sf);
    int prv = 1;

    for (int i = 1; i < arrSize; i++)
    {
        int num = arr[i];
        int dff = num - prv;

        if (dff)
            prv++;
    }
    return prv;
}
// @lc code=end

int main(void)
{
    int arr1[] = {2, 2, 1, 2, 1};
    int arrSize1 = sizeof(arr1) / sizeof(arr1[0]);
    int ans1 = maximumElementAfterDecrementingAndRearranging(arr1, arrSize1);
    printf("Case 1: %d\n", ans1 == 2);

    int arr2[] = {100, 1, 1000};
    int arrSize2 = sizeof(arr2) / sizeof(arr2[0]);
    int ans2 = maximumElementAfterDecrementingAndRearranging(arr2, arrSize2);
    printf("Case 2: %d\n", ans2 == 3);

    int arr3[] = {1, 2, 3, 4, 5};
    int arrSize3 = sizeof(arr3) / sizeof(arr3[0]);
    int ans3 = maximumElementAfterDecrementingAndRearranging(arr3, arrSize3);
    printf("Case 3: %d\n", ans3 == 5);

    return 0;
}

/*
Accepted
56/56 cases passed (19 ms)
Your runtime beats 28.57 % of c submissions
Your memory usage beats 14.29 % of c submissions (17.3 MB)
*/