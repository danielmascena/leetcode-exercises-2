import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3408 lang=typescript
 *
 * [3408] Design Task Manager
 */

// @lc code=start

// value shape for tasks

// value shape for tasks
type Task = { userId: number; taskId: number; priority: number };

class TaskManager {
  private taskMap = new Map<number, Task>();
  private priority = -1;
  private userId = -1;
  private taskId = -1;

  constructor(tasks: number[][]) {
    let priority1 = -1;
    let userId1 = -1;
    let taskId1 = -1;
    tasks.forEach(([userId, taskId, priority]) => {
      this.taskMap.set(taskId!, { userId, taskId, priority });
      if (
        priority > priority1 ||
        (priority === priority1 && taskId > taskId1)
      ) {
        priority1 = priority;
        taskId1 = taskId;
        userId1 = userId;
      }
    });

    this.priority = priority1;
    this.taskId = taskId1;
    this.userId = userId1;
  }

  add(userId: number, taskId: number, priority: number): void {
    this.taskMap.set(taskId, { userId, taskId, priority });
    if (
      this.priority >= 0 &&
      (priority > this.priority ||
        (priority === this.priority && taskId > this.taskId))
    ) {
      this.priority = priority;
      this.taskId = taskId;
      this.userId = userId;
    }
  }

  edit(taskId: number, newPriority: number): void {
    const obj = this.taskMap.get(taskId);
    if (!obj) return; // guard: Map.get can be undefined

    if (
      this.taskId >= 0 &&
      (newPriority > this.priority ||
        (newPriority === this.priority && taskId > this.taskId))
    ) {
      this.priority = newPriority;
      this.taskId = taskId;
      this.userId = obj.userId;
    } else if (obj.taskId === this.taskId && newPriority < obj.priority) {
      this.taskId = -1;
      this.userId = -1;
      this.priority = -1;
    }
    obj.priority = newPriority;
  }

  rmv(taskId: number): void {
    if (this.taskId === taskId) {
      this.taskId = -1;
      this.userId = -1;
      this.priority = -1;
    }
    this.taskMap.delete(taskId);
  }

  execTop(): number {
    const { userId, taskId } = this;
    let userId1 = -1;
    let taskId1 = -1;
    let priority1 = -1;
    let userId2 = -1;
    let taskId2 = -1;
    let priority2 = -1;

    if (taskId !== -1) {
      this.taskMap.delete(taskId);
    }
    this.taskMap.forEach(({ taskId, userId, priority }) => {
      if (
        priority > priority1 ||
        (priority === priority1 && taskId > taskId1)
      ) {
        if (
          priority1 > priority2 ||
          (priority1 === priority2 && taskId1 > taskId2)
        ) {
          priority2 = priority1;
          taskId2 = taskId1;
          userId2 = userId1;
        }
        priority1 = priority;
        taskId1 = taskId;
        userId1 = userId;
      } else if (
        priority > priority2 ||
        (priority === priority2 && taskId > taskId2)
      ) {
        priority2 = priority;
        taskId2 = taskId;
        userId2 = userId;
      }
    });
    if (taskId !== -1) {
      this.userId = userId1;
      this.taskId = taskId1;
      this.priority = priority1;
      return userId;
    } else {
      this.taskMap.delete(taskId1);
      this.userId = userId2;
      this.taskId = taskId2;
      this.priority = priority2;
      return userId1;
    }
  }
}
/**
 * Your TaskManager object will be instantiated and called as such:
 * var obj = new TaskManager(tasks)
 * obj.add(userId,taskId,priority)
 * obj.edit(taskId,newPriority)
 * obj.rmv(taskId)
 * var param_4 = obj.execTop()
 */
// @lc code=end

const actions = [
  "TaskManager",
  "add",
  "edit",
  "execTop",
  "rmv",
  "add",
  "execTop",
];
const data = [
  [
    // [userId, taskId, priority]
    [1, 101, 10],
    [2, 102, 20],
    [3, 103, 15],
  ],
  [4, 104, 5],
  [102, 8],
  [],
  [101],
  [5, 105, 15],
  [],
];
const answers = [null, null, null, 3, null, null, 5];
const genTMMet = (tm: TaskManager) => {
  return {
    add: (...a: Parameters<TaskManager["add"]>) => tm.add(...a),
    edit: (...a: Parameters<TaskManager["edit"]>) => tm.edit(...a),
    rmv: (...a: Parameters<TaskManager["rmv"]>) => tm.rmv(...a),
    execTop: (...a: Parameters<TaskManager["execTop"]>) => tm.execTop(...a),
  };
};
let methodMap = genTMMet(new TaskManager(data[0] as number[][]));

for (let i = 1; i < answers.length; i++) {
  const action = actions[i];
  let res: string | null = null;

  switch (action) {
    case "add":
      methodMap.add(...(data[i] as Parameters<TaskManager["add"]>));
      break;
    case "edit":
      methodMap.edit(...(data[i] as Parameters<TaskManager["edit"]>));
      break;
    case "rmv":
      methodMap.rmv(...(data[i] as Parameters<TaskManager["rmv"]>));
      break;

    case "execTop":
      expect(
        methodMap.execTop(...(data[i] as Parameters<TaskManager["execTop"]>))
      ).toBe(answers[i] as number);
      break;
  }
}

const actions2 = [
  "TaskManager",
  "add",
  "edit",
  "execTop",
  "rmv",
  "add",
  "execTop",
];
const data2 = [
  [
    // [userId, taskId, priority]
    [1, 101, 8],
    [2, 102, 20],
    [3, 103, 5],
  ],
  [4, 104, 5],
  [102, 9],
  [],
  [101],
  [50, 101, 8],
  [],
];
const answers2 = [null, null, null, 2, null, null, 50];
methodMap = genTMMet(new TaskManager(data2[0] as number[][]));

for (let i = 1; i < answers2.length; i++) {
  const action = actions2[i];
  let res: string | null = null;

  switch (action) {
    case "add":
      methodMap.add(...(data2[i] as Parameters<TaskManager["add"]>));
      break;
    case "edit":
      methodMap.edit(...(data2[i] as Parameters<TaskManager["edit"]>));
      break;
    case "rmv":
      methodMap.rmv(...(data2[i] as Parameters<TaskManager["rmv"]>));
      break;

    case "execTop":
      expect(
        methodMap.execTop(...(data2[i] as Parameters<TaskManager["execTop"]>))
      ).toBe(answers2[i] as number);
      break;
  }
}
// Time Limit Exceeded
