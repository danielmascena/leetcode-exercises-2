#include <limits.h>
#include <stdlib.h>

#define max(a, b) (((a) > (b)) ? (a) : (b))

#define min(a, b) (((a) < (b)) ? (a) : (b))
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *findMissingElements(int *nums, int numsSize, int *returnSize) {
  int *arr;
  int *ans;
  int count = 0;
  int higher = 0;
  int lower = INT_MAX;

  for (int i = 0; i < numsSize; i++) {
    const int num = nums[i];
    higher = max(num, higher);
    lower = min(num, lower);
  }
  int len = (higher - lower) + 1;
  arr = calloc(len, sizeof(int));

  for (int i = 0; i < numsSize; i++) {
    arr[nums[i] - lower]++;
  }
  for (int i = 0; i < len; i++) {
    if (!arr[i])
      count++;
  }
  *returnSize = count;
  ans = calloc(count, sizeof(int));

  for (int i = 0, j = 0; i < len && j < count; i++) {
    if (!arr[i]) {
      ans[j++] = i + lower;
    }
  }
  free(arr);
  return ans;
}
