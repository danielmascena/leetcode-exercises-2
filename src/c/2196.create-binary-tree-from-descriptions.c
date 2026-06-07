#include <stdio.h>
#include <stdlib.h>

struct TreeNode
{
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

/*
 * @lc app=leetcode id=2196 lang=c
 *
 * [2196] Create Binary Tree From Descriptions
 */

// @lc code=start
#define max(a, b) ((a) > (b) ? (a) : (b))

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
struct TreeNode *createBinaryTree(int **descriptions, int descriptionsSize, int *descriptionsColSize)
{
    struct TreeNode *root = malloc(sizeof(struct TreeNode));
    int maxval = 0;

    for (int i = 0; i < descriptionsSize; i++)
    {
        maxval = max(max(descriptions[i][1], descriptions[i][0]), maxval);
    }
    struct TreeNode **nodes = calloc(maxval, sizeof(struct TreeNode *));
    int *appears = calloc(maxval, sizeof(int));

    for (int i = 0; i < descriptionsSize; i++)
    {
        int parent = descriptions[i][0];
        int child = descriptions[i][1];

        if (!nodes[parent - 1])
        {
            nodes[parent - 1] = malloc(sizeof(struct TreeNode));
            *nodes[parent - 1] = (struct TreeNode){parent, NULL, NULL};
        }
        if (!nodes[child - 1])
        {
            nodes[child - 1] = malloc(sizeof(struct TreeNode));
            *nodes[child - 1] = (struct TreeNode){child, NULL, NULL};
        }
        appears[child - 1] -= 10;
        appears[parent - 1]++;
    }

    for (int i = 0; i < descriptionsSize; i++)
    {
        const int parent = descriptions[i][0];
        const int child = descriptions[i][1];
        const int isLeft = descriptions[i][2];
        struct TreeNode *parentNode = nodes[parent - 1];
        struct TreeNode *childNode = nodes[child - 1];

        if (isLeft)
        {
            parentNode->left = childNode;
        }
        else
        {
            parentNode->right = childNode;
        }
    }
    for (int i = 0; i < maxval; i++)
    {
        if (appears[i] >= 1)
        {
            return nodes[i];
        }
    }
    return NULL;
}
// @lc code=end

void printTree(struct TreeNode *node)
{
    if (node)
    {
        printf(" %d ", node->val);
        printTree(node->left);
        printTree(node->right);
    }
}
int main(void)
{
    int **descriptions = malloc(5 * sizeof(int *));
    descriptions[0] = (int[]){20, 15, 1};
    descriptions[1] = (int[]){20, 17, 0};
    descriptions[2] = (int[]){50, 20, 1};
    descriptions[3] = (int[]){50, 80, 0};
    descriptions[4] = (int[]){80, 19, 1};
    int colSizes[] = {3, 3, 3, 3, 3};
    struct TreeNode *root1 = createBinaryTree(descriptions, 5, colSizes);
    printf("[");
    printTree(root1);
    puts("]\n Expected [50,20,80,15,17,19]");
    return 0;
}

/*
Accepted
85/85 cases passed (63 ms)
Your runtime beats 30.77 % of c submissions
Your memory usage beats 7.69 % of c submissions (131.5 MB)
*/