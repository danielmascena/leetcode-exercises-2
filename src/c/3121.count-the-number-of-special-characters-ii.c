#include <stdio.h>

/*
 * @lc app=leetcode id=3121 lang=c
 *
 * [3121] Count the Number of Special Characters II
 */

// @lc code=start
int numberOfSpecialChars(char *word)
{
    int ult[26] = {0};
    int llt[26] = {0};
    int ans = 0;

    for (int i = 0; word[i] != '\0'; i++)
    {
        const char c = word[i];

        // lower
        if (c >= 97 && ult[c - 97])
        {
            llt[c - 97] = 0;
            // upper
        }
        else if (c < 97)
        {
            ult[c - 65] = 1;
        }
        else if (c >= 97)
        {
            llt[c - 97] = 1;
        }
    }
    for (int i = 0; i < 26; i++)
    {
        if (llt[i] && ult[i])
            ans++;
    }
    return ans;
}
// @lc code=end

int main(void)
{
    printf("Case 1: %d\n", numberOfSpecialChars("aaAbcBC") == 3);
    printf("Case 2: %d\n", numberOfSpecialChars("abc") == 0);
    printf("Case 3: %d\n", numberOfSpecialChars("AbBCab") == 0);
    return 0;
}

/*
Accepted
896/896 cases passed (22 ms)
Your runtime beats 59.43 % of c submissions
Your memory usage beats 15.09 % of c submissions (13.8 MB)
*/