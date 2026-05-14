import { expect } from "bun:test";

export class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

export class TreeNode {
  constructor(
    public val = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}

export function contructList(arr: number[]): ListNode {
  let head = new ListNode(arr[0]);
  let node = head;

  for (let i = 1, n = arr.length; i < n; i++) {
    const curr = new ListNode(arr[i]);
    node.next = curr;
    node = curr;
  }
  return head;
}

export function reconstructList(head: ListNode | null): number[] {
  const arr: number[] = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

export function construct(root: null | TreeNode): (null | number)[] {
  const arr: (null | number)[] = [];
  const queue = [root];

  while (queue.length) {
    const node = queue.shift()!;
    arr.push(node?.val ?? null);

    if (node) {
      queue.push(node.left, node.right);
    }
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== null) {
      break;
    }
    arr.pop();
  }
  return arr;
}

export function reconstruct(arr: (null | number)[]): TreeNode | null {
  const queue = [...arr];
  if (!queue.length) {
    return null;
  }
  let node = new TreeNode(queue.shift()!);
  const root = node;
  const stk = [node];

  while (queue.length && stk.length) {
    const node = stk.shift()!;
    const left = queue.shift() ?? null;
    const right = queue.shift() ?? null;

    if (left !== null) {
      const lnode = new TreeNode(left);
      node.left = lnode;
      stk.push(lnode);
    }
    if (right !== null) {
      const rnode = new TreeNode(right);
      node.right = rnode;
      stk.push(rnode);
    }
  }
  return root;
}

const mockTreeNode = new TreeNode(
  1,
  new TreeNode(2),
  new TreeNode(3, null, new TreeNode(4))
);

const ans = [1, 2, 3, null, null, null, 4];
expect(reconstruct(ans)).toMatchObject(mockTreeNode);
expect(construct(mockTreeNode)).toEqual(ans);
