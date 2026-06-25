#include <stdio.h>
#include <stdlib.h>

struct ListNode
{
    int val;
    struct ListNode *next;
};

/*
 * @lc app=leetcode id=24 lang=c
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode *swapPairs(struct ListNode *head)
{
    size_t size = 0;
    struct ListNode *node = head;

    while (node)
    {
        node = node->next;
        size++;
    }
    if (size < 2)
    {
        return head;
    }
    struct ListNode **nodes = malloc(size * sizeof(struct ListNode));
    int st = size - 1;
    node = head;

    for (int i = 0; i < size; i++, node = node->next)
    {
        nodes[i] = node;
    }
    if (size % 2 == 0)
    {
        node = NULL;
    }
    else
    {
        node = nodes[st--];
    }
    while (st > 0)
    {
        nodes[st]->next = nodes[st - 1];
        nodes[st - 1]->next = node;
        node = nodes[st];
        st -= 2;
    }
    return nodes[1];
}
// @lc code=end

int main(void)
{
    struct ListNode node1_4 = {.val = 4, .next = NULL};
    struct ListNode node1_3 = {.val = 3, .next = &node1_4};
    struct ListNode node1_2 = {.val = 2, .next = &node1_3};
    struct ListNode node1_1 = {.val = 1, .next = &node1_2};
    struct ListNode *ans1 = swapPairs(&node1_1);
    puts("Case 1:");

    while (ans1)
    {
        printf("%d ", ans1->val);
        ans1 = ans1->next;
    }
    struct ListNode node2_3 = {.val = 3, .next = NULL};
    struct ListNode node2_2 = {.val = 2, .next = &node2_3};
    struct ListNode node2_1 = {.val = 1, .next = &node2_2};
    struct ListNode *ans2 = swapPairs(&node2_1);
    puts("\nCase 2:");
    while (ans2)
    {
        printf("%d ", ans2->val);
        ans2 = ans2->next;
    }
    return 0;
}

/*
Accepted
55/55 cases passed (0 ms)
Your runtime beats 100 % of c submissions
Your memory usage beats 6.08 % of c submissions (9.8 MB)
*/