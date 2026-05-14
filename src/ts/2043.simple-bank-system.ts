import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2043 lang=typescript
 *
 * [2043] Simple Bank System
 */

// @lc code=start
class Bank {
  private n: number;
  constructor(private balance: number[]) {
    this.n = balance.length;
  }

  transfer(account1: number, account2: number, money: number): boolean {
    const { n, balance } = this;

    if (account1 > n || account2 > n || balance[account1 - 1] < money) {
      return false;
    }
    balance[account1 - 1] -= money;
    balance[account2 - 1] += money;
    return true;
  }

  deposit(account: number, money: number): boolean {
    if (account > this.n) {
      return false;
    }
    this.balance[account - 1] += money;
    return true;
  }

  withdraw(account: number, money: number): boolean {
    const { balance, n } = this;

    if (account > n || balance[account - 1] < money) {
      return false;
    }
    balance[account - 1] -= money;
    return true;
  }
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
// @lc code=end

const params = [
  [10, 100, 20, 50, 30],
  [3, 10],
  [5, 1, 20],
  [5, 20],
  [3, 4, 15],
  [10, 50],
];
const obj1 = new Bank(params[0]);
expect(obj1.withdraw(...params[1])).toBeTrue();
expect(obj1.transfer(...params[2])).toBeTrue();
expect(obj1.deposit(...params[3])).toBeTrue();
expect(obj1.transfer(...params[4])).toBeFalse();
expect(obj1.withdraw(...params[5])).toBeFalse();

/**
 * Accepted
 * 23/23 cases passed (31 ms)
 * Your runtime beats 41.8 % of typescript submissions
 * Your memory usage beats 57.38 % of typescript submissions (89.1 MB)
 */
