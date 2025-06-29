export const topics = [
  {
    title: "Home",
  },
  {
    title: "Basic Maths",
    subtopics: [
      {
        section: "Theory",
        items: [
          { name: "Digit Count", href: "/basic-maths/digit-count" },
          { name: "Base Conversion", href: "/basic-maths/base-conversion" },
        ],
      },
      {
        section: "Beginner",
        items: [
          { name: "Reverse Num", href: "/basic-maths/reverse" },
          { name: "Palindrome", href: "/basic-maths/palindrome" },
          { name: "Armstrong", href: "/basic-maths/armstrong" },
          { name: "Divisors", href: "/basic-maths/divisors" },
          { name: "Prime Check", href: "/basic-maths/prime" },
        ],
      },
      {
        section: "Intermediate",
        items: [
          { name: "GCD (Euclid)", href: "/basic-maths/gcd-euclid" },
          { name: "GCD (Native)", href: "/basic-maths/gcd-native" },
        ],
      },
    ],
  },
  {
    title: "Arrays",
    subtopics: [
      {
        section: "Theory",
        items: [
          { name: "Array Basics", href: "/arrays/array-creation" },
          { name: "Input/Output", href: "/arrays/input-output" },
          { name: "Func Args", href: "/arrays/function-arg" },
        ],
      },
      {
        section: "Beginner",
        items: [
          { name: "Linear Search", href: "/arrays/linear-search" },
          { name: "Max Element", href: "/arrays/largest" },
          { name: "2nd Largest", href: "/arrays/second-largest" },
          { name: "Reverse", href: "/arrays/reverse" },
          { name: "Check Sorted", href: "/arrays/sorted-check" },
          { name: "Equal Ops (K)", href: "/arrays/k-equal" },
          { name: "Remove Dups", href: "/arrays/remove-duplicates" },
          { name: "Rotate 1", href: "/arrays/rotate-one" },
          { name: "Rotate K", href: "/arrays/rotate-k" },
          { name: "Move Zeros", href: "/arrays/move-zeros" },
          { name: "Missing Num", href: "/arrays/missing" },
          { name: "Max 1s", href: "/arrays/max-ones" },
        ],
      },
      {
        section: "Intermediate",
        items: [
          { name: "Union", href: "/arrays/union" },
          { name: "Intersection", href: "/arrays/intersection" },
          { name: "Pair Count", href: "/arrays/pairs" },
          { name: "Subarrays", href: "/arrays/subarrays" },
          { name: "Max Sum (Naive)", href: "/arrays/max-sum-naive" },
          { name: "Max Sum (Prefix)", href: "/arrays/max-sum-prefix" },
          { name: "Max Sum (Kadane)", href: "/arrays/max-sum-kadane" },
          { name: "Rainwater Trap", href: "/arrays/rainwater" },
          { name: "Rainwater Code", href: "/arrays/rainwater-code" },
          { name: "Sort 0s,1s,2s", href: "/arrays/dutch-flag" },
          { name: "Majority Elem", href: "/arrays/majority" },
          { name: "Binary Search", href: "/arrays/binary-search" },
          { name: "Binary Code", href: "/arrays/binary-code" },
        ],
      },
    ],
  },
  {
    title: "2D Arrays",
    subtopics: [
      {
        section: "Theory",
        items: [
          {
            name: "Basics & Memory",
            href: "/2darrays/Basics",
          },
        ],
      },
      {
        section: "Beginner",
        items: [
          {
            name: "Spiral Matrix",
            href: "/2darrays/spiral-matrix",
          },
          {
            name: "Diagonal Sum",
            href: "/2darrays/diagonal-sum",
          },
        ],
      },
      {
        section: "Intermediate",
        items: [
          {
            name: "Search in Matrix",
            href: "/2darrays/search-in-matrix",
          },
        ],
      },
    ],
  },
  {
    title: "Sorting",
    subtopics: [
      {
        section: "Theory",
        items: [
          {
            name: "What is Sorting",
            href: "/sorting/theory/what-is-sorting",
          },
        ],
      },
      {
        section: "Beginner",
        items: [
          { name: "Bubble Sort", href: "/sorting/beginner/bubble-sort" },
          { name: "Selection Sort", href: "/sorting/beginner/selection-sort" },
          { name: "Insertion Sort", href: "/sorting/beginner/insertion-sort" },
          { name: "Inbuilt Sort", href: "/sorting/beginner/inbuilt-sort" },
        ],
      },
      {
        section: "Recursion",
        items: [
          { name: "Bubble (Rec)", href: "/sorting/recursion/bubble-rec" },
          { name: "Selection (Rec)", href: "/sorting/recursion/selection-rec" },
        ],
      },
    ],
  },
  {
    title: "String",
    subtopics: [
      {
        section: "Theory",
        items: [
          { name: "Basics", href: "/string/theory/basics" },
          { name: "Why Immutable", href: "/string/theory/why-immutable" },
          { name: "String Builder", href: "/string/theory/string-builder" },
        ],
      },
      {
        section: "Beginner",
        items: [
          {
            name: "Check Palindrome",
            href: "/string/beginner/check-palindrome",
          },
          { name: "To Uppercase", href: "/string/beginner/to-uppercase" },
          { name: "Compression", href: "/string/beginner/compression" },
          { name: "Largest Word", href: "/string/beginner/largest-word" },
          { name: "Shortest Path", href: "/string/beginner/shortest-path" },
        ],
      },
    ],
  },
  {
    title: "Binary Search",
    subtopics: [
      {
        section: "Problems",
        items: [
          { name: "Two Sum", href: "/binary-search/problems/two-sum" },
          {
            name: "Merge Intervals",
            href: "/binary-search/problems/merge-intervals",
          },
        ],
      },
    ],
  },
  {
    title: "Two Pointer",
    subtopics: [
      {
        section: "Problems",
        items: [
          { name: "Two Sum", href: "/two-pointer/problems/two-sum" },
          {
            name: "Merge Intervals",
            href: "/two-pointer/problems/merge-intervals",
          },
        ],
      },
    ],
  },
  {
    title: "Arraylist",
    subtopics: [
      {
        section: "Theory",
        items: [
          { name: "Basics", href: "/arraylist/theory/basics" },
          {
            name: "Sorting & Comparator",
            href: "/arraylist/theory/sorting-comparator",
          },
          { name: "2D ArrayList", href: "/arraylist/theory/2d-arraylist" },
        ],
      },
      {
        section: "Beginner",
        items: [
          { name: "Pair Sum - 1", href: "/arraylist/beginner/pair-sum-1" },
          { name: "Pair Sum - 2", href: "/arraylist/beginner/pair-sum-2" },
        ],
      },
      {
        section: "Intermediate",
        items: [
          {
            name: "Container with Most Water",
            href: "/arraylist/intermediate/container-most-water",
          },
        ],
      },
    ],
  },
  {
    title: "Recursion",
    subtopics: [
      {
        section: "Theory",
        items: [
          { name: "Intro to Recursion", href: "/recursion/theory/intro" },
        ],
      },
      {
        section: "Beginner",
        items: [
          { name: "Print N to 1", href: "/recursion/beginner/print-n-to-1" },
          { name: "Factorial", href: "/recursion/beginner/factorial" },
          { name: "Sum of Digits", href: "/recursion/beginner/sum-of-digits" },
          { name: "Sum of N Numbers", href: "/recursion/beginner/sum-of-n" },
          { name: "Count Zeros", href: "/recursion/beginner/count-zeros" },
          { name: "Nth Fibonacci", href: "/recursion/beginner/nth-fibonacci" },
          { name: "Check Sorted", href: "/recursion/beginner/check-sorted" },
          {
            name: "First Occurrence",
            href: "/recursion/beginner/first-occurrence",
          },
          { name: "X^N", href: "/recursion/beginner/x-to-n" },
        ],
      },
      {
        section: "Intermediate",
        items: [
          {
            name: "X^N Optimized",
            href: "/recursion/intermediate/x-to-n-optimized",
          },
          {
            name: "Reverse Number / Palindrome",
            href: "/recursion/intermediate/reverse-palindrome",
          },
          {
            name: "Linear Search Variants",
            href: "/recursion/intermediate/linear-search",
          },
          {
            name: "Binary Search Rotated",
            href: "/recursion/intermediate/binary-search-rotated",
          },
          {
            name: "Tiling Problem",
            href: "/recursion/intermediate/tiling-problem",
          },
        ],
      },
      {
        section: "Sorting",
        items: [
          {
            name: "Patterns + Bubble/Selection Sort",
            href: "/recursion/sorting/patterns-bubble-selection",
          },
          { name: "Merge Sort", href: "/recursion/sorting/merge-sort" },
        ],
      },
      {
        section: "Subset & Permutations",
        items: [
          {
            name: "Subset / Subsequence",
            href: "/recursion/subset-permutations/subset-subsequence",
          },
          {
            name: "Subsequence Sum = K",
            href: "/recursion/subset-permutations/sum-k",
          },
          {
            name: "Combinational Sum-1",
            href: "/recursion/subset-permutations/combinational-sum-1",
          },
          {
            name: "Permutations",
            href: "/recursion/subset-permutations/permutations",
          },
          {
            name: "Recursion Trees",
            href: "/recursion/subset-permutations/recursion-trees",
          },
        ],
      },
    ],
  },
  {
    title: "Linked List",
    subtopics: [
      {
        section: "Singly",
        items: [
          { name: "Intro", href: "/linked-list/singly/intro" },
          { name: "Class", href: "/linked-list/singly/class" },
          { name: "Insert First", href: "/linked-list/singly/insert-first" },
          { name: "Print List", href: "/linked-list/singly/print-list" },
          { name: "Insert Last", href: "/linked-list/singly/insert-last" },
          { name: "Insert Index", href: "/linked-list/singly/insert-index" },
          { name: "Delete First", href: "/linked-list/singly/delete-first" },
          {
            name: "Temp Node Doubts",
            href: "/linked-list/singly/temp-node-doubts",
          },
        ],
      },
      {
        section: "Doubly",
        items: [
          { name: "Intro", href: "/linked-list/doubly/intro" },
          { name: "Insert/Delete", href: "/linked-list/doubly/insert-delete" },
          { name: "Print Reverse", href: "/linked-list/doubly/print-reverse" },
        ],
      },
      {
        section: "Circular",
        items: [{ name: "Intro", href: "/linked-list/circular/intro" }],
      },
      {
        section: "Problems",
        items: [
          {
            name: "Iterative Search",
            href: "/linked-list/problems/iterative-search",
          },
          {
            name: "Recursive Search",
            href: "/linked-list/problems/recursive-search",
          },
          { name: "Reverse LL", href: "/linked-list/problems/reverse-ll" },
          {
            name: "Remove Nth from End",
            href: "/linked-list/problems/remove-nth-from-end",
          },
          {
            name: "Check Palindrome",
            href: "/linked-list/problems/check-palindrome",
          },
          {
            name: "Add Two Numbers",
            href: "/linked-list/problems/add-two-numbers",
          },
          { name: "Odd-Even", href: "/linked-list/problems/odd-even" },
        ],
      },
      {
        section: "Cycle",
        items: [
          { name: "Detect Cycle", href: "/linked-list/cycle/detect-cycle" },
          { name: "Remove Cycle", href: "/linked-list/cycle/remove-cycle" },
        ],
      },
    ],
  },
  {
    title: "Stack, Queue & Deque",
    subtopics: [
      {
        section: "Theory",
        items: [
          { name: "Intro", href: "/sqd/theory/intro" },
          { name: "Custom Stack", href: "/sqd/theory/custom-stack" },
          { name: "Custom Queue", href: "/sqd/theory/custom-queue" },
        ],
      },
      {
        section: "Problems",
        items: [
          {
            name: "Balanced Parentheses",
            href: "/sqd/problems/balanced-parentheses",
          },
          {
            name: "Queue with 2 Stacks",
            href: "/sqd/problems/queue-with-2-stacks",
          },
        ],
      },
    ],
  },
];
