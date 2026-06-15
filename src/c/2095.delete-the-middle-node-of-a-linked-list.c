#include <stdio.h>

struct ListNode
{
    int val;
    struct ListNode *next;
};

/*
 * @lc app=leetcode id=2095 lang=c
 *
 * [2095] Delete the Middle Node of a Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode *deleteMiddle(struct ListNode *head)
{
    if (head == NULL || head->next == NULL)
    {
        return NULL;
    }
    int n = 0;
    struct ListNode *node = head;
    struct ListNode *prev = NULL;

    for (; node; n++, node = node->next)
        ;

    node = head;

    for (int i = 0; i < (n / 2); i++, prev = node, node = node->next)
        ;

    prev->next = node->next;

    return head;
}
// @lc code=end

int main(void)
{
    struct ListNode node4_4 = {.val = 4, .next = NULL};
    struct ListNode node4_3 = {.val = 3, .next = &node4_4};
    struct ListNode node4_2 = {.val = 2, .next = &node4_3};
    struct ListNode node4_1 = {.val = 1, .next = &node4_2};
    struct ListNode *ans1 = deleteMiddle(&node4_1);
    printf("Case 1: answer ");
    while (ans1)
    {
        printf("%d ", ans1->val);
        ans1 = ans1->next;
    }
    puts("");
    return 0;
}

/*
Accepted
70/70 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 53.83 % of c submissions (83.2 MB)
*/