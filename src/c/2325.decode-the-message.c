#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

/*
 * @lc app=leetcode id=2325 lang=c
 *
 * [2325] Decode the Message
 */

// @lc code=start
char *decodeMessage(char *key, char *message)
{
    const int len = strlen(message);
    char *ans = malloc((len + 1) * sizeof(char));
    char lts[26] = {};
    int l = 97;
    memset(ans, 32, len * sizeof(char));

    for (int i = 0; key[i] != '\0' /*&& l <= 122*/; i++)
    {
        const int c = key[i];

        if (c >= 97 && lts[c - 97] < 97)
        {
            lts[c - 97] = l++;
        }
    }
    int i = 0;
    for (; message[i] != '\0'; i++)
    {
        const char c = message[i];
        if (c >= 97)
            ans[i] = lts[c - 97];
    }
    ans[i] = '\0';
    return ans;
}
// @lc code=end

int main(void)
{
    char message[] = "vkbs bs t suepuv";
    const char *ans1 = decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv");
    char exp1[] = "this is a secret";
    bool val1 = true;

    for (int i = 0; exp1[i] != '\0'; i++)
    {
        if (exp1[i] != ans1[i])
        {
            val1 = false;
            break;
        }
    }
    printf("Case 1: answer %d\n", val1);
    return 0;
}
/*
Accepted
69/69 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 88.24 % of c submissions (8.9 MB)
*/