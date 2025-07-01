export const basics = `# 2-D ARRAY

A 2D array (two-dimensional array) in Java is a collection of elements arranged in rows and columns, like a grid or matrix. It is essentially an array of arrays.

### SYNTAX:

\`\`\`java
dataType[][] arrayName;
\`\`\`

## REAL-LIFE EXAMPLE

### IMAGINE A CLASSROOM

You want to store marks of 3 students in 4 subjects.

That data can be represented in a table:

| Student ↓ / Subject → | Math | Science | English | History |
| --------------------- | ---- | ------- | ------- | ------- |
| Student 1             | 85   | 90      | 88      | 92      |
| Student 2             | 78   | 80      | 76      | 85      |
| Student 3             | 90   | 88      | 85      | 89      |

This can be stored using a 2D array:

\`\`\`java
int[][] marks = {
    {85, 90, 88, 92},
    {78, 80, 76, 85},
    {90, 88, 85, 89}
};
\`\`\`

## REPRESENTATION

Think of a 2D array like a grid of rows and columns:

\`\`\`
marks[0][0] → 85   // Student 1, Subject 1
marks[1][2] → 76   // Student 2, Subject 3
marks[2][3] → 89   // Student 3, Subject 4
\`\`\`

A 2D array with \`m\` rows and \`n\` columns can be visualized as:

\`\`\`java
[ [a00, a01, a02, ..., a0n],
  [a10, a11, a12, ..., a1n],
  ...
  [am0, am1, am2, ..., amn] ]
\`\`\`

## CREATION IN JAVA

### STATIC INITIALIZATION:

Directly provide values at declaration time.

\`\`\`java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6}
};
\`\`\`

### DYNAMIC INITIALIZATION:

Declare size, assign values later.

\`\`\`java
int[][] matrix = new int[2][3]; // 2 rows, 3 columns

matrix[0][0] = 10;
matrix[1][2] = 30;
\`\`\`

You can also declare jagged arrays (rows with different lengths):

\`\`\`java
int[][] jagged = new int[3][];
jagged[0] = new int[2];
jagged[1] = new int[4];
jagged[2] = new int[1];
\`\`\`

# 2D ARRAY IN MEMORY (INTERNAL WORKING)

In Java:

- A 2D array is not a true matrix stored in a contiguous block.
- It is actually an array of references to other 1D arrays.

### EXAMPLE

\`\`\`java
int[][] arr = new int[2][3];
\`\`\`

Memory layout:

\`\`\`
arr → [ reference to row0 ] → [ int[3] → [0, 0, 0] ]
     [ reference to row1 ] → [ int[3] → [0, 0, 0] ]
\`\`\`

Each row (\`arr[0]\`, \`arr[1]\`) is a separate array in memory.
`;

export const spiralMatrix = `# SPIRAL MATRIX

Given a 2D matrix, return or print all the elements in spiral order - starting from the top-left element and moving clockwise layer by layer.

![Kanade](/img/Spiral%20Matrix.png)

### INPUT

\`\`\`jsx
int[][] matrix = {
    { 1,  2,  3,  4 },
    { 5,  6,  7,  8 },
    { 9, 10, 11, 12 },
    {13, 14, 15, 16 }
};
\`\`\`

### OUTPUT:

\`\`\`jsx
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
\`\`\`

## ALGORITHM IDEA

Use 4 boundaries:

- \`top\` = 0
- \`bottom\` = rows - 1
- \`left\` = 0
- \`right\` = cols - 1

Repeat while \`top <= bottom\` and \`left <= right\`:

1. Traverse left to right (top row)
2. Traverse top to bottom (right column)
3. Traverse right to left (bottom row) if needed
4. Traverse bottom to top (left column) if needed

After each step, shrink the boundary.

### JAVA CODE

\`\`\`java
public class SpiralMatrix {
    public static void printSpiral(int[][] matrix) {
        int top = 0;
        int bottom = matrix.length - 1;
        int left = 0;
        int right = matrix[0].length - 1;

        System.out.println("Spiral Order:");

        while (top <= bottom && left <= right) {
            // 1. Print top row
            for (int i = left; i <= right; i++) {
                System.out.print(matrix[top][i] + " ");
            }

            // 2. Print right column
            for (int i = top + 1; i <= bottom; i++) {
                System.out.print(matrix[i][right] + " ");
            }

            // 3. Print bottom row (only if top < bottom)
            if (top < bottom) {
                for (int i = right - 1; i >= left; i--) {
                    System.out.print(matrix[bottom][i] + " ");
                }
            }

            // 4. Print left column (only if left < right)
            if (left < right) {
                for (int i = bottom - 1; i > top; i--) {
                    System.out.print(matrix[i][left] + " ");
                }
            }

            // Now adjust the boundaries
            top++;
            bottom--;
            left++;
            right--;
        }
    }

    public static void main(String[] args) {
        int[][] matrix = {
            { 1,  2,  3,  4},
            { 5,  6,  7,  8},
            { 9, 10, 11, 12},
            {13, 14, 15, 16}
        };

        printSpiral(matrix);
    }
}
\`\`\`

### OUTPUT

\`\`\`
css
Copy code
Spiral Order:
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
\`\`\`

## KEY TAKEAWAYS

| Feature          | Description                               |
| ---------------- | ----------------------------------------- |
| Time Complexity  | O(m × n) → visit each element once        |
| Space Complexity | O(1) (excluding output)                   |
| Technique        | Boundary shrink on each layer             |
| Uses             | Printing, puzzles, visualization problems |

Why do we use \`if (top <= bottom)\` and \`if (left <= right)\` inside the loop?

- Even though the outer \`while (top <= bottom && left <= right)\` is checking bounds,
  ➤ the boundaries change inside the loop, so extra checks are needed before printing bottom row or left column.
- If we skip those checks, we might:
  - Repeat the middle row or column (in odd-sized matrices)
  - Access invalid indices (especially in 1D row/column matrices)
  - Get \`ArrayIndexOutOfBoundsException\`
`;

export const diagonalSum = `# DIAGONAL SUM

Write a Java program to calculate the **sum of the primary diagonal** and the **secondary diagonal** of a square matrix (\`NxN\`).

- An integer \`N\` representing the size of the matrix.
- An \`N x N\` matrix of integers.

### OUTPUT:

- Print the sum of the primary and secondary diagonals.
- If a cell belongs to both diagonals (center cell in odd N), count it **only once**.

### EXAMPLE:

\`\`\`
N = 3
Matrix =
1 2 3
4 5 6
7 8 9
\`\`\`

### DIAGONALS:

- Primary Diagonal: 1, 5, 9
- Secondary Diagonal: 3, 5, 7

- Total = 1 + 5 + 9 + 3 + 7 = **25** (Note: 5 is counted only once)

![Diagonal Matrix](/img/Diagonal%20Matrix.png)

### **LOGIC/ALGORITHM:**

1. Loop through the matrix rows using \`i\` from \`0\` to \`N - 1\`.
2. For each row \`i\`:
   - Add the element at \`[i][i]\` (Primary diagonal).
   - Add the element at \`[i][N - 1 - i]\` (Secondary diagonal).
3. If \`N\` is odd, subtract the center element once (as it was added twice).
4. Print the final sum.

### **CODE:**

\`\`\`java
import java.util.Scanner;

public class DiagonalSum {
public static void main(String[] args) {
Scanner sc = new Scanner(System.in);

        // Input size of matrix
        System.out.print("Enter matrix size (N x N): ");
        int N = sc.nextInt();

        int[][] matrix = new int[N][N];

        // Input matrix elements
        System.out.println("Enter matrix elements:");
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                matrix[i][j] = sc.nextInt();
            }
        }

        int sum = 0;

        for (int i = 0; i < N; i++) {
            // Primary diagonal
            sum += matrix[i][i];

            // Secondary diagonal
            sum += matrix[i][N - 1 - i];
        }

        // If N is odd, subtract the center element (counted twice)
        if (N % 2 == 1) {
            sum -= matrix[N / 2][N / 2];
        }

        System.out.println("Diagonal Sum: " + sum);
    }

}
\`\`\`
`;

export const searchInMatrix = ``;
