#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

/*
 * @lc app=leetcode id=2126 lang=c
 *
 * [2126] Destroying Asteroids
 */
// @lc code=start
int compare(const void *a, const void *b)
{
    return (*(int *)a - *(int *)b);
}

bool asteroidsDestroyed(int mass, int *asteroids, int asteroidsSize)
{
    qsort(asteroids, asteroidsSize, sizeof(int), compare);

    long long t = mass;

    for (int i = 0; i < asteroidsSize; i++)
    {
        const int astro = asteroids[i];

        if (t < astro)
        {
            return false;
        }
        t += astro;
    }
    return true;
}
// @lc code=end

int main(void)
{
    printf("Case 1: answer %d expected %d\n", asteroidsDestroyed(10, (int[]){3, 9, 19, 5, 21}, 5), true);
    printf("Case 2: answer %d expected %d\n", asteroidsDestroyed(5, (int[]){4, 9, 23, 4}, 4), false);
    return 0;
}

/*
Accepted
75/75 cases passed (66 ms)
Your runtime beats 50 % of c submissions
Your memory usage beats 16.67 % of c submissions (20.7 MB)
*/