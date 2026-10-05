import java.util.ArrayDeque;
/*
 * @lc app=leetcode id=20 lang=java
 *
 * [20] Valid Parentheses
 */

// @lc code=start
class Solution {
    public static void main(String[] args) {
        var solution = new Solution();
        var tests = new String[] { "()", "()[]{}", "(]", "([])" };

        for (var test : tests) {
            System.out.printf("%s -> %s%n", test, solution.isValid(test));
        }
    }

    public boolean isValid(String s) {
        var arr = new ArrayDeque<Character>();

        for (var c : s.toCharArray()) {
            // ( [ {
            if (c == '(' || c == '[' || c == '{') {
                arr.add(c);
            } else {
                var lc = arr.pollLast();

                if (lc == null || lc != checkOpen(c)) {
                    return false;
                }
            }
        }
        return arr.isEmpty();
    }

    private char checkOpen(char c) {
        return switch (c) {
            case '}' -> '{';
            case ')' -> '(';
            case ']' -> '[';
            default -> ' ';
        };
    }
}
// @lc code=end

/**
 * Accepted
 * 103/103 cases passed (2 ms)
 * Your runtime beats 94.21 % of java submissions
 * Your memory usage beats 25.52 % of java submissions (43.4 MB)
 */