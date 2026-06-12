#include <stdio.h>
#include <stdlib.h>

static int cases = 1;
/*
 * @lc app=leetcode id=1365 lang=c
 *
 * [1365] How Many Numbers Are Smaller Than the Current Number
 */

// @lc code=start
int compare(const void *a, const void *b)
{
    return (*(int *)a - *(int *)b);
}
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *smallerNumbersThanCurrent(int *nums, int numsSize, int *returnSize)
{
    int *ans = malloc(numsSize * sizeof(int));
    int *cnums = malloc(numsSize * sizeof(int));
    int bg = 0;
    int prv = -1;

    for (int i = 0; i < numsSize; i++)
    {
        const int num = nums[i];
        cnums[i] = num;

        if (num > bg)
        {
            bg = num;
        }
    }
    int *bkt = calloc(bg + 1, sizeof(int));
    qsort(cnums, numsSize, sizeof(int), compare);
    *returnSize = numsSize;

    for (int i = 0; i < numsSize; i++)
    {
        const int num = cnums[i];

        if (num > prv)
        {
            bkt[num] = i;
            prv = num;
        }
    }
    for (int i = 0; i < numsSize; i++)
    {
        ans[i] = bkt[nums[i]];
    }
    free(bkt);
    free(cnums);

    return ans;
}
// @lc code=end

void printAnswer(int *ans, int size, int case_num, char expected[])
{
    printf("Case %d: ", case_num);

    for (int i = 0; i < size; i++)
    {
        printf("%d,", ans[i]);
    }
    printf("], expected: %s\n", expected);
}

int main(void)
{
    int ans1sz = 0;
    int *ans1 = smallerNumbersThanCurrent((int[]){8, 1, 2, 2, 3}, 5, &ans1sz);
    printAnswer(ans1, ans1sz, 1, "[4,0,1,1,3]");
    free(ans1);

    int ans2sz = 0;
    int *ans2 = smallerNumbersThanCurrent((int[]){6, 5, 4, 8}, 4, &ans2sz);
    printAnswer(ans2, ans2sz, 2, "[2,1,0,3]");
    free(ans2);

    int ans3sz = 0;
    int *ans3 = smallerNumbersThanCurrent((int[]){7, 7, 7, 7}, 4, &ans3sz);
    printAnswer(ans3, ans3sz, 3, "[0,0,0,0]");
    free(ans3);

    int ans26sz = 0;
    int *ans26 = smallerNumbersThanCurrent((int[]){5, 0, 10, 0, 10, 6}, 6, &ans26sz);
    printAnswer(ans26, ans26sz, 26, "[2,0,4,0,4,3]");
    free(ans26);

    int ans75sz = 0;
    int *ans75 = smallerNumbersThanCurrent((int[]){1, 2, 6, 7, 0, 0, 9}, 7, &ans75sz);
    printAnswer(ans75, ans75sz, 75, "[2,3,4,5,0,0,6]");
    free(ans75);

    return 0;
}

/*
Accepted
103/103 cases passed (2 ms)
Your runtime beats 76.62 % of c submissions
Your memory usage beats 15.62 % of c submissions (12.2 MB)
*/