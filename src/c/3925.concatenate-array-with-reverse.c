#include <stdio.h>
#include <stdlib.h>

int *concatWithReverse(int *nums, int numsSize, int *returnSize)
{
    int *ans = malloc((numsSize * 2) * sizeof(int));
    *returnSize = numsSize * 2;

    for (int i = 0; i < numsSize; i++)
    {
        ans[i] = nums[i];
        ans[i + numsSize] = nums[(numsSize - 1) - i];
    }
    return ans;
}

int main(void)
{
    int ans1Size = 0;
    int *ans1 = concatWithReverse((int[]){1, 2, 3}, 3, &ans1Size);
    puts("Case 1: answer ");
    for (int i = 0; i < ans1Size; i++)
    {
        printf("%d ", ans1[i]);
    }
    free(ans1);
    return 0;
}