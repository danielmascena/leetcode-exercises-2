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

// @lc code=end

int main(void)
{
    printf("Case 1: answer %d expected %d\n", earliestFinishTime((int[]){2, 8}, 2, (int[]){4, 1}, 2, (int[]){6}, 1, (int[]){3}, 1), 9);
    printf("Case 2: answer %d expected %d\n", earliestFinishTime((int[]){5}, 1, (int[]){3}, 1, (int[]){1}, 1, (int[]){10}, 1), 14);
    printf("Case 167: answer %d expected %d\n", earliestFinishTime((int[]){79}, 1, (int[]){51}, 1, (int[]){99}, 1, (int[]){79}, 1), 209);
    printf("Case 459: answer %d expected %d\n", earliestFinishTime((int[]){99}, 1, (int[]){59}, 1, (int[]){99, 54}, 2, (int[]){85, 20}, 2), 158);
    return 0;
}