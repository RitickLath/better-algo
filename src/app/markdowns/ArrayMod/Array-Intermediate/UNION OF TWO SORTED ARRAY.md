# UNION OF TWO SORTED ARRAY

## PROBLEM STATEMENT

### INPUT

```java
arr1 = {1, 1, 2, 3, 4, 5};
arr2 = {2, 3, 4, 4, 5};
```

Find the **union** of the two arrays (i.e., all distinct elements from both arrays) in **sorted order**.

### EXPECTED OUTPUT

```java
union = {1, 2, 3, 4, 5}
```

## OPTIMAL APPROACH: TWO POINTERS

### CORE IDEA

Use **two pointers** to traverse both sorted arrays, and build a result list while **skipping duplicates**. This ensures all unique elements are collected in a single pass.

## STEP-BY-STEP PLAN

### 1. INITIALIZE

- Two pointers: `i = 0` (for `arr1`), `j = 0` (for `arr2`)
- One result list: `ArrList = []` to store the union result

### 2. TRAVERSE BOTH ARRAYS

Use a `while` loop to compare and process elements:

| CASE                 | ACTION                                                       |
| -------------------- | ------------------------------------------------------------ |
| `arr1[i] < arr2[j]`  | Add `arr1[i]` to result if not duplicate, increment `i`      |
| `arr2[j] < arr1[i]`  | Add `arr2[j]` to result if not duplicate, increment `j`      |
| `arr1[i] == arr2[j]` | Add one of them if not duplicate, increment both `i` and `j` |

### 3. HANDLE REMAINING ELEMENTS

Once one array is fully traversed:

- Continue processing remaining elements in `arr1` (checking for duplicates)
- Continue processing remaining elements in `arr2` (checking for duplicates)

### 4. CONVERT RESULT TO ARRAY

Convert the `ArrayList<Integer>` to an `int[]` and return it as the final result.

## JAVA CODE

```java
public static int[] unionOptimal(int[] arr1, int[] arr2) {
    int i = 0, j = 0;
    ArrayList<Integer> ArrList = new ArrayList<>();

    // Traverse both arrays
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (ArrList.isEmpty() || ArrList.get(ArrList.size() - 1) != arr1[i]) {
                ArrList.add(arr1[i]);
            }
            i++;
        } else if (arr2[j] < arr1[i]) {
            if (ArrList.isEmpty() || ArrList.get(ArrList.size() - 1) != arr2[j]) {
                ArrList.add(arr2[j]);
            }
            j++;
        } else { // arr1[i] == arr2[j]
            if (ArrList.isEmpty() || ArrList.get(ArrList.size() - 1) != arr1[i]) {
                ArrList.add(arr1[i]);
            }
            i++;
            j++;
        }
    }

    // Handle remaining elements in arr1
    while (i < arr1.length) {
        if (ArrList.isEmpty() || ArrList.get(ArrList.size() - 1) != arr1[i]) {
            ArrList.add(arr1[i]);
        }
        i++;
    }

    // Handle remaining elements in arr2
    while (j < arr2.length) {
        if (ArrList.isEmpty() || ArrList.get(ArrList.size() - 1) != arr2[j]) {
            ArrList.add(arr2[j]);
        }
        j++;
    }

    // Convert ArrayList to array
    int[] result = new int[ArrList.size()];
    for (int k = 0; k < result.length; k++) {
        result[k] = ArrList.get(k);
    }

    return result;
}
```

## TIME AND SPACE COMPLEXITY

| METRIC | COMPLEXITY |
| ------ | ---------- |
| TIME   | O(N + M)   |
| SPACE  | O(N + M)   |
