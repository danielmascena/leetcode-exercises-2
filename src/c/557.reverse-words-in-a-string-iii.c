#include <stdio.h>
/*
 * @lc app=leetcode id=557 lang=c
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
char *reverseWords(char *s)
{
    for (int i = 0, p = 0; s[i]; i++)
    {
        printf("%d %d\n", s[i] == ' ', i);
        if (s[i + 1] == ' ' || s[i + 1] == '\0')
        {
            for (int j = i; p < j; j--, p++)
            {
                char t = s[p];
                s[p] = s[j];
                s[j] = t;
            }
            p = i + 2;
        }
    }
    return s;
}
// @lc code=end

int main(void)
{
    char str1[] = "Let's take LeetCode contest";
    printf("Case 1: answer %s\n", reverseWords(str1));

    char str2[] = "Mr Ding";
    printf("Case 2: answer %s\n", reverseWords(str2));
    return 0;
}

/*
Accepted
29/29 cases passed (426 ms)
Your runtime beats 5.3 % of c submissions
Your memory usage beats 83.8 % of c submissions (9.8 MB)
*/