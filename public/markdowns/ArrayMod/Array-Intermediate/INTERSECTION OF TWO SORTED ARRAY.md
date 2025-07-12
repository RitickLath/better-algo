# INTERSECTION OF TWO SORTED ARRAY

## PROBLEM STATEMENT

GIVEN:

```java
arr1 = {1, 1, 2, 3, 4, 4, 5};
arr2 = {2, 3, 4, 4, 5};
```

Find the intersection of both arrays such that:

- Each element must have a corresponding match in the other array
- Include duplicates only as many times as they appear in both arrays

Expected Output:

```java
intersection = {2, 3, 4, 4, 5}
```

## OPTIMAL SOLUTION: TWO POINTERS

### KEY IDEA

Since both arrays are sorted, use two pointers to traverse simultaneously and collect only common elements.

### STEP-BY-STEP APPROACH

1. **INITIALIZE VARIABLES**
   - Let `i = 0` and `j = 0` to traverse `arr1` and `arr2`
2. **CREATE RESULT LIST**
   - Use an `ArrayList<Integer>` to store the intersection
3. **TWO POINTER TRAVERSAL**
   - While `i < n1` and `j < n2`:
     - If `arr1[i] == arr2[j]`: Add to result, increment both `i` and `j`
     - If `arr1[i] < arr2[j]`: Increment `i`
     - If `arr2[j] < arr1[i]`: Increment `j`
4. **CONVERT TO PRIMITIVE ARRAY**
   - Copy values from the list to a new array

### JAVA CODE

```java
public static int[] IntersectionOptimize(int[] arr1, int[] arr2) {
    int n1 = arr1.length;
    int n2 = arr2.length;

    ArrayList<Integer> result = new ArrayList<>();
    int i = 0, j = 0;

    while (i < n1 && j < n2) {
        if (arr1[i] == arr2[j]) {
            result.add(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    int[] intersection = new int[result.size()];
    for (int k = 0; k < result.size(); k++) {
        intersection[k] = result.get(k);
    }

    return intersection;
}
```

### COMPLEXITY ANALYSIS

| METRIC           | VALUE      |
| ---------------- | ---------- |
| TIME COMPLEXITY  | O(N1 + N2) |
| SPACE COMPLEXITY | O(N1 + N2) |
