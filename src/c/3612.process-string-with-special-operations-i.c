#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*
 * @lc app=leetcode id=3612 lang=c
 *
 * [3612] Process String with Special Operations I
 */

// @lc code=start

char *processStr(char *s)
{
    int size = 0;

    for (int i = 0; s[i]; i++)
    {
        const char c = s[i];
        if (c == '#')
        {
            size *= 2;
        }
        else if (c >= 'a' && c <= 'z')
        {
            size++;
        }
    }
    size++;
    char *ans = malloc(size * sizeof(char));
    int j = 0;
    // memset(ans, '', sizeof(ans));

    for (int i = 0; s[i]; i++)
    {
        const char c = s[i];

        // removes
        if (c == '*' && j > 0)
        {
            j--;
        }
        // duplicates
        else if (c == '#')
        {
            const int q = j;

            for (int z = 0; z < q; j++, z++)
            {
                ans[j] = ans[z];
            }
        }
        // reverses
        else if (c == '%')
        {
            for (int z = 0, w = j - 1; z < w; z++, w--)
            {
                char k = ans[w];
                ans[w] = ans[z];
                ans[z] = k;
            }
        }
        else if (c >= 'a' && c <= 'z')
        {
            ans[j++] = c;
        }
    }
    ans[j] = '\0';
    return ans;
}
// @lc code=end

int main(void)
{
    printf("Case 1: answer %s expected %s\n", processStr("a#b%*"), "ba");
    printf("Case 2: answer %s expected %s\n", processStr("z*#"), "");
    printf("Case 146: answer %s expected %s\n", processStr("*%"), "");
    printf("Case 211: answer %s expected %s\n", processStr("gn**"), "");
    return 0;
}

/*
Accepted
969/969 cases passed (40 ms)
Your runtime beats 14.29 % of c submissions
Your memory usage beats 100 % of c submissions (19.4 MB)
*/