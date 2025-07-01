export const arraylistBasics = `# ARRAYLIST

- \`ArrayList\` is a resizable array implementation in Java.
- It is part of the \`java.util\` package.
- Maintains insertion order and allows random access by index.
- Automatically grows and shrinks as elements are added or removed.

## IMPORT STATEMENT

\`\`\`java
import java.util.ArrayList;
\`\`\`

## CREATING AN ARRAYLIST

\`\`\`java
ArrayList<String> list = new ArrayList<>();
ArrayList<Integer> numbers = new ArrayList<>();
\`\`\`

> Note: Use wrapper classes like Integer, Double, Character for primitive types.

## COMMONLY USED METHODS

| METHOD                | DESCRIPTION                               |
| --------------------- | ----------------------------------------- |
| \`add(element)\`        | Adds an element to the end                |
| \`add(index, element)\` | Inserts element at specified index        |
| \`get(index)\`          | Retrieves element at given index          |
| \`set(index, element)\` | Updates element at specified index        |
| \`remove(index)\`       | Removes element at given index            |
| \`remove(Object)\`      | Removes first occurrence of given element |
| \`contains(element)\`   | Checks if element is present              |
| \`size()\`              | Returns the number of elements            |
| \`isEmpty()\`           | Returns true if the list is empty         |
| \`clear()\`             | Removes all elements                      |

## EXAMPLE CODE

\`\`\`java
import java.util.ArrayList;

public class Example {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();

        // Add elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Mango");

        // Access element
        System.out.println(fruits.get(1)); // Output: Banana

        // Modify element
        fruits.set(1, "Orange");

        // Remove element
        fruits.remove("Apple");

        // Iterate over elements
        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        System.out.println("Size: " + fruits.size());
    }
}

\`\`\`

## IMPORTANT NOTES

- \`ArrayList\` maintains insertion order.
- Not synchronized (not thread-safe). Use \`Collections.synchronizedList()\` for thread safety.
- Internally uses a dynamic array.
- Access by index (\`get\`) is O(1).
- Insertion/removal in the middle is O(n) due to shifting of elements.

## WHEN TO USE ARRAYLIST

Use \`ArrayList\` when:

- You require fast random access via index.
- You do not need to frequently insert or delete elements in the middle.
- You want a dynamically resizing array instead of a fixed-size array.
`;

export const sortingComparator = `# SORTING AN ARRAYLIST | COLLECTION | COMPARATOR

## SORT IN ASCENDING ORDER

\`\`\`java
import java.util.ArrayList;
import java.util.Collections;

ArrayList<Integer> list = new ArrayList<>();
list.add(5);
list.add(1);
list.add(3);

Collections.sort(list); // [1, 3, 5]
\`\`\`

## SORT IN DESCENDING ORDER

\`\`\`java
Collections.sort(list, Collections.reverseOrder()); // [5, 3, 1]
\`\`\`

## SORTING STRINGS

\`\`\`java
ArrayList<String> names = new ArrayList<>();
names.add("Charlie");
names.add("Alice");
names.add("Bob");

Collections.sort(names); // [Alice, Bob, Charlie]
\`\`\`

## CUSTOM SORTING USING COMPARATOR

\`\`\`java
import java.util.Comparator;

ArrayList<String> names = new ArrayList<>();
names.add("apple");
names.add("Orange");
names.add("banana");

Collections.sort(names, new Comparator<String>() {
    public int compare(String s1, String s2) {
        return s1.compareToIgnoreCase(s2); // case-insensitive sort
    }
});

\`\`\`
`;

export const twoDArrayList = `# MULTI-DIMENSIONAL ARRAYLIST

## DECLARATION

\`\`\`java
ArrayList<ArrayList<Integer>> list = new ArrayList<>();
\`\`\`

## INITIALIZATION

You must initialize each inner list individually:

\`\`\`java
for (int i = 0; i < 3; i++) {
    list.add(new ArrayList<>());
}
\`\`\`

## ADDING ELEMENTS

\`\`\`java
list.get(0).add(1);
list.get(0).add(2);

list.get(1).add(3);
list.get(1).add(4);

list.get(2).add(5);

\`\`\`

## PRINTING THE 2D LIST

\`\`\`java
for (ArrayList<Integer> innerList : list) {
    System.out.println(innerList);
}

\`\`\`

## SAMPLE OUTPUT

\`\`\`
[1, 2]
[3, 4]
[5]
\`\`\`

## COMPLETE EXAMPLE

\`\`\`java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        ArrayList<ArrayList<Integer>> list = new ArrayList<>();

        for (int i = 0; i < 3; i++) {
            list.add(new ArrayList<>());
        }

        list.get(0).add(1);
        list.get(0).add(2);

        list.get(1).add(3);
        list.get(1).add(4);

        list.get(2).add(5);

        for (ArrayList<Integer> innerList : list) {
            System.out.println(innerList);
        }
    }
}
\`\`\`
`;

export const pairSum1 = `# FIND PAIR WITH TARGET SUM IN SORTED ARRAYLIST (PAIR SUM-1)

### METHOD: TWO POINTER

\`\`\`java
import java.util.*;

public class PairWithTargetSum {

    public static boolean hasPairWithSum(ArrayList<Integer> list, int target) {
        int left = 0;
        int right = list.size() - 1;

        while (left < right) {
            int sum = list.get(left) + list.get(right);

            if (sum == target) {
                System.out.println("Pair found: " + list.get(left) + ", " + list.get(right));
                return true;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        System.out.println("No pair found.");
        return false;
    }

    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6));
        int target = 5;

        hasPairWithSum(list, target);
    }
}
\`\`\`

### TIME COMPLEXITY

- **O(n)** — Efficient for sorted lists using two pointers.
`;
export const pairSum2 = `# FIND PAIR WITH TARGET SUM IN SORTED AND ROTATED ARRAYLIST

### APPROACH: TWO POINTER + MODULO ARITHMETIC

1. First, find the index of the smallest element (pivot).
2. Use two pointers:
   - \`left\` → smallest element (pivot)
   - \`right\` → largest element (just before pivot)
3. Use modulo for circular indexing.

   ![image.png](/img/Pair%20Sum2.png)

### JAVA CODE:

\`\`\`java
import java.util.*;

public class RotatedPairWithSum {

    public static boolean hasPairInRotatedList(ArrayList<Integer> list, int target) {
        int n = list.size();

        // Step 1: Find the pivot (smallest element's index)
        int pivot = -1;
        for (int i = 0; i < n; i++) {
            if (list.get(i) > list.get((i + 1) % n)) {
                pivot = (i + 1) % n;
                break;
            }
        }

        // Step 2: Set two pointers
        int left = pivot;              // smallest
        int right = (pivot - 1 + n) % n; // largest

        // Step 3: Two-pointer search
        while (left != right) {
            int sum = list.get(left) + list.get(right);

            if (sum == target) {
                System.out.println("Pair found: " + list.get(left) + ", " + list.get(right));
                return true;
            }

            if (sum < target)
                left = (left + 1) % n;
            else
                right = (right - 1 + n) % n;
        }

        System.out.println("No pair found.");
        return false;
    }

    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>(Arrays.asList(11, 15, 6, 8, 9, 10));
        int target = 16;

        hasPairInRotatedList(list, target);
    }
}
\`\`\`

### TIME COMPLEXITY:

O(n) :- Only one full pass through the list using circular two-pointers.
`;

export const containerMostWater = ``;
