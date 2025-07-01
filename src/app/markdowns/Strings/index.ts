export const stringBasics = `# WHAT IS A STRING?

- A String in Java is a sequence of characters.
- It is an object of the \`java.lang.String\` class.
- Strings are immutable, meaning once created, they cannot be changed.

## STRING DECLARATION AND INITIALIZATION

\`\`\`java
String str1 = "Hello";
String str2 = new String("World");
\`\`\`

## STRING INPUT AND OUTPUT

### INPUT USING SCANNER

\`\`\`java
import java.util.Scanner;

Scanner sc = new Scanner(System.in);

// For single word
String s1 = sc.next();

// For entire line
String s2 = sc.nextLine();

\`\`\`

## COMMON STRING METHODS

| METHOD                                    | DESCRIPTION                               |
| ----------------------------------------- | ----------------------------------------- |
| \`length()\`                                | Returns length of the string              |
| \`charAt(int index)\`                       | Returns character at specified index      |
| \`substring(int beginIndex)\`               | Returns substring from given index to end |
| \`substring(int beginIndex, int endIndex)\` | Returns substring from begin to end-1     |
| \`indexOf(String str)\`                     | Returns index of first occurrence         |
| \`lastIndexOf(String str)\`                 | Returns last occurrence                   |
| \`equals(String another)\`                  | Compares strings (case-sensitive)         |
| \`equalsIgnoreCase(String another)\`        | Compares strings ignoring case            |
| \`toLowerCase()\`                           | Converts string to lowercase              |
| \`toUpperCase()\`                           | Converts string to uppercase              |
| \`trim()\`                                  | Removes leading and trailing spaces       |
| \`replace(char old, char new)\`             | Replaces characters                       |

### CODE EXAMPLE

\`\`\`java
public class StringMethodsExample {
    public static void main(String[] args) {
        String str = "  Hello Java World  ";

        System.out.println("Length: " + str.length());
        // Output: Length: 20

        System.out.println("Character at index 6: " + str.charAt(6));
        // Output: Character at index 6: J

        System.out.println("Substring from index 8: " + str.substring(8));
        // Output: Substring from index 8: va World

        System.out.println("Substring from 2 to 7: " + str.substring(2, 7));
        // Output: Substring from 2 to 7: Hello

        System.out.println("Index of 'Java': " + str.indexOf("Java"));
        // Output: Index of 'Java': 8

        System.out.println("Last index of 'l': " + str.lastIndexOf("l"));
        // Output: Last index of 'l': 17

        String compare1 = "hello java world";
        System.out.println("Equals: " + str.trim().equals(compare1));
        // Output: Equals: false

        System.out.println("Equals Ignore Case: " + str.trim().equalsIgnoreCase(compare1));
        // Output: Equals Ignore Case: true

        System.out.println("Lowercase: " + str.toLowerCase());
        // Output: Lowercase:   hello java world

        System.out.println("Uppercase: " + str.toUpperCase());
        // Output: Uppercase:   HELLO JAVA WORLD

        System.out.println("Trimmed: '" + str.trim() + "'");
        // Output: Trimmed: 'Hello Java World'

        System.out.println("Replace 'l' with 'x': " + str.replace('l', 'x'));
        // Output: Replace 'l' with 'x':   Hexxo Java Worxd
    }
}

\`\`\`

## IMMUTABILITY OF STRINGS

- Strings in Java are immutable. This means once a \`String\` object is created, its content cannot be changed.
- Any operation that appears to modify a string actually creates a new \`String\` object.

### EXAMPLE 1: USING CONCAT()

\`\`\`java
String a = "Hello";
a.concat(" World");
System.out.println(a);
// Output: Hello

a = a.concat(" World");
System.out.println(a);
// Output: Hello World
\`\`\`

Explanation:

- \`a.concat(" World")\` creates a new string \`"Hello World"\` but does not store it back in \`a\`.
- To update \`a\`, the result must be assigned back: \`a = a.concat(...)\`.

### EXAMPLE 2: USING \`+\` OPERATOR

\`\`\`java
String str = "Data";
str + "DEDDD";
System.out.println(str);
// Output: Data

str = str + "DEDDD";
System.out.println(str);
// Output: DataDEDDD
\`\`\`

Explanation:

- \`str + "DEDDD"\` also creates a new string, but the original \`str\` remains unchanged unless reassigned.
- After reassignment, \`str\` refers to the new string \`"DataDEDDD"\`.

### KEY POINTS

- Any string modification (\`+\`, \`concat()\`, etc.) returns a new string.
- The original string reference must be reassigned to store the result.
- This behavior ensures thread safety and efficiency in string pooling but comes at the cost of higher memory usage when many modifications are made.

## CONVERT STRING TO CHARACTER ARRAY

\`\`\`java
String str = "Hello";
char[] arr = str.toCharArray();

for (char c : arr) {
    System.out.print(c + " ");
}
// Output: H e l l o
\`\`\`

## STRING COMPARISON

\`\`\`java
String s1 = "Java";
String s2 = "Java";
String s3 = new String("Java");

System.out.println(s1 == s2); // true (same reference)
System.out.println(s1 == s3); // false (different object)
System.out.println(s1.equals(s3)); // true (same value)
\`\`\`
`;
export const whyImmutable = `# WHY STRINGS ARE IMMUTABLE

IMMUTABILITY means once a \`String\` object is created, it cannot be changed. Any operation that seems to change it actually creates a new object.

## REASONS FOR IMMUTABILITY

### 1. SECURITY

Strings are widely used in sensitive areas such as file paths, network URLs, database credentials, and class loading. Making them immutable prevents unauthorized or accidental modification.

Example:

\`\`\`java
String url = "jdbc:mysql://localhost:3306/db";
// If mutable, someone could change the object during connection setup
\`\`\`

### 2. STRING POOLING / INTERNING

Immutability allows safe string sharing via the String constant pool. Java stores all string literals in a pool to optimize memory usage.

Example:

\`\`\`java
String a = "hello";
String b = "hello";
System.out.println(a == b); // true — both refer to the same object
\`\`\`

### 3. CACHING HASH CODE

Since the content never changes, Java can cache the \`hashCode()\` of strings, which improves performance in hash-based collections like \`HashMap\`, \`HashSet\`.

### 4. THREAD-SAFETY

Immutable objects are inherently thread-safe since they cannot be changed after creation. This avoids synchronization issues when used across threads.

### 5. GARBAGE COLLECTION FRIENDLY

Immutability leads to more predictable memory usage and allows more efficient garbage collection due to safe sharing of string instances.

## PERFORMANCE IMPLICATION IN ITERATION AND CONCATENATION

If a string is concatenated repeatedly in a loop using the \`+\` operator (or \`concat()\`), each concatenation creates a new object, copying the old content. This leads to O(n²) time complexity, where \`n\` is the total length of the final string.

Example:

\`\`\`java
String result = "";
for (int i = 0; i < 1000; i++) {
    result += "a"; // Inefficient
}
\`\`\`

Each \`+=\` creates a new string and copies all previous characters, making it increasingly slower.

Solution:

Use \`StringBuilder\` or \`StringBuffer\` when repeated modification is needed.

\`\`\`java
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append("a"); // Efficient
}
\`\`\`

## STRING MEMORY STORAGE

### HEAP:

Created using \`new String()\`. Always creates a new object even if the content is already in the pool.

### STRING CONSTANT POOL:

A special memory region inside the method area (or heap in Java 8+) where string literals are stored and reused to save memory.

### EXAMPLE:

\`\`\`java
String s1 = "hello";
String s2 = "hello";
String s3 = new String("hello");
\`\`\`

- \`s1 == s2\` → \`true\` (both refer to the same pooled literal)
- \`s1 == s3\` → \`false\` (new object on heap)
- \`s1.equals(s3)\` → \`true\` (content comparison)

## STRING INTERNING

Interning ensures that all identical string values share a single reference in the string pool. This is automatic for literals and can be done manually using \`intern()\`.

### EXAMPLE:

### WHAT IS INTERNING?

\`\`\`java
String a = new String("hello");
String b = "hello";

System.out.println(a == b); // false
a = a.intern();
System.out.println(a == b); // true
\`\`\`

### ADVANTAGE:

Reduces memory footprint in applications with a high volume of identical string values (e.g., parsers, compilers, large-scale data processing).

## WHAT HAPPENS DURING MODIFICATION?

\`\`\`java
String s = "Java";
s.concat("Script");
System.out.println(s); // Output: Java
\`\`\`

- \`concat()\` creates a new object (\`"JavaScript"\`)
- The original \`s\` still refers to \`"Java"\`
- To modify \`s\`: \`s = s.concat("Script");\`

## REAL-WORLD SCENARIO: HASHMAP EXAMPLE

\`\`\`java
Map<String, String> map = new HashMap<>();
String key = "user";
map.put(key, "admin");

key = key.concat("1");

System.out.println(map.get("user")); // Output: admin

\`\`\`

- Map uses \`"user"\` as key; \`key.concat("1")\` creates a new string.
- Original key in the map remains unaffected.

## IMMUTABILITY VS MUTABILITY

| CLASS           | MUTABLE | THREAD-SAFE | PERFORMANCE |
| --------------- | ------- | ----------- | ----------- |
| \`String\`        | NO      | YES         | MEDIUM      |
| \`StringBuilder\` | YES     | NO          | FAST        |
| \`StringBuffer\`  | YES     | YES         | SLOWER      |

## ADVANTAGES OF STRING IMMUTABILITY

- Safe for multithreading
- Enables string interning and reuse
- Improves hashing performance and predictability
- Prevents accidental modification
- Supports memory efficiency and GC optimization
- Avoids side effects in shared environments
`;
export const stringBuilder = `# STRING BUILDER

\`StringBuilder\` is a mutable sequence of characters. Unlike \`String\`, it can be modified without creating new objects, making it ideal for frequent string manipulations.

It belongs to the \`java.lang\` package.

## WHY USE STRINGBUILDER?

- Efficient for frequent modifications (append, insert, delete)
- Avoids creating multiple intermediate \`String\` objects
- Better performance than \`String\` in loops and concatenations

## BASIC SYNTAX

\`\`\`java
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" World");
System.out.println(sb); // Output: Hello World
\`\`\`

## IMPORTANT METHODS OF STRINGBUILDER

| METHOD                                    | DESCRIPTION                             |
| ----------------------------------------- | --------------------------------------- |
| \`append(String str)\`                      | Adds string to the end                  |
| \`insert(int offset, String str)\`          | Inserts at specified index              |
| \`replace(int start, int end, String str)\` | Replaces characters from start to end-1 |
| \`delete(int start, int end)\`              | Deletes characters from start to end-1  |
| \`deleteCharAt(int index)\`                 | Deletes character at given index        |
| \`reverse()\`                               | Reverses the character sequence         |
| \`toString()\`                              | Converts to a \`String\` object           |
| \`length()\`                                | Returns the current length              |
| \`capacity()\`                              | Returns current capacity of builder     |
| \`charAt(int index)\`                       | Returns character at index              |
| \`setCharAt(int index, char ch)\`           | Sets character at given index           |
| \`ensureCapacity(int minimumCapacity)\`     | Ensures minimum storage capacity        |

## EXAMPLE PROGRAM

\`\`\`java
public class StringBuilderExample {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Java");

        sb.append(" Programming");
        sb.insert(4, " Language");
        sb.replace(0, 4, "Kotlin");
        sb.delete(7, 16);
        sb.reverse();

        System.out.println(sb);
    }
}
\`\`\`

## TIME COMPLEXITY COMPARISON

| OPERATION             | STRING      | STRINGBUILDER |
| --------------------- | ----------- | ------------- |
| Concatenation in Loop | O(n²)       | O(n)          |
| Insert/Delete/Replace | Inefficient | Efficient     |

## WHEN TO USE STRINGBUILDER

- When you need to modify strings repeatedly
- For loops involving string concatenation
- In performance-critical string operations
- In single-threaded environments

## COMMON MISTAKE WITH STRING

\`\`\`java
String s = "";
for (int i = 0; i < 1000; i++) {
    s += i; // Inefficient - creates new string every time
}
\`\`\`

### BETTER APPROACH:

\`\`\`java
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i); // Efficient
}
String result = sb.toString();
\`\`\`
`;

export const checkPalindrome = `# CHECK PALINDROME

- A palindrome is a string that reads the same forward and backward.
- Example: \`"madam"\`, \`"racecar"\`, \`"level"\` are palindromes.

### JAVA CODE TO CHECK PALINDROME

\`\`\`java
import java.util.Scanner;

public class PalindromeCheck {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String original = sc.nextLine();

        // Choose any of the methods below

        // Method 1: Using loop and reversed string
        System.out.println(isPalindromeLoop(str));

        // Method 2: Using StringBuilder reverse
        System.out.println(isPalindromeBuilder(str));

        // Method 3: Using two-pointer approach
        System.out.println(isPalindromeTwoPointer(str));
    }

    // Method 1: Using loop to reverse
    static boolean isPalindromeLoop(String str) {
        String reversed = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            reversed += str.charAt(i);
        }
        return str.equals(reversed);
    }

    // Method 2: Using StringBuilder
    static boolean isPalindromeBuilder(String str) {
        String reversed = new StringBuilder(str).reverse().toString();
        return str.equals(reversed);
    }

    // Method 3: Using two-pointer approach
    static boolean isPalindromeTwoPointer(String str) {
        int left = 0;
        int right = str.length() - 1;

        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
\`\`\`

### OPTIONAL: USING \`StringBuilder\` FOR REVERSING

\`\`\`java
String reversed = new StringBuilder(str).reverse().toString();
\`\`\`

This is more efficient than using \`+=\` in a loop.
`;
export const toUppercase = `# CONVERT LETTER TO UPPERCASE

## METHOD TO CAPITALIZE FIRST LETTER OF EACH WORD

\`\`\`java
public class CapitalizeWords {

    public static String capitalizeFirstLetters(String input) {
        if (input == null || input.isEmpty()) return input;

        StringBuilder sb = new StringBuilder();
        sb.append(Character.toUpperCase(input.charAt(0)));

        for (int i = 1; i < input.length(); i++) {
            char current = input.charAt(i);
            if (current == ' ' && i < input.length() - 1) {
                sb.append(current); // add the space
                i++; // move to the next character
                sb.append(Character.toUpperCase(input.charAt(i))); // capitalize it
            } else {
                sb.append(current); // normal character
            }
        }

        return sb.toString().trim();
    }

    public static void main(String[] args) {
        String str = "this is a java method";
        String formatted = capitalizeFirstLetters(str);
        System.out.println(formatted);
    }
}
\`\`\`

### SAMPLE OUTPUT

\`\`\`
This Is A Java Method
\`\`\`

Write a program to compare two strings using different methods:

- \`==\`
- \`.equals()\`
- \`.equalsIgnoreCase()\`
- \`.compareTo()\`

Explain the difference between reference comparison and content comparison.

## KEY CONCEPTS

### 1. “==” (REFERENCE COMPARISION)

- Compares **memory address**, not content.
- Returns \`true\` only if both references point to the same object.

### 2. “.EQUALS()” (CONTENT COMPARISION)

- Compares **actual contents** of strings.
- Case-sensitive.

### 3. “.EQUALSIGNORECASE()”

- Compares strings ignoring case.

### 4. “.COMPARETO()”

- Lexicographically compares two strings.
- Returns:
  - \`0\` if strings are equal
  - \`<0\` if first string < second
  - \`>0\` if first string > second

## JAVA CODE: STRING COMPARISON

\`\`\`java
public class StringComparison {

    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = "Hello";
        String s3 = new String("Hello");
        String s4 = "hello";

        // 1. == operator
        System.out.println("s1 == s2: " + (s1 == s2));
        // true, both point to same object in string pool

        System.out.println("s1 == s3: " + (s1 == s3));
        // false, s3 is created using new keyword (heap)

        // 2. equals()
        System.out.println("s1.equals(s3): " + s1.equals(s3));
        // true, content is same

        System.out.println("s1.equals(s4): " + s1.equals(s4));
        // false, case is different

        // 3. equalsIgnoreCase()
        System.out.println("s1.equalsIgnoreCase(s4): " + s1.equalsIgnoreCase(s4));
        // true

        // 4. compareTo()
        System.out.println("s1.compareTo(s2): " + s1.compareTo(s2));
        // 0

        System.out.println("s1.compareTo(s4): " + s1.compareTo(s4));
        // Negative (because 'H' < 'h')

        System.out.println("s4.compareTo(s1): " + s4.compareTo(s1));
        // Positive
    }
}
\`\`\`

### SAMPLE OUTPUT

\`\`\`
s1 == s2: true
s1 == s3: false
s1.equals(s3): true
s1.equals(s4): false
s1.equalsIgnoreCase(s4): true
s1.compareTo(s2): 0
s1.compareTo(s4): -32
s4.compareTo(s1): 32
\`\`\`

### SUMMARY

| Method                | Case Sensitive | Checks Reference | Description                        |
| --------------------- | -------------- | ---------------- | ---------------------------------- |
| \`==\`                  | No             | Yes              | Compares memory reference          |
| \`.equals()\`           | Yes            | No               | Compares content                   |
| \`.equalsIgnoreCase()\` | No             | No               | Ignores case in content comparison |
| \`.compareTo()\`        | Yes            | No               | Lexicographic difference           |
`;
export const compression = `# STRING COMPRESSION

### PROBLEM STATEMENT

**Given** a string \`str\`, compress it using the counts of repeated characters.

- For example, \`"aaabbc"\` becomes \`"a3b2c1"\`.
- If the compressed string is **not shorter**, return the original string.

### CONSTRAINTS

- Input: Only contains **lowercase or uppercase letters**
- Output: Compressed string or original string (whichever is shorter)

### EXAMPLE INPUT/OUTPUT

\`\`\`
Input:  aabcccccaaa
Output: a2b1c5a3

Input:  abc
Output: abc  (since a1b1c1 is longer)
\`\`\`

### JAVA METHOD: STRING COMPRESSION

\`\`\`java
public class StringCompression {

    public static String compress(String str) {
        if (str == null || str.length() == 0) return str;

        StringBuilder sb = new StringBuilder();
        int count = 1;

        for (int i = 1; i < str.length(); i++) {
            if (str.charAt(i) == str.charAt(i - 1)) {
                count++;
            } else {
                sb.append(str.charAt(i - 1));
                sb.append(count);
                count = 1;
            }
        }

        // Append the last character and its count
        sb.append(str.charAt(str.length() - 1));
        sb.append(count);

        // Return compressed string only if it's shorter
        return sb.length() < str.length() ? sb.toString() : str;
    }

    public static void main(String[] args) {
        String input = "aabcccccaaa";
        String output = compress(input);
        System.out.println(output);  // Output: a2b1c5a3
    }
}
\`\`\`
`;
export const largestWord = `# PRINT LARGEST STRING

Write a program to read a set of strings and print the **largest string** based on **lexicographical order**.

### EXPLANATION

- Lexicographical comparison is similar to dictionary order.
- You can compare strings using \`compareTo()\`.
- \`"zebra"\` > \`"apple"\` because \`'z' > 'a'\`.

### JAVA CODE

\`\`\`java
public class LargestStringFromArray {

    public static void main(String[] args) {
        String[] arr = {"banana", "apple", "zebra", "mango", "cherry"};

        String largest = arr[0]; // assume first is largest

        for (int i = 1; i < arr.length; i++) {
            if (arr[i].compareTo(largest) > 0) {
                largest = arr[i];
            }
        }

        System.out.println("Largest string is: " + largest);
    }
}
\`\`\`

### NOTE

- If you want to compare based on **length** instead of lexicographical order, replace the \`compareTo()\` check with:
  \`\`\`java
  if (current.length() > largest.length()) {
      largest = current;
  }
  \`\`\`
`;
export const shortestPath = `# FIND SHORTEST PATH FROM A ROUTE STRING

Given a string containing directions (\`N\`, \`S\`, \`E\`, \`W\`) representing movements on a 2D plane, calculate:

1. The shortest possible path (in terms of Euclidean distance) from the start point.
2. The sequence of directions to follow to reach the same destination in the shortest way.

### INPUT

A string of characters where:

- \`'N'\` = move north (y + 1)
- \`'S'\` = move south (y - 1)
- \`'E'\` = move east (x + 1)
- \`'W'\` = move west (x - 1)

Example Input:

\`\`\`
"WNEENESENNN"
\`\`\`

### OUTPUT

- Net x and y displacement
- Shortest distance from origin
- Shortest path in directions

Example Output:

\`\`\`
Net X: 1
Net Y: 4
Shortest Path Distance: 4.123105625617661
Shortest Path Direction: NNNNE
\`\`\`

### JAVA SOLUTION

\`\`\`java
public class ShortestPath {

    public static void main(String[] args) {
        String route = "WNEENESENNN";
        shortestPath(route);
    }

    static void shortestPath(String route) {
        int x = 0, y = 0;

        for (int i = 0; i < route.length(); i++) {
            char dir = route.charAt(i);

            if (dir == 'N') {
                y++;
            } else if (dir == 'S') {
                y--;
            } else if (dir == 'E') {
                x++;
            } else if (dir == 'W') {
                x--;
            }
        }

        System.out.println("Net X: " + x);
        System.out.println("Net Y: " + y);

        double shortestDistance = Math.sqrt(x * x + y * y);
        System.out.println("Shortest Path Distance: " + shortestDistance);

        System.out.print("Shortest Path Direction: ");
        if (y > 0) {
            for (int i = 0; i < y; i++) System.out.print("N");
        } else {
            for (int i = 0; i < -y; i++) System.out.print("S");
        }

        if (x > 0) {
            for (int i = 0; i < x; i++) System.out.print("E");
        } else {
            for (int i = 0; i < -x; i++) System.out.print("W");
        }

        System.out.println();
    }
}
\`\`\`
`;
