#include <stdio.h>

/*
 * @lc app=leetcode id=1672 lang=c
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
#define max(a, b) (((a) > (b)) ? (a) : (b))

int maximumWealth(int **accounts, int accountsSize, int *accountsColSize)
{
    int ans = 0;

    for (int i = 0; i < accountsSize; i++)
    {
        const int *row = accounts[i];
        int t = 0;
        for (int j = 0; j < accountsColSize[i]; j++)
        {
            t += row[j];
        }
        ans = max(ans, t);
    }
    return ans;
}
// @lc code=end

int main(void)
{
    int *accounts1[3] = {(int[]){1, 2, 3}, (int[]){3, 2, 1}};
    int *accounts2[3] = {(int[]){1, 5}, (int[]){7, 3}, (int[]){3, 5}};
    int *accounts3[3] = {(int[]){2, 8, 7}, (int[]){7, 1, 3}, (int[]){1, 9, 5}};
    printf("Case 1: answer %d\n", maximumWealth(accounts1, 2, (int[]){3, 3}) == 6);
    printf("Case 2: answer %d\n", maximumWealth(accounts2, 3, (int[]){2, 2, 2}) == 10);
    printf("Case 3: answer %d\n", maximumWealth(accounts3, 3, (int[]){3, 3, 3}) == 17);
    return 0;
}
/*
Accepted
34/34 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 36.87 % of c submissions (9.6 MB)
*/