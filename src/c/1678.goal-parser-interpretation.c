#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/*
 * @lc app=leetcode id=1678 lang=c
 *
 * [1678] Goal Parser Interpretation
 */

// @lc code=start

char *interpret(char *command)
{
    char *ans = malloc((strlen(command) + 1) * sizeof(char));
    int j = 0;

    for (int i = 0; command[i] != '\0'; i++)
    {
        const char c = command[i];

        if (c == 'G')
        {
            ans[j++] = c;
        }
        else if (command[i + 1] == ')')
        {
            ans[j++] = 'o';
            i++;
        }
        else
        {
            ans[j++] = 'a';
            ans[j++] = 'l';
            i += 3;
        }
    }
    ans[j] = '\0';
    return ans;
}
// @lc code=end

int main(void)
{
    printf("Case 1: %s expected %s\n", interpret("G()(al)"), "Goal");
    printf("Case 2: %s expected %s\n", interpret("G()()()()(al)"), "Gooooal");
    printf("Case 3: %s expected %s\n", interpret("(al)G(al)()()G"), "alGalooG");
    printf("Case 4: %s expected %s\n", interpret("G"), "G");
    return 0;
}

/*
Accepted
105/105 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 6.59 % of c submissions (8.7 MB)
*/