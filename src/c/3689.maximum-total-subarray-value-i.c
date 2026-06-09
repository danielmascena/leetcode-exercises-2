#include <stdio.h>
#include <limits.h>

#define max(a, b) (((a) > (b)) ? (a) : (b))
#define min(a, b) (((a) < (b)) ? (a) : (b))

long long maxTotalValue(int *nums, int numsSize, int k)
{
    if (numsSize == 1)
        return 0;

    long long bg = 0;
    long long sm = INT_MAX;

    for (int i = 0; i < numsSize; i++)
    {
        const long long num = nums[i];

        if (num < sm)
            sm = num;
        if (num > bg)
            bg = num;
    }
    return (bg - sm) * k;
}

int main(void)
{
    printf("Case 1: answer %lld, expected %lld\n", maxTotalValue((int[]){1, 3, 2}, 3, 2), 4ll);
    printf("case 2: answer %lld, expected %lld\n", maxTotalValue((int[]){4, 2, 5, 1}, 4, 3), 12LL);
    return 0;
}