/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function(board) {
    const n = board.length;
    const mxph = new Map();
    const goUp = (y, x) => (y-1) >= 0 && (board[y][x] !== 'X');
    const goLeft = (y, x) => (x-1) >= 0 && (board[y][x] !== 'X');
    const goUpLeft = (y, x) => (y-1) >= 0 && (x-1) >= 0 && (board[y][x] !== 'X');
    void function dpth(y, x, t=0) {
        if (!y && !x) {
            mxph.set(t, (mxph.get(t) ?? 0) + 1);
            return;
        }
        t += +board[y][x] || 0;

        if (goUp(y,x)) {
            dpth(y-1,x,t);
        }
        if (goLeft(y,x)) {
            dpth(y,x-1,t);
        }
        if (goUpLeft(y,x)) {
            dpth(y-1,x-1,t);
        }
    }(n-1, board.at(-1).indexOf('S'));
    const mxv = Math.max(...mxph.keys(), 0);
    return [mxv, mxph.get(mxv) ?? 0];
};