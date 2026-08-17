#include <stdio.h>
#include <stdlib.h>

int elevatorRequests(int n, int *requests, int requestsSize)
{
    int ans = requests[0];

    for (int i = 1; i < requestsSize; i++)
    {
        ans += abs(requests[i] - requests[i - 1]);
    }
    return ans;
}

int main(void)
{
    int reqs1[] = {2, 1, 4, 3};
    int size1 = sizeof(reqs1) / sizeof(reqs1[0]);
    int n1 = 5;
    int ans1 = elevatorRequests(n1, reqs1, size1);
    printf("Case 1: answer %d\n", ans1 == 7);

    int reqs2[] = {2, 0, 0};
    int size2 = sizeof(reqs2) / sizeof(reqs2[0]);
    int n2 = 3;
    int ans2 = elevatorRequests(n2, reqs2, size2);
    printf("Case 2: answer %d\n", ans2 == 4);
    return 0;
}

/*
Accepted
1000 / 1000 testcases passed

Solution
Runtime 0 ms Beats 100.00%
Memory
9.94 MB Beats 100.00%
*/