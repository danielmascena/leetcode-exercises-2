#include <stdlib.h>
#include <stdbool.h>
#include <stdio.h>

/*
 * @lc app=leetcode id=2942 lang=c
 *
 * [2942] Find Words Containing Character
 */

// @lc code=start

bool contains(char *word, char c);

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *findWordsContaining(char **words, int wordsSize, char x, int *returnSize)
{
    *returnSize = 0;

    for (int i = 0; i < wordsSize; i++)
    {
        if (contains(words[i], x))
        {
            (*returnSize)++;
        }
    }
    int *ans = malloc(*returnSize * sizeof(int));

    for (int i = 0, j = 0; i < wordsSize; i++)
    {
        if (contains(words[i], x))
        {
            ans[j++] = i;
        }
    }
    return ans;
}

bool contains(char *word, char c)
{
    for (int i = 0; word[i] != '\0'; i++)
    {
        if (word[i] == c)
            return true;
    }
    return false;
}

// @lc code=end

void displayAnswer(int *ans, int size, int r)
{
    printf("Answer %d: ", r);

    for (int i = 0; i < size; i++)
    {
        printf("%d ", ans[i]);
    }
    puts("");
}

int main(void)
{
    char *words1[] = {"leet", "coode"};
    char *words2[] = {"abc", "bcd", "aaaa", "cbc"};
    char *words3[] = {"abc", "bcd", "aaaa", "cbc"};

    int wSize1 = 0;
    int wSize2 = 0;
    int wSize3 = 0;

    int *ans1 = findWordsContaining(words1, 2, 'e', &wSize1);
    int *ans2 = findWordsContaining(words2, 4, 'a', &wSize2);
    int *ans3 = findWordsContaining(words3, 4, 'z', &wSize3);

    puts("##### ANSWERS ####");

    displayAnswer(ans1, wSize1, 1);
    displayAnswer(ans2, wSize2, 2);
    displayAnswer(ans3, wSize3, 3);

    free(ans1);
    free(ans2);
    free(ans3);

    return EXIT_SUCCESS;
}

/*
    Accepted
    912/912 cases passed (1 ms)
    Your runtime beats 34.27 % of c submissions
    Your memory usage beats 96.71 % of c submissions (12.9 MB)
*/