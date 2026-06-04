#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

void printArr(int *arr, const int size)
{
    puts("");
    for (int i = 0; i < size; i++)
    {
        printf("%d ", arr[i]);
    }
    puts("");
}
/*
 * @lc app=leetcode id=3633 lang=c
 *
 * [3633] Earliest Finish Time for Land and Water Rides I
 */

// @lc code=start
#define min(a, b) (((a) < (b)) ? (a) : (b))

#define max(a, b) (((a) > (b)) ? (a) : (b))

int earliestFinishTime(int *landStartTime, int landStartTimeSize, int *landDuration, int landDurationSize, int *waterStartTime, int waterStartTimeSize, int *waterDuration, int waterDurationSize)
{
    int ans = INT_MAX;
    int tmp = INT_MAX;
    int end = 0;

    for (int i = 0; i < waterDurationSize; i++)
    {
        const int dur = waterDuration[i] + waterStartTime[i];
        end = max(end, dur);
        tmp = min(tmp, waterStartTime[i]);
    }
    int *war = calloc(end + 1, sizeof(int));
    int *warp = calloc(end + 1, sizeof(int));

    for (int i = 0; i < waterDurationSize; i++)
    {
        war[waterStartTime[i]] = waterDuration[i];
    }
    for (int i = tmp, v = INT_MAX, z = INT_MAX; i <= end;)
    {
        if (war[i])
        {
            const int zv = i + war[i];
            z = min(z, war[i]);
            v = min(v, zv);

            while (i <= zv)
            {
                warp[i] = z;
                war[i] = v;
                i++;
            }
        }
        else
        {
            war[i] = v;
            warp[i] = z;
            i++;
        }
    }
    printf("tmp %d\n", tmp);
    printArr(war, end + 1);
    printArr(warp, end + 1);

    for (int i = 0; i < landDurationSize; i++)
    {
        const int lst = landStartTime[i];
        const int ldu = landDuration[i];
        const int tld = lst + ldu;
        const int pws = war[lst];
        const int lwd = warp[tld];

        if (lst - pws >= 0 && pws)
        {
            ans = min(ans, tld);
        }
        if (lwd)
            ans = min(ans, tld + lwd);
        if (pws)
            ans = min(ans, pws + ldu);
    }
    free(war);
    free(warp);
    return ans;
}
// @lc code=end

int main(void)
{
    printf("Case 1: answer %d expected %d\n", earliestFinishTime((int[]){2, 8}, 2, (int[]){4, 1}, 2, (int[]){6}, 1, (int[]){3}, 1), 9);
    printf("Case 2: answer %d expected %d\n", earliestFinishTime((int[]){5}, 1, (int[]){3}, 1, (int[]){1}, 1, (int[]){10}, 1), 14);
    printf("Case 167: answer %d expected %d\n", earliestFinishTime((int[]){79}, 1, (int[]){51}, 1, (int[]){99}, 1, (int[]){79}, 1), 209);
    printf("Case 459: answer %d expected %d\n", earliestFinishTime((int[]){99}, 1, (int[]){59}, 1, (int[]){99, 54}, 2, (int[]){85, 20}, 2), 158);
    return 0;
}