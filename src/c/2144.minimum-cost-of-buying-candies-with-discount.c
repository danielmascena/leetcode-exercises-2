#include <stdio.h>
#include <stdlib.h>
/*
 * @lc app=leetcode id=2144 lang=c
 *
 * [2144] Minimum Cost of Buying Candies With Discount
 */

// @lc code=start
int compare(const void *a, const void *b)
{
    return (*(int *)b - *(int *)a);
}

int minimumCost(int *cost, int costSize)
{
    int ttl = 0;
    qsort(cost, costSize, sizeof(int), compare);

    for (int i = 0; i < costSize; i++)
    {
        if (i % 3 < 2)
        {
            ttl += cost[i];
        }
    }
    return ttl;
}
// @lc code=end

int main(void)
{
    printf("Case 1: answer %d expected %d\n", minimumCost((int[]){1, 2, 3}, 3), 5);
    printf("Case 2: answer %d expected %d\n", minimumCost((int[]){6, 5, 7, 9, 2, 2}, 6), 23);
    printf("Case 3: answer %d expected %d\n", minimumCost((int[]){5, 5}, 2), 10);
    return 0;
}

/*
Accepted
192/192 cases passed (4 ms)
Your runtime beats 8.57 % of c submissions
Your memory usage beats 48.57 % of c submissions (9 MB)
*/