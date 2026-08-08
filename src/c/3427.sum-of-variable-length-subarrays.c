#include <stdio.h>
#include <stdlib.h>

/*
 * @lc app=leetcode id=3427 lang=c
 *
 * [3427] Sum of Variable Length Subarrays
 */

int reduce(int *arr, int size)
{
    int prd = 1;

    for (int i = 0; i < size; i++)
    {
        prd *= arr[i];
    }
    return prd;
}

// @lc code=start
#define max(a, b) (((a) > (b)) ? (a) : (b))

int subarraySum(int *nums, int numsSize)
{
    int *pfx = malloc(numsSize * sizeof(int));
    int ans = 0;

    for (int i = 0, t = 0; i < numsSize; i++)
    {
        pfx[i] = t += nums[i];
    }
    for (int i = 0; i < numsSize; i++)
    {
        int start = max(0, i - nums[i]);
        int tsm = pfx[i];

        if (start)
        {
            tsm -= pfx[start - 1];
        }
        ans += tsm;
    }
    return ans;
}
// @lc code=end

int main(void)
{
    printf("Case 1: answer %d\n", subarraySum((int[]){2, 3, 1}, 3) == 11);
    return 0;
}

/*
Accepted
773/773 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 11.11 % of c submissions (10 MB)
*/