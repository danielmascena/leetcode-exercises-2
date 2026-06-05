The segmentation fault occurs because of how you are using `memcpy`.

The signature for `memcpy` is:

`void *memcpy(void *dest, constvoid *src, size_t n);` 

In your code, you have `memcpy(war, 0, (end + 1) * sizeof(int));`. You are passing `0` (which is interpreted as `NULL`) as the **source pointer** (`src`). This tells `memcpy` to start reading data from memory address `0`. Since accessing address `0` is prohibited for user applications, the CPU triggers a hardware exception that the OS handles by killing your process with a **segmentation fault**.

The Fixes
Zeroing Memory: To fill a block of memory with zeros, use memset instead of memcpy. Alternatively, use calloc, which allocates and zeros memory in one step.
Memory Leak: You allocate memory for war using malloc but never free it.

