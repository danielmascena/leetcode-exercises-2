#include <stdio.h>

/*
 * @lc app=leetcode id=3120 lang=c
 *
 * [3120] Count the Number of Special Characters I
 */

// @lc code=start
int numberOfSpecialChars(char *word)
{
    int m[52] = {0};
    int ans = 0;

    for (int i = 0; word[i] != '\0'; i++)
    {
        const int c = word[i];

        if (c >= 97)
        {
            m[(c - 97) + 26] = 1;
        }
        else
        {
            m[c - 65] = 1;
        }
    }
    for (int i = 0; i < 26; i++)
    {
        if (m[i] && m[i + 26])
        {
            ans++;
        }
    }
    return ans;
}
// @lc code=end

int main(void)
{
    printf("Case 1: %d\n", numberOfSpecialChars("aaAbcBC") == 3);
    printf("Case 2: %d\n", numberOfSpecialChars("abc") == 0);
    printf("Case 3: %d\n", numberOfSpecialChars("abBCab") == 1);
    return 0;
}

/*
Accepted
866/866 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 8.25 % of c submissions (9.6 MB)
*/