#include <stdlib.h>
#include <stdio.h>
/*
 * @lc app=leetcode id=153 lang=c
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
int findMin(int *nums, int numsSize)
{
    int l = 0;
    int r = numsSize - 1;

    while (l < r && nums[l] > nums[r])
    {

        int m = ((r - l) / 2) + l;
        const int mid = nums[m];

        if (m - 1 >= 0 && m + 1 < numsSize && nums[m - 1] > mid && mid < nums[m + 1])
        {
            // printf("condition - %d %d %d\n", mid, nums[l], nums[r]);
            return mid;
        }
        else if (mid < nums[l])
        {
            r = m;
        }
        else
        {
            l = m + 1;
        }
    }
    // printf("end - %d %d\n", nums[l], nums[r]);
    return nums[l];
}
// @lc code=end

int main(void)
{

    int nums1[] = {3, 4, 5, 1, 2};
    int nums2[] = {4, 5, 6, 7, 0, 1, 2};
    int nums3[] = {11, 13, 15, 17};
    int nums4[] = {2, 1};
    int nums5[] = {5, 1, 2, 3, 4};
    int nums6[] = {2, 3, 4, 5, 6, 7, 8, 9, 1};

    int ans1 = findMin(nums1, 5);
    int ans2 = findMin(nums2, 7);
    int ans3 = findMin(nums3, 4);
    int ans4 = findMin(nums4, 2);
    int ans5 = findMin(nums5, 5);
    int ans6 = findMin(nums6, 9);

    printf("answers: %d %d %d %d %d %d\n", ans1 == 1, ans2 == 0, ans3 == 11, ans4 == 1, ans5 == 1, ans6 == 1);

    return EXIT_SUCCESS;
}

/*
Accepted
150/150 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 8.53 % of c submissions (9.2 MB)
*/