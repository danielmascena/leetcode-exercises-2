import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3484 lang=typescript
 *
 * [3484] Design Spreadsheet
 */

// @lc code=start
class Spreadsheet {
  private grid: number[][];

  constructor(rows: number) {
    this.grid = Array.from({ length: rows }, () => Array(26).fill(0));
  }

  setCell(cell: string, value: number): void {
    const colIdx = cell.charCodeAt(0) - 65;
    const rowIdx = parseInt(cell.slice(1), 10) - 1;
    this.grid[rowIdx]![colIdx] = value;
  }

  resetCell(cell: string): void {
    const colIdx = cell.charCodeAt(0) - 65;
    const rowIdx = parseInt(cell.slice(1), 10) - 1;
    this.grid[rowIdx]![colIdx] = 0;
  }

  getValue(formula: string): number {
    const [st = "", nd = ""] = formula.slice(1).split("+");
    let val1 = Number(st);
    let val2 = Number(nd);

    if (Number.isNaN(val1)) {
      const colIdx = st.charCodeAt(0) - 65;
      const rowIdx = parseInt(st.slice(1), 10) - 1;
      val1 = this.grid[rowIdx]![colIdx]!;
    }
    if (Number.isNaN(val2)) {
      const colIdx = nd.charCodeAt(0) - 65;
      const rowIdx = parseInt(nd.slice(1), 10) - 1;
      val2 = this.grid[rowIdx]![colIdx]!;
    }
    return val1 + val2;
  }
}

/**
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */
// @lc code=end

const obj = new Spreadsheet(3);
expect(obj.getValue("=5+7")).toBe(12);
obj.setCell("A1", 10);
expect(obj.getValue("=A1+6")).toBe(16);
obj.setCell("B2", 15);
expect(obj.getValue("=A1+B2")).toBe(25);
obj.resetCell("A1");
expect(obj.getValue("=A1+B2")).toBe(15);

/**
 * Accepted
 * 658/658 cases passed (112 ms)
 * Your runtime beats 55 % of typescript submissions
 * Your memory usage beats 85 % of typescript submissions (75.7 MB)
 */
