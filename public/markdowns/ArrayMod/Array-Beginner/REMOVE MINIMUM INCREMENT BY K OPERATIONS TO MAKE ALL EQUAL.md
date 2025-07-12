# MINIMUM INCREMENT BY K OPERATIONS TO MAKE ALL EQUAL

Given an array `arr[]` and an integer `k`. You can perform an operation in which you can increment any of the number in the array by `k`. Find the `minimum` number of operations needed to make all the elements of array equal.

Note: If it is not possible to make all elements of array equal return -1.

### EXAMPLE

```jsx
Input: arr[] = [4, 4, 4, 2], k = 2
Output: 1
Explanation: We can increment the element at last index of the array
by 2 to make all the elements equal to 4.
```

```jsx
Input: arr[] = [4, 2, 6, 8], k = 3
Output: -1
Explanation: It can be proven that these elements can't be made equal
by applying any number of operations.
```

```jsx
Input: arr[] = [4, 7, 19, 16], k = 3
Output: 10
```

### INTUTION

1. Find the max element in the array, this is the target value.
2. For each element, compute the difference from `max`.
3. If the difference is not divisible by `k`, return `1` (can't reach max using `+k` steps).
4. If divisible, count how many `+k` steps are needed: `diff / k`.
5. Sum all steps → this is the minimum number of operations required.

### CODE

```jsx
class Solution {

    static int minOps(int arr[], int k) {

        int max = arr[0];
        int ans = 0;
        for(int i = 0; i<arr.length; i++){
            max = Math.max(arr[i], max);
        }

        for(int i = 0; i<arr.length; i++){
            int diff = max - arr[i];

            if(diff % k == 0){
                ans += diff/k;
            }
            else{
                return -1;
            }
        }
        return ans;
    }
}
```
