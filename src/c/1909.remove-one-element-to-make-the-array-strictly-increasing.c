#include <stdio.h>
#include <stdbool.h>
/*
 * @lc app=leetcode id=1909 lang=c
 *
 * [1909] Remove One Element to Make the Array Strictly Increasing
 */

// @lc code=start
bool canBeIncreasing(int *nums, int numsSize)
{

    int count = 0;

    for (int i = 0; i < numsSize && count <= 1; i++)
    {
        int n1 = nums[i];
        int p = 0;
        int j = 0;

        for (; j < numsSize; j++)
        {
            int n2 = nums[j];

            if (j == i)
            {
                continue;
            }
            if (n2 <= p)
            {
                break;
            }
            p = n2;
        }
        if (j == numsSize)
        {
            return 1;
        }
    }
    return 0;
}
// @lc code=end

int main(void)
{
    printf("Case 1: answer %d\n", canBeIncreasing((int[]){1, 2, 10, 5, 7}, 5) == 1);
    printf("Case 2: answer %d\n", canBeIncreasing((int[]){2, 3, 1, 2}, 4) == 0);
    printf("Case 3: answer %d\n", canBeIncreasing((int[]){1, 1, 1}, 3) == 0);
    printf("Case 88: answer %d\n", canBeIncreasing((int[]){105, 924, 32, 968}, 4) == 1);
    return 0;
}
/*
Accepted
109/109 cases passed (5 ms)
Your runtime beats 18.52 % of c submissions
Your memory usage beats 70.37 % of c submissions (9.1 MB)
*/