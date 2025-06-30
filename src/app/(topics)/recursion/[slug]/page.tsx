import MarkdownWrapper from "@/app/component/MarkdownWrapper";
import { linearSearch } from "@/app/markdowns/Arrays";
import {
  introToRecursion,
  printNTo1,
  factorial,
  sumOfDigits,
  sumOfNNumbers,
  countZeros,
  nthFibonacci,
  checkSorted,
  firstOccurrence,
  xToN,
  xToNOptimized,
  reversePalindrome,
  binarySearchRotated,
  tilingProblem,
  patternsBubbleSelection,
  mergeSort,
  subsetSubsequence,
  sumK,
  combinationalSum1,
  permutations,
  recursionTrees,
} from "@/app/markdowns/Recursion";

const markdownMap: Record<string, string> = {
  intro: introToRecursion,

  "print-n-to-1": printNTo1,
  factorial: factorial,
  "sum-of-digits": sumOfDigits,
  "sum-of-n": sumOfNNumbers,
  "count-zeros": countZeros,
  "nth-fibonacci": nthFibonacci,
  "check-sorted": checkSorted,
  "first-occurrence": firstOccurrence,
  "x-to-n": xToN,

  "x-to-n-optimized": xToNOptimized,
  "reverse-palindrome": reversePalindrome,
  "linear-search": linearSearch,
  "binary-search-rotated": binarySearchRotated,
  "tiling-problem": tilingProblem,

  "patterns-bubble-selection": patternsBubbleSelection,
  "merge-sort": mergeSort,

  "subset-subsequence": subsetSubsequence,
  "sum-k": sumK,
  "combinational-sum-1": combinationalSum1,
  permutations: permutations,
  "recursion-trees": recursionTrees,
};

export default async function RecursionPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const markdown = markdownMap[slug] || "404 - Topic Not Found";
  return <MarkdownWrapper>{markdown}</MarkdownWrapper>;
}
