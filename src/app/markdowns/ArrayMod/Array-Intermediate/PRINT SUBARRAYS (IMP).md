# PRINT SUBARRAYS (IMP.)

Given an array of integers, print all possible subarrays. A subarray is a `continuous` part of the array (not just any combination of elements).

Example Input:

```java
int[] arr = {1, 2, 3};
```

Expected Output:

```java
[1]
[1, 2]
[1, 2, 3]
[2]
[2, 3]
[3]
```

### LOGIC:

- A subarray is defined by two indices: `start` and `end`
- Loop start from 0 to n-1
- For each start, loop end from start to n-1
- Print elements from start to end using a third loop

### CODE:

```java
public class PrintSubarrays {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3}; // Example array

        int n = arr.length;

        // Loop for start index
        for (int start = 0; start < n; start++) {
            // Loop for end index
            for (int end = start; end < n; end++) {
                // Print current subarray
                for (int i = start; i <= end; i++) {
                    System.out.print(arr[i] + " ");
                }
                System.out.println(); // Move to next line after printing one subarray
            }
        }
    }
}
```

Time: O(n³)

Space: O(1)

## OPTIMIZED APPROCH

```jsx
// User function Template for Java
class Solution {

    public List<List<Integer>> getSubArrays(int[] arr) {

        List<List<Integer>> outer = new ArrayList<>();

        for(int start = 0 ; start<arr.length; start++){

            List<Integer> inner = new ArrayList<>();
            for(int end = start; end < arr.length; end++){
                inner.add(arr[end]);
                outer.add(new ArrayList<>(inner));
            }

        }
        return outer;
    }
}
```
