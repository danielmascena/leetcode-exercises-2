#include <stdio.h>

/*
 * @lc app=leetcode id=33 lang=c
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
int bs(int *nums, int left, int right, int target)
{
    if (left >= right)
    {

        printf("%d %d\n", left, right);
        return -1;
    }

    const int middle = left + ((right - left) / 2);
    const int current = nums[middle];
    printf("%d %d %d %d\n", left, middle, current, right);

    if (target == current)
    {
        return middle;
    }
    else if (target > current && target > nums[right - 1])
    {
        return bs(nums, left, middle, target);
    }
    else if (current > nums[right - 1] && (target > current || target <= nums[right - 1]))
    {
        return bs(nums, middle + 1, right, target);
    }
    else if (current < target && current < nums[right - 1])
    {
        return bs(nums, middle + 1, right, target);
    }
    return bs(nums, left, middle, target);
}

int search(int *nums, int numsSize, int target)
{
    return bs(nums, 0, numsSize, target);
}
// @lc code=end

int main(void)
{
    printf("Case 1: %d\n", search((int[]){4, 5, 6, 7, 0, 1, 2}, 7, 0) == 4);
    printf("Case 2: %d\n", search((int[]){4, 5, 6, 7, 0, 1, 2}, 7, 3) == -1);
    printf("Case 3: %d\n", search((int[]){1}, 1, 0) == -1);
    printf("Case 114: %d\n", search((int[]){1, 3}, 2, 1) == 0);
    printf("Case 155: %d\n", search((int[]){3, 1}, 2, 3) == 0);
    printf("Case 156: %d\n", search((int[]){3, 5, 1}, 3, 3) == 0);
    printf("Case 171: %d\n", search((int[]){3, 5, 1}, 3, 1) == 2);
    printf("Case 180: %d\n", search((int[]){5, 1, 3}, 3, 5) == 0);
    printf("Case 189: %d\n", search((int[]){2, 3, 4, 5, 6, 7, 8, 9, 1}, 9, 9) == 7);

    return 0;
}
