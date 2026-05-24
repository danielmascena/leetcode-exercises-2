#include <stdbool.h>
#include <stdio.h>

/*
 * @lc app=leetcode id=1431 lang=c
 *
 * [1431] Kids With the Greatest Number of Candies
 */

// @lc code=start
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
bool *kidsWithCandies(int *candies, int candiesSize, int extraCandies, int *returnSize)
{
    bool *result = malloc(candiesSize * sizeof(bool));
    int gst = 0;

    for (int i = 0; i < candiesSize; i++)
    {
        const int cdy = candies[i];

        if (cdy > gst)
            gst = cdy;
    }
    for (int i = 0; i < candiesSize; i++)
    {
        result[i] = candies[i] + extraCandies >= gst;
    }
    *returnSize = candiesSize;
    return result;
}
// @lc code=end

int main(void)
{
    int cads1[] = {2, 3, 5, 1, 3};
    int sz1 = 0;
    bool *ans1 = kidsWithCandies(cads1, 5, 3, &sz1);

    puts("Case 1:");

    for (int i = 0; i < sz1; i++)
    {
        printf("%d ", ans1[i]);
    }
    puts("");
    free(ans1);

    return 0;
}

/*
Accepted
103/103 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 35.38 % of c submissions (10.5 MB)
*/