#include <stdlib.h>
#include <stdio.h>

/*
 * @lc app=leetcode id=1260 lang=c
 *
 * [1260] Shift 2D Grid
 */

// @lc code=start
/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int **shiftGrid(int **grid, int gridSize, int *gridColSize, int k, int *returnSize, int **returnColumnSizes)
{
    int **ans = malloc(sizeof(int *) * gridSize);
    *returnColumnSizes = malloc(sizeof(int) * gridSize);

    for (int i = 0; i < gridSize; i++)
    {
        ans[i] = malloc(sizeof(int) * gridColSize[i]);
        (*returnColumnSizes)[i] = gridColSize[i];

        for (int j = 0; j < gridColSize[i]; j++)
        {
            ans[i][j] = grid[i][j];
        }
    }

    while (k)
    {
        int *lastCol = malloc(sizeof(int) * gridSize);

        for (int i = 0; i < gridSize; i++)
        {
            lastCol[i] = ans[i][gridColSize[i] - 1];

            for (int j = gridColSize[i] - 1; j > 0; j--)
            {
                ans[i][j] = ans[i][j - 1];
            }
        }
        for (int i = 0; i < gridSize - 1; i++)
        {
            ans[i + 1][0] = lastCol[i];
        }
        ans[0][0] = lastCol[gridSize - 1];
        free(lastCol);
        k--;
    }
    *returnSize = gridSize;
    return ans;
}
// @lc code=end

int main(void)
{
    int *grid1[] = {(int[]){1, 2, 3}, (int[]){4, 5, 6}, (int[]){7, 8, 9}};
    int gridSize1 = sizeof(grid1) / sizeof(grid1[0]);
    int gridColSize1[] = {3, 3, 3};
    int k1 = 1;
    int returnSize1;
    int *returnColumnSize1;
    int **ans1 = shiftGrid(grid1, gridSize1, gridColSize1, k1, &returnSize1, &returnColumnSize1);
    printf("Case 1: answer\n");

    for (int i = 0; i < returnSize1; i++)
    {
        for (int j = 0; j < returnColumnSize1[i]; j++)
        {
            printf("%d ", ans1[i][j]);
        }
        puts("");
    }
    puts("");
    return 0;
}
/*
Accepted
107/107 cases passed (8 ms)
Your runtime beats 6.06 % of c submissions
Your memory usage beats 15.15 % of c submissions (21.8 MB)
*/