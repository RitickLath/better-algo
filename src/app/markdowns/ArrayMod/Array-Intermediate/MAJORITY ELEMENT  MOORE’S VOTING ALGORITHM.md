# MAJORITY ELEMENT | MOORE’S VOTING ALGORITHM

Given an array `arr[]`, find the majority element — the element that appears more than `n / 2` times. If no such element exists, return `-1`.

## INTUITION

A majority element dominates the array — it **must occur more than half** the time. For any valid array of size `n`, there can **only be one majority element** at most.

## BRUTE FORCE SOLUTION: NESTED LOOP

Use two nested loops to count the occurrences of each element.

```java
public static int findMajorityElementBrute(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n; i++) {
        int count = 0;
        for (int j = 0; j < n; j++) {
            if (arr[j] == arr[i]) {
                count++;
            }
        }
        if (count > n / 2) {
            return arr[i];
        }
    }
    return -1; // No majority element found
}
```

### COMPLEXITY

- Time: O(n²)
- Space: O(1)

> Inefficient for large arrays; use only for learning basics or in constrained environments.

## OPTIMAL SOLUTION: MOORE’S VOTING ALGORITHM

The Moore’s Voting Algorithm is used to find a majority element in an array. A majority element is an element that appears more than `n/2` times in the array, where `n` is the size of the array.

The algorithm works in two phases:

1. Candidate selection
2. Candidate verification.

### CANDIDATE SELECTION PHASE:

- Use a `candidate` variable to store a potential majority element.
- Use a `count` variable to track the balance of the candidate.
- Traverse the array:
  - If `count` is 0, set the current element as the `candidate` and initialize `count` to 1.
  - Otherwise, increment `count` if the current element matches the `candidate`, or decrement `count` otherwise.

### CANDIDATE VERIFICATION PHASE:

- Verify if the `candidate` is truly the majority element by counting its occurrences in the array.
- If the count of the `candidate` is greater than `n/2`, it is the majority element; otherwise, there is no majority element.

### EXAMPLE ILLUSTRATION:

Consider the array: `[3, 1, 3, 3, 2, 3, 3]`

Step 1: Candidate Selection

- Traverse the array while maintaining `candidate` and `count`:

| Index | Element | `candidate` | `count` | Explanation                                                               |
| ----- | ------- | ----------- | ------- | ------------------------------------------------------------------------- |
| 0     | 3       | 3           | 1       | First element is selected as the candidate with count initialized to 1.   |
| 1     | 1       | 3           | 0       | Element `1` is different; decrement count. When `count` becomes 0, reset. |
| 2     | 3       | 3 (NEW)     | 1       | Count is 0, so pick `3` as the new candidate and reset count to 1.        |
| 3     | 3       | 3           | 2       | Element matches `candidate`; increment count.                             |
| 4     | 2       | 3           | 1       | Element `2` is different; decrement count.                                |
| 5     | 3       | 3           | 2       | Element matches `candidate`; increment count.                             |
| 6     | 3       | 3           | 3       | Element matches `candidate`; increment count.                             |

Step 2: Candidate Verification

- Count occurrences of the candidate (`3`) in the array:
  - Occurrences of `3`: 5
- Compare with `n/2`:
  - `n = 7`, so `n/2 = 3.5`.
  - `5 > 3.5`, so `3` is the majority element.

```java
public static int findMajorityElementOptimize(int[] arr) {
    int element = arr[0]; // Candidate for majority element
    int count = 1;       // Balance counter

    // Phase 1: Find a candidate for the majority element
    for (int i = 1; i < arr.length; i++) {
        if (count == 0) {
            element = arr[i]; // Reset candidate
        }

        if (arr[i] == element) {
            count++;
        } else {
            count--;
        }
    }

    // Phase 2: Validate the candidate
    count = 0;
    for (int num : arr) {
        if (num == element) {
            count++;
        }
    }

    // Return the candidate if it is a valid majority element
    return count > arr.length / 2 ? element : -1;
}
```

Time Complexity: O(N)

Space Complexity: O(1)
