int gcdOfOddEvenSums(int n)
{
    int sumOdd = 0;
    int sumEven = 0;

    for (int i = 1; i < n; i++)
    {
        sumEven += i + 1;
        sumOdd += i;
    }
    int ans = sumOdd < sumEven ? sumOdd : sumEven;

    while (sumEven % ans || sumOdd % ans)
    {
        ans--;
    }
    return ans;
}

/*
Accepted
1000 / 1000 testcases passed

Solution

Runtime
574 ms
Beats 5.62%

Memory
8.98 MB
Beats 89.14%
*/