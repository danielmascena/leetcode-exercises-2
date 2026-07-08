#include <stdio.h>
#include <stdlib.h>

/*
 * @lc app=leetcode id=1288 lang=c
 *
 * [1288] Remove Covered Intervals
 */

// @lc code=start
int removeCoveredIntervals(int **intervals, int intervalsSize, int *intervalsColSize)
{
    int ans = 0;
    int *arr = calloc(intervalsSize, sizeof(int));

    for (int i = 0; i < intervalsSize; i++)
    {
        const int *tp1 = intervals[i];
        const int a = tp1[0];
        const int b = tp1[1];

        for (int j = 0; j < intervalsSize; j++)
        {
            if (!arr[j] && i != j)
            {
                const int *tp2 = intervals[j];
                const int c = tp2[0];
                const int d = tp2[1];

                if (a >= c && b <= d)
                {
                    arr[i] = 1;
                    ans++;
                    break;
                }
            }
        }
    }
    free(arr);
    return intervalsSize - ans;
}
// @lc code=end

int main(void)
{
    int *arr1[3] = {(int[]){1, 4}, (int[]){3, 6}, (int[]){2, 8}};
    int arr1Size[] = {2, 2, 2};
    printf("Case 1: answer %d\n", removeCoveredIntervals(arr1, 3, arr1Size) == 2);

    int *arr2[2] = {(int[]){1, 4}, (int[]){2, 3}};
    int arr2Size[] = {2, 2};
    printf("Case 2: answer %d\n", removeCoveredIntervals(arr2, 2, arr2Size) == 1);

    return 0;
}

/*
Accepted
34/34 cases passed (3 ms) [WARN] Failed to get runtime percentile.
*/