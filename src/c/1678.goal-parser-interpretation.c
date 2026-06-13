#include <stdio.h>

/*
 * @lc app=leetcode id=1678 lang=c
 *
 * [1678] Goal Parser Interpretation
 */

// @lc code=start

char *interpret(char *command)
{
    int j = 0;

    for (int i = 0; command[i] != '\0'; i++)
    {
        const char c = command[i];

        if (c == 'G')
        {
            command[j++] = c;
        }
        else if (command[i + 1] == ')')
        {
            command[j++] = 'o';
            i++;
        }
        else
        {
            command[j++] = 'a';
            command[j++] = 'l';
            i += 3;
        }
    }
    command[j] = '\0';
    return command;
}
// @lc code=end

int main(void)
{
    printf("Case 1: %s expected %s\n", interpret((char[]){"G()(al)"}), "Goal");
    printf("Case 2: %s expected %s\n", interpret((char[]){"G()()()()(al)"}), "Gooooal");
    printf("Case 3: %s expected %s\n", interpret((char[]){"(al)G(al)()()G"}), "alGalooG");
    printf("Case 4: %s expected %s\n", interpret((char[]){"G"}), "G");
    return 0;
}

/*
Accepted
105/105 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 6.59 % of c submissions (8.7 MB)
*/

/*
Accepted
105/105 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 71.43 % of c submissions (8.5 MB)
*/