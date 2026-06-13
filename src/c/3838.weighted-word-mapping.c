#include <stdio.h>
#include <stdlib.h>

char *mapWordWeights(char **words, int wordsSize, int *weights, int weightsSize)
{
    char *ans = malloc((wordsSize + 1) * sizeof(char));

    for (int i = 0; i < wordsSize; i++)
    {
        const char *word = words[i];
        int t = 0;

        for (int j = 0; word[j] != '\0'; j++)
        {
            t += weights[word[j] - 'a'];
        }
        char c = (char)(97 + (25 - (t % 26)));
        printf(">>> %s %c\n", word, c);
        ans[i] = c;
    }
    ans[wordsSize] = '\0';
    return ans;
}

int main(void)
{
    char *words[] = {"abcd", "def", "xyz"};
    char *ans1 = mapWordWeights(words, 3, (int[]){5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3, 7, 7, 2}, 26);
    printf("Case 1: %s expected %s\n", ans1, "rij");
    free(ans1);
    return 0;
}

/*
Accepted
698 / 698 testcases passed
daam submitted at Jun 13, 2026 19:10

Runtime
0 ms Beats 100.00%

Memory
10.91 MB Beats 75.00%
*/