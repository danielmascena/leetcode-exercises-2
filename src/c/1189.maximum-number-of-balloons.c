#include <stdio.h>
#include <stdlib.h>
/*
 * @lc app=leetcode id=1189 lang=c
 *
 * [1189] Maximum Number of Balloons
 */

// @lc code=start
int maxNumberOfBalloons(char *text)
{
    int ans = 0;
    int *lts = calloc(26, sizeof(int));
    const int a = 0;
    const int b = 1;
    const int l = 'l' - 'a';
    const int o = 'o' - 'a';
    const int n = 'n' - 'a';

    for (int i = 0; text[i]; i++)
    {
        lts[text[i] - 'a']++;
    }
    while (
        lts[a] && lts[b] && lts[l] >= 2 && lts[o] >= 2 && lts[n])
    {
        lts[a]--;
        lts[b]--;
        lts[n]--;
        lts[l] -= 2;
        lts[o] -= 2;
        ans++;
    }
    return ans;
}
// @lc code=end

int main(void)
{
    printf("Case 1: answer %d\n", maxNumberOfBalloons("nlaebolko") == 1);
    printf("Case 2: answer %d\n", maxNumberOfBalloons("loonbalxballpoon") == 2);
    printf("Case 3: answer %d\n", maxNumberOfBalloons("leetcode") == 0);
    return 0;
}
/*
Accepted
28/28 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 24.42 % of c submissions (8.7 MB)
*/