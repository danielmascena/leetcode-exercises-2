import { expect } from "bun:test";
import { ListNode, contructList, reconstructList } from "./utils/utils";
/*
 * @lc app=leetcode id=3217 lang=typescript
 *
 * [3217] Delete Nodes From Linked List Present in Array
 */

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

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  const remove = new Set(nums);
  const fakeHead = new ListNode();
  let node: ListNode | null = fakeHead;

  while (head) {
    const { val } = head;

    if (!remove.has(val)) {
      const curr = new ListNode(val);
      node.next = curr;
      node = curr;
    }
    head = head.next;
  }
  return fakeHead.next;
}
// @lc code=end

expect(
  reconstructList(modifiedList([1, 2, 3], contructList([1, 2, 3, 4, 5])))
).toEqual([4, 5]);
expect(
  reconstructList(modifiedList([1], contructList([1, 2, 1, 2, 1, 2])))
).toEqual([2, 2, 2]);
expect(reconstructList(modifiedList([5], contructList([1, 2, 3, 4])))).toEqual([
  1, 2, 3, 4,
]);

/**
 * Accepted
 * 582/582 cases passed (102 ms)
 * Your runtime beats 12.5 % of typescript submissions
 * Your memory usage beats 25 % of typescript submissions (105.5 MB)
 */
