#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*
 * @lc app=leetcode id=1108 lang=c
 *
 * [1108] Defanging an IP Address
 */

// @lc code=start

char *defangIPaddr(char *address)
{
    const size_t sz = (strlen(address) + 7);
    char *ans = malloc(sz * sizeof(char));
    int j = 0;

    for (int i = 0; address[i]; i++)
    {
        char c = address[i];
        if (c == '.')
        {
            ans[j++] = '[';
            ans[j++] = c;
            ans[j++] = ']';
        }
        else
            ans[j++] = c;
    }
    ans[j] = '\0';
    return ans;
}
// @lc code=end

int main(void)
{
    char *ans1 = defangIPaddr("1.1.1.1");
    char *ans2 = defangIPaddr("255.100.50.0");
    printf("Case 1: answer %s expected %s\n", ans1, "1[.]1[.]1[.]1");
    printf("Case 2: answer %s expected %s\n", ans2, "255[.]100[.]50[.]0");
    free(ans1);
    free(ans2);
    return 0;
}
/*
Accepted
62/62 cases passed (3 ms)
Your runtime beats 53.66 % of c submissions
Your memory usage beats 75.61 % of c submissions (8.4 MB)
*/