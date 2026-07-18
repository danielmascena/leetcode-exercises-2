#include <stdio.h>
#include <stdlib.h>

/*
 * @lc app=leetcode id=1282 lang=c
 *
 * [1282] Group the People Given the Group Size They Belong To
 */

// @lc code=start
#define max(a, b) (((a) > (b)) ? (a) : (b))

int compare(const void *a, const void *b)
{
    const int *pa = *(const int **)a;
    const int *pb = *(const int **)b;
    return pa[0] - pb[0];
}

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int **groupThePeople(int *groupSizes, int groupSizesSize, int *returnSize, int **returnColumnSizes)
{
    int **ans;
    int *group;
    int size = 0;
    int **map = malloc(sizeof(int *) * groupSizesSize);
    *returnSize = 0;

    for (int i = 0; i < groupSizesSize; i++)
    {

        const int gp = groupSizes[i];
        map[i] = malloc(sizeof(int) * 2);
        map[i][0] = gp;
        map[i][1] = i;
    }
    qsort(map, groupSizesSize, sizeof(map[0]), compare);

    for (int i = 0, j = 0, sz = 0; i < groupSizesSize; i++, j++)
    {
        const int gp = map[i][0];

        if (j == sz)
        {
            (*returnSize)++;
            sz = gp;
            j = 0;
        }
    }
    *returnColumnSizes = malloc(sizeof(int) * *returnSize);
    ans = malloc(sizeof(int *) * *returnSize);

    for (int i = 0, j = 0, p = 0; i < groupSizesSize; i++, j++)
    {
        int *gp = map[i];

        if (j == size)
        {
            int g = gp[0];
            group = (int *)malloc(sizeof(int) * g);
            (*returnColumnSizes)[p] = g;
            ans[p] = group;
            size = g;
            j = 0;
            p++;
        }
        group[j] = gp[1];
    }
    return ans;
}
// @lc code=end

int main(void)
{
    int groupSizes1[] = {3, 3, 3, 3, 3, 1, 3};
    int groupSizesSize1 = sizeof(groupSizes1) / sizeof(groupSizes1[0]);
    int returnSize1;
    int *returnColumnSizes1;
    int **ans1 = groupThePeople(groupSizes1, groupSizesSize1, &returnSize1, &returnColumnSizes1);
    int *expected1[] = {(int[]){5}, (int[]){0, 1, 2}, (int[]){3, 4, 6}};
    puts("Case 1: answer ");

    for (int i = 0; i < returnSize1; i++)
    {
        for (int j = 0; j < returnColumnSizes1[i]; j++)
        {
            printf("%d ", ans1[i][j] == expected1[i][j]);
        }
        free(ans1[i]);
    }
    free(returnColumnSizes1);
    free(ans1);

    return 0;
}
/*
Accepted
103/103 cases passed (7 ms)
Your runtime beats 58.62 % of c submissions
Your memory usage beats 58.62 % of c submissions (15.8 MB)
*/