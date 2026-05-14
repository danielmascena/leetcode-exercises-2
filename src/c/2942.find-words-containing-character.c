#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

/*
 * @lc app=leetcode id=2942 lang=c
 *
 * [2942] Find Words Containing Character
 */

// @lc code=start
bool includes(char *word, char x)
{
    for (int i = 0; word[i] != '\0'; i++)
    {
        if (word[i] == x)
            return true;
    }
    return false;
}

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *findWordsContaining(char **words, int wordsSize, char x, int *returnSize)
{
    int count = 0;

    for (int i = 0; i < wordsSize; i++)
    {
        char *word = words[i];

        if (includes(word, x))
        {
            count++;
        }
    }
    int *ans = malloc(count * sizeof(int));

    for (int i = 0, j = 0; i < wordsSize; i++)
    {
        if (includes(words[i], x))
        {
            ans[j++] = i;
        }
    }
    *returnSize = count;
    return ans;
}
// @lc code=end

void showResult(int *ans, int size)
{
    puts("The result is: [");

    for (int i = 0; i < size; i++)
    {
        printf("%d,", ans[i]);
    }
    puts("]");
}

int main(void)
{
    char *words1[] = {"leet", "code"};
    char *words2[] = {"abc", "bcd", "aaaa", "cbc"};
    char *words3[] = {"abc", "bcd", "aaaa", "cbc"};

    int ansSize1;
    int ansSize2;
    int ansSize3;

    int *ans1 = findWordsContaining(words1, sizeof(words1) / sizeof(words1[0]), 'e', &ansSize1);
    int *ans2 = findWordsContaining(words2, sizeof(words2) / sizeof(words2[0]), 'a', &ansSize2);
    int *ans3 = findWordsContaining(words3, sizeof(words3) / sizeof(words3[0]), 'z', &ansSize3);

    showResult(ans1, ansSize1);
    showResult(ans2, ansSize2);
    showResult(ans3, ansSize3);

    free(ans1);
    free(ans2);
    free(ans3);

    return 0;
}

/**
 * Accepted
912/912 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 58.14 % of c submissions (13.1 MB)
 */