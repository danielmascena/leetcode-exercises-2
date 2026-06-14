#include <stdio.h>
#include <stdlib.h>

struct ListNode
{
    int val;
    struct ListNode *next;
};

/*
 * @lc app=leetcode id=2130 lang=c
 *
 * [2130] Maximum Twin Sum of a Linked List
 */

// @lc code=start
#define max(a, b) (((a) > (b)) ? (a) : (b))
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
int pairSum(struct ListNode *head)
{
    int ans = 0;
    int n = 0;
    int half;
    int *pre;
    struct ListNode *node = head;

    for (; node; n++, node = node->next)
        ;

    half = n / 2;
    pre = calloc(half, sizeof(int));
    node = head;

    for (int i = 0; i < half; i++, node = node->next)
    {
        pre[i] = node->val;
    }
    for (int i = half - 1; i >= 0; i--, node = node->next)
    {
        ans = max(ans, pre[i] + node->val);
    }
    return ans;
}
// @lc code=end

int main(void)
{
    struct ListNode node1_4 = {.val = 1, .next = NULL};
    struct ListNode node1_3 = {.val = 2, .next = &node1_4};
    struct ListNode node1_2 = {.val = 4, .next = &node1_3};
    struct ListNode node1_1 = {.val = 5, .next = &node1_2};
    int ans1 = pairSum(&node1_1);
    printf("Case 1: answer %d\n", ans1 == 6);

    struct ListNode node3_2 = {.val = 100000, .next = NULL};
    struct ListNode node3_1 = {.val = 1, .next = &node3_2};
    int ans2 = pairSum(&node3_1);
    printf("Case 2: answer %d\n", ans2 == 100001);
    return 0;
}

/*
Accepted
46/46 cases passed (16 ms)
Your runtime beats 5.47 % of c submissions
Your memory usage beats 11.94 % of c submissions (53.4 MB)
*/