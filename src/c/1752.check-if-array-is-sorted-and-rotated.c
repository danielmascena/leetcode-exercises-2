#include <stdio.h>
#include <stdbool.h>

/*
 * @lc app=leetcode id=1752 lang=c
 *
 * [1752] Check if Array Is Sorted and Rotated
 */

// @lc code=start
bool check(int *nums, int numsSize)
{
    int pivot = 0;

    for (int i = 1; i < numsSize; i++)
    {

        if (nums[i - 1] > nums[i])
            pivot = i;
    }
    for (int i = (pivot + 1) % numsSize, prev = nums[pivot]; (i % numsSize) != pivot; i++)
    {
        const int num = nums[i % numsSize];

        if (prev > num)
            return false;

        prev = num;
    }
    return true;
}
// @lc code=end

int main(void)
{
    printf("Case 1: %d\n", check((int[]){3, 4, 5, 1, 2}, 5) == 1);
    printf("Case 2: %d\n", check((int[]){2, 1, 3, 4}, 4) == 0);
    printf("Case 3: %d\n", check((int[]){1, 2, 3}, 3) == 1);
    printf("Case 4: %d\n", check((int[]){2, 1}, 2) == 1);
    printf("Case 111: %d\n", check((int[]){1, 3, 2}, 3) == 0);

    return 0;
}

/*
Accepted
113/113 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 36.08 % of c submissions (8.8 MB)
*/