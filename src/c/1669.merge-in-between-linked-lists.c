#include <stdio.h>

struct ListNode
{
    int val;
    struct ListNode *next;
};

/*
 * @lc app=leetcode id=1669 lang=c
 *
 * [1669] Merge In Between Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

struct ListNode *mergeInBetween(struct ListNode *list1, int a, int b, struct ListNode *list2)
{
    struct ListNode *node1 = list1;
    struct ListNode *node2 = list2;

    for (int i = 0; i <= b && node1->next; i++)
    {
        struct ListNode *next = node1->next;

        if (i == a - 1)
        {
            node1->next = node2;
        }
        node1 = next;
    }
    while (node2->next)
        node2 = node2->next;

    node2->next = node1;

    return list1;
}
// @lc code=end

int main(void)
{
    struct ListNode case1_list1_5 = {.val = 5, .next = NULL};
    struct ListNode case1_list1_4 = {.val = 9, .next = &case1_list1_5};
    struct ListNode case1_list1_3 = {.val = 6, .next = &case1_list1_4};
    struct ListNode case1_list1_2 = {.val = 13, .next = &case1_list1_3};
    struct ListNode case1_list1_1 = {.val = 1, .next = &case1_list1_2};
    struct ListNode case1_list1_0 = {.val = 10, .next = &case1_list1_1};

    struct ListNode case1_list2_2 = {.val = 1000002, .next = NULL};
    struct ListNode case1_list2_1 = {.val = 1000001, .next = &case1_list2_2};
    struct ListNode case1_list2_0 = {.val = 1000000, .next = &case1_list2_1};

    struct ListNode *ans1 = mergeInBetween(&case1_list1_0, 3, 4, &case1_list2_0);
    printf("Case 1: answer ");

    while (ans1)
    {
        printf("%d ", ans1->val);
        ans1 = ans1->next;
    }
    puts(".");
    return 0;
}

/*
Accepted
61/61 cases passed (134 ms)
Your runtime beats 60.94 % of c submissions
Your memory usage beats 44.79 % of c submissions (38.1 MB)
*/