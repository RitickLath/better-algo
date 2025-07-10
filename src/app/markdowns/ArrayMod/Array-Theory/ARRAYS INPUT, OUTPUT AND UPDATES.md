# ARRAYS INPUT, OUTPUT AND UPDATES

## 1. ARRAY INPUT (USING SCANNER)

```java
import java.util.Scanner;

public class ArrayInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] numbers = new int[5];

        // Input values
        for (int i = 0; i < numbers.length; i++) {
            System.out.print("Enter number " + (i + 1) + ": ");
            numbers[i] = sc.nextInt();
        }
    }
}
```

## 2. ARRAY OUTPUT (PRINTING ELEMENTS)

```java
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```

## 3. ARRAY UPDATE (CHANGING VALUE AT SPECIFIC INDEX)

```java
numbers[2] = 999;  // Updates the 3rd element (index 2)

System.out.println("Updated value at index 2: " + numbers[2]);
```
