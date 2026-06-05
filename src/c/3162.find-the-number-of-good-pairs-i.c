#include <stdio.h>
#include <stdlib.h>

/*
 * @lc app=leetcode id=3162 lang=c
 *
 * [3162] Find the Number of Good Pairs I
 */

// @lc code=start
int numberOfPairs(int *nums1, int nums1Size, int *nums2, int nums2Size, int k)
{
    int ans = 0;
    int *nums2tk = malloc(nums2Size * sizeof(int));

    for (int i = 0; i < nums2Size; i++)
    {
        nums2tk[i] = nums2[i] * k;
    }
    for (int i = 0; i < nums1Size; i++)
    {
        const int n1 = nums1[i];

        for (int j = 0; j < nums2Size; j++)
        {
            if (!(n1 % nums2tk[j]))
            {
                ans++;
            }
        }
    }
    free(nums2tk);
    return ans;
}
// @lc code=end

int main(void)
{
    printf("Case 1: answer %d expected %d\n", numberOfPairs((int[]){1, 3, 4}, 3, (int[]){1, 3, 4}, 3, 1), 5);
    printf("Case 2: answer %d expected %d\n", numberOfPairs((int[]){1, 2, 4, 12}, 4, (int[]){2, 4}, 2, 3), 2);
    return 0;
}
/*
Accepted
783/783 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 40 % of c submissions (10 MB)
*/