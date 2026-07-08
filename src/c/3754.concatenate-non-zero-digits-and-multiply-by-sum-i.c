#include <stdio.h>
#include <assert.h>

long long sumAndMultiply(int n)
{
    assert(0 <= n);

    long long sum = 0;
    long long x = 0;
    int t = 1;

    while (n)
    {
        int r = n % 10;

        if (r)
        {
            sum += r;
            x += (r * t);
            t *= 10;
        }
        n /= 10;
    }
    return x * sum;
}

int main(void)
{
    printf("Case 1: answer %d\n", sumAndMultiply(10203004) == 12340);
    printf("Case 2: answer %d\n", sumAndMultiply(1000) == 1);
    printf("Case 951: answer %d\n", sumAndMultiply(0) == 0);
    printf("Case 715: answer %d\n", sumAndMultiply(65463628) == 2618545120);
    return 0;
}
/*
Accepted
954 / 954 testcases passed

Solution

Runtime
0 ms
Beats 100.00%

Memory
9.32 MB
Beats 63.08%
*/