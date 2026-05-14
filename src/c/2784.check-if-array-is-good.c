#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

/*
 * @lc app=leetcode id=2784 lang=c
 *
 * [2784] Check if Array is Good
 */

// @lc code=start
bool isGood(int *nums, int numsSize)
{
    int bg = 0;
    for (int i = 0; i < numsSize; i++)
    {
        const int num = nums[i];

        if (num > bg)
        {
            bg = num;
        }
    }
    int *acc = calloc(bg, sizeof(int));

    for (int i = 0; i < numsSize; i++)
    {
        acc[nums[i] - 1]++;
    }
    for (int i = 0; i < bg - 1; i++)
    {
        if (acc[i] != 1)
            return false;
    }
    const int last = acc[bg - 1];

    free(acc);

    return last == 2;
}
// @lc code=end

int main(void)
{
    int data1[] = {1, 3, 3, 2};

    bool ans1 = isGood(data1, 4);
    printf("answer 1: %d", ans1);

    return EXIT_SUCCESS;
}

/*
Accepted
805/805 cases passed (1 ms)
Your runtime beats 18.18 % of c submissions
Your memory usage beats 45.45 % of c submissions (9.5 MB)
*/