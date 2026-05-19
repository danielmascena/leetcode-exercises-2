#include <stdio.h>

/*
 * @lc app=leetcode id=2540 lang=c
 *
 * [2540] Minimum Common Value
 */

// @lc code=start
int getCommon(int *nums1, int nums1Size, int *nums2, int nums2Size)
{

    for (int i = 0, j = 0; i < nums1Size && j < nums2Size;)
    {
        const int num1 = nums1[i];
        const int num2 = nums2[j];

        if (num1 == num2)
            return num1;
        else if (num1 < num2)
            i++;
        else
            j++;
    }
    return -1;
}
// @lc code=end

int main(void)
{
    int ans1 = getCommon((int[]){1, 2, 3}, 3, (int[]){2, 4}, 2);
    printf("Answer 1: %d", ans1 == 2);
    return 0;
}

/*
Accepted
41/41 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 32.39 % of c submissions (15.1 MB)
*/