#include <stdio.h>
#include <stdlib.h>

int totalWaviness(int num1, int num2)
{
    int ans = 0;

    while (num1 && num1 <= num2)
    {
        int cnum = num1;
        int prev = cnum % 10;
        cnum /= 10;

        while (cnum / 10)
        {

            int curr = cnum % 10;
            cnum /= 10;
            int next = cnum % 10;

            if ((curr > prev && curr > next) || (curr < prev && curr < next))
            {
                ans++;
            }
            prev = curr;
        }
        num1++;
    }
    return ans;
}

int main(void)
{
    printf("Case 1: answer %d expected %d\n", totalWaviness(120, 130), 3);
    printf("Case 2: answer %d expected %d\n", totalWaviness(198, 202), 3);
    printf("Case 3: answer %d expected %d\n", totalWaviness(4848, 4848), 2);
    return 0;
}