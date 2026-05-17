#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

/*
 * @lc app=leetcode id=1306 lang=c
 *
 * [1306] Jump Game III
 */

// @lc code=start
bool dp(int idx, int *arr, int size, int *seen)
{
    if (idx >= size || idx < 0 || seen[idx])
    {
        return false;
    }
    const int val = arr[idx];

    if (!val)
    {
        return true;
    }
    seen[idx] = 1;
    return dp(idx + val, arr, size, seen) || dp(idx - val, arr, size, seen);
}

bool canReach(int *arr, int arrSize, int start)
{
    int *seen = calloc(arrSize, sizeof(int));
    bool ans = dp(start, arr, arrSize, seen);
    free(seen);
    return ans;
}
// @lc code=end

int main(void)
{
    int arr1[] = {4, 2, 3, 0, 3, 1, 2};
    int arr2[] = {4, 2, 3, 0, 3, 1, 2};
    int arr3[] = {3, 0, 2, 1, 2};
    int arr4[] = {0, 3, 0, 6, 3, 3, 4};

    int ans1 = canReach(arr1, 7, 5);
    int ans2 = canReach(arr2, 7, 0);
    int ans3 = canReach(arr3, 5, 2);
    int ans4 = canReach(arr4, 7, 6);

    printf("Answers -> 1: %d, 2: %d, 3: %d, 4: %d", ans1 == 1, ans2 == true, ans3 == 0, ans4 == 1);

    return EXIT_SUCCESS;
}

/*
Accepted
56/56 cases passed (4 ms)
Your runtime beats 11.63 % of c submissions
Your memory usage beats 13.95 % of c submissions (15.3 MB)
*/