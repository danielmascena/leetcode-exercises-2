#include <stdio.h>
#include <stdlib.h>

/*
 * @lc app=leetcode id=1833 lang=c
 *
 * [1833] Maximum Ice Cream Bars
 */

// @lc code=start
#define max(a, b) (((a) > (b)) ? (a) : (b))

int maxIceCream(int *costs, int costsSize, int coins)
{
    int ans = 0;
    int *arr;
    size_t bgt = 0;

    for (int i = 0; i < costsSize; i++)
    {
        bgt = max(costs[i], bgt);
    }
    arr = calloc(bgt + 1, sizeof(int));

    for (int i = 0; i < costsSize; i++)
    {
        arr[costs[i]]++;
    }
    for (int i = 1; i <= coins && i <= bgt;)
    {
        int q = arr[i];

        if (q)
        {
            arr[i]--;
            coins -= i;
            ans++;
        }
        else
        {
            i++;
        }
    }
    free(arr);
    return ans;
}
// @lc code=end

int main(void)
{
    printf("Case 1: answer %d\n", maxIceCream((int[]){1, 3, 2, 4, 1}, 5, 7) == 4);
    printf("Case 2: answer %d\n", maxIceCream((int[]){10, 6, 8, 7, 7, 8}, 6, 5) == 0);
    printf("Case 3: answer %d\n", maxIceCream((int[]){1, 6, 3, 1, 2, 5}, 6, 20) == 6);
    return 0;
}
/*
Accepted
63/63 cases passed (3 ms)
Your runtime beats 84.21 % of c submissions
Your memory usage beats 28.07 % of c submissions (19.4 MB)
*/