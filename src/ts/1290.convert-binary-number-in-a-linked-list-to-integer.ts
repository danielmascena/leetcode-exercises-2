/*
 * @lc app=leetcode id=1290 lang=typescript
 *
 * [1290] Convert Binary Number in a Linked List to Integer
 */

import { ListNode } from "./utils/utils";

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getDecimalValue(head: ListNode | null): number {
  let ans = "";

  while (head) {
    ans += head.val;
    head = head.next;
  }
  return parseInt(ans, 2);
}
// @lc code=end

console.log(getDecimalValue(new ListNode(1, new ListNode(0, new ListNode(1)))));

/**
 * Accepted
 * 102/102 cases passed (1 ms)
 * Your runtime beats 15.25 % of typescript submissions
 * Your memory usage beats 62.71 % of typescript submissions (55 MB)
 */
