#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Comparison function: returns negative if a < b, zero if a == b, positive if a > b
int compare(const void *a, const void *b)
{
    return (*(int *)a - *(int *)b);
}

int main(void)
{
    // the compiler automatically adds the '\0' at the end
    // of the literal, `sizeof` includes it.
    const char word[] = "hello";
    printf("Logical length: %zu\n", strlen(word));
    printf("Memory size: %zu\n", sizeof(word));

    /*
        Why does this matter?

        The null terminator is the "end-of-file" marker for strings. Without it, functions like printf or strlen wouldn't know where the string ends in RAM and would keep reading into adjacent memory until they either crash (segmentation fault) or find a random zero byte.
        This is why, when you allocate memory for a string manually, you must always add 1 to the length:

        char *copy = malloc(strlen(original) + 1);
    */

    // Option 2: Initialize at declaration
    int arr[26] = {[0 ... 25] = 32};
    for (int i = 0; i < 26; i++)
    {
        printf("%d ", arr[i]);
    }
    puts("");

    int nums[] = {7, 9, 3, 1};
    int n = sizeof(nums) / sizeof(nums[0]);

    // qsort(array, number_of_elements, size_of_each_element, comparison_function)
    qsort(nums, n, sizeof(int), compare);

    printf("Sorted nums: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", nums[i]);
    }
    puts("");

    typedef struct Name
    {
        int v;
    } name;
    name nom = {2};

    int v = 123455;
    char sv[12];
    snprintf(sv, sizeof(sv), "%d", v);
    printf("The converted string %s\n", sv);

    int x = 9;
    int *y;
    y = &x;
    printf("x: %d", *y);

    return 0;
}