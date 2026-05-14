import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3508 lang=typescript
 *
 * [3508] Implement Router
 */

// @lc code=start
class Router {
  private seen = new Set<string>();
  private queue: string[] = [];
  private grpDest = new Map<number, number[]>();
  private currTotal = 0;

  constructor(private memoryLimit: number) {}

  addPacket(source: number, destination: number, timestamp: number): boolean {
    const idk = `${source}-${destination}-${timestamp}`;
    const { seen, queue, memoryLimit, grpDest } = this;

    if (seen.has(idk)) {
      return false;
    }
    if (this.currTotal === memoryLimit && queue.length) {
      const fst = queue.shift() ?? "";
      const [, b = "", c = ""] = fst.split("-");
      const l = grpDest.get(+b) ?? [];
      const i = l.findIndex((ts) => +c === ts);
      l.splice(i, 1);
      seen.delete(fst);
      this.currTotal--;
    }
    queue.push(idk);
    seen.add(idk);
    grpDest.set(destination, [...(grpDest.get(destination) ?? []), timestamp]);
    this.currTotal++;
    return true;
  }

  forwardPacket(): number[] {
    const { grpDest, seen, queue } = this;
    let fp = queue.shift() ?? "";
    seen.delete(fp);

    if (fp) {
      const [a = "", b = "", c = ""] = fp.split("-");
      const l = grpDest.get(+b) ?? [];
      const i = l.findIndex((ts) => +c === ts);
      if (i >= 0) {
        l.splice(i, 1);
        this.currTotal--;
      }
      return [+a, +b, +c];
    }
    return [];
  }

  getCount(destination: number, startTime: number, endTime: number): number {
    const list = this.grpDest.get(destination);
    let count = 0;

    list?.forEach((ts) => {
      if (ts >= startTime && ts <= endTime) {
        count++;
      }
    });
    return count;
  }
}

/**
 * Your Router object will be instantiated and called as such:
 * var obj = new Router(memoryLimit)
 * var param_1 = obj.addPacket(source,destination,timestamp)
 * var param_2 = obj.forwardPacket()
 * var param_3 = obj.getCount(destination,startTime,endTime)
 */
// @lc code=end

// test 726
let obj = new Router(5);
expect(obj.addPacket(4, 2, 1)).toBeTrue();
expect(obj.getCount(2, 1, 1)).toBe(1);
expect(obj.forwardPacket()).toEqual([4, 2, 1]);
expect(obj.getCount(2, 1, 1)).toBe(0);
expect(obj.addPacket(4, 2, 1)).toBeTrue();
expect(obj.getCount(2, 1, 1)).toBe(1);

// test 707
obj = new Router(2);
expect(obj.addPacket(3, 1, 3)).toBeTrue();
expect(obj.addPacket(1, 2, 3)).toBeTrue();
expect(obj.addPacket(4, 5, 3)).toBeTrue();
expect(obj.getCount(1, 2, 3)).toBe(0);

// Time Limit Exceeded
// 745/751 cases passed (N/A)
