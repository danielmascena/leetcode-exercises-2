/*
 * @lc app=leetcode id=1470 lang=c
 *
 * [1470] Shuffle the Array
 */

#include "unity.h"
#include <stdlib.h>

// @lc code=start

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *shuffle(int *nums, int numsSize, int n, int *returnSize)
{
    int *ans = malloc(numsSize * sizeof(int));
    const int half = numsSize / 2;

    for (int j = 0, i = 0; i < half; i++)
    {
        ans[j++] = nums[i];
        ans[j++] = nums[i + half];
    }
    *returnSize = numsSize;
    return ans;
}
// @lc code=end

/* Unity Required Functions */
void setUp(void)
{
    /* This is run before EACH test */
}

void tearDown(void)
{
    /* This is run after EACH test */
}

/* Test Cases */
void test_shuffle_should_interleave_elements_correctly_test_case_one(void)
{
    int nums[] = {2, 5, 1, 3, 4, 7};
    int n = 3;
    int expected[] = {2, 3, 5, 4, 1, 7};
    int returnSize;

    int *actual = shuffle(nums, 6, n, &returnSize);

    TEST_ASSERT_EQUAL_INT_ARRAY(expected, actual, 6);
    free(actual);
}

void test_shuffle_should_interleave_elements_correctly_test_case_two(void)
{
    int nums[] = {1, 2, 3, 4, 4, 3, 2, 1};
    int n = 4;
    int expected[] = {1, 4, 2, 3, 3, 2, 4, 1};
    int returnSize;

    int *actual = shuffle(nums, 8, n, &returnSize);

    TEST_ASSERT_EQUAL_INT_ARRAY(expected, actual, 8);
    free(actual);
}

void test_shuffle_should_interleave_elements_correctly_test_case_three(void)
{
    int nums[] = {1, 1, 2, 2};
    int n = 2;
    int expected[] = {1, 2, 1, 2};
    int returnSize;

    int *actual = shuffle(nums, 4, n, &returnSize);

    TEST_ASSERT_EQUAL_INT_ARRAY(expected, actual, 4);

    free(actual);
}

int main(void)
{
    UNITY_BEGIN();
    RUN_TEST(test_shuffle_should_interleave_elements_correctly_test_case_one);
    RUN_TEST(test_shuffle_should_interleave_elements_correctly_test_case_two);
    RUN_TEST(test_shuffle_should_interleave_elements_correctly_test_case_three);
    return UNITY_END();
}

/**
 * (base) ➜  leetcode-exercises-2 git:(main) ✗ gcc -I./src/c 1470.shuffle-the-array.c src/c/unity.c -o test_shuffle

(base) ➜  leetcode-exercises-2 git:(main) ✗ ./test_shuffle
1470.shuffle-the-array.c:84:test_shuffle_should_interleave_elements_correctly_test_case_one:PASS
1470.shuffle-the-array.c:85:test_shuffle_should_interleave_elements_correctly_test_case_two:PASS
1470.shuffle-the-array.c:86:test_shuffle_should_interleave_elements_correctly_test_case_three:PASS
 */

/*
Accepted
53/53 cases passed (9 ms)
Your runtime beats 89.6 % of c submissions
Your memory usage beats 29.35 % of c submissions (12.4 MB)
*/