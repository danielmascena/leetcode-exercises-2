/*
 * @lc app=leetcode id=2657 lang=c
 *
 * [2657] Find the Prefix Common Array of Two Arrays
 */

// @lc code=start
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *findThePrefixCommonArray(int *A, int ASize, int *B, int BSize, int *returnSize)
{
    int *prefix = calloc(ASize, sizeof(int));
    int *pca = malloc(ASize * sizeof(int));
    int count = 0;

    for (int i = 0; i < ASize; i++)
    {
        const int ia = A[i] - 1;
        const int ib = B[i] - 1;
        prefix[ia]++;
        prefix[ib]++;

        if (ia == ib && prefix[ia] > 1)
            count++;
        else
        {
            if (prefix[ia] > 1)
                count++;
            if (prefix[ib] > 1)
                count++;
        }
        pca[i] = count;
    }
    *returnSize = ASize;
    return pca;
}
// @lc code=end

/*
Accepted
1773/1773 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 57.14 % of c submissions (15.1 MB)
*/