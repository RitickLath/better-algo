import MarkdownWrapper from "@/app/component/MarkdownWrapper";
import {
  arrayTheory,
  arrayCreation,
  inputOutput,
  linearSearch,
  largestInAnArray,
  secondLargestInArraySingleLoop,
  reverseAnArray,
  checkSortedOrNot,
  minIncrementKOpsToEqual,
  removeDuplicatesFromSorted,
  rotateArrayByOne,
  rotateArrayByK,
  moveAllZerosToEnd,
  findMissingNumber,
  maxConsecutiveOnes,
  unionOfTwoSortedArrays,
  intersectionOfTwoSortedArrays,
  pairsInArray,
  printAllSubarrays,
  maxSubarraySumNaive,
  maxSubarraySumPrefixSum,
  maxSubarraySumKadane,
  trappingRainwaterTheory,
  trappingRainwaterCode,
  dutchNationalFlagSort,
  mooresVotingMajorityElement,
  functionalArgument,
} from "@/app/markdowns/Arrays";

const markdownMap: Record<string, string> = {
  "array-theory": arrayTheory,
  "array-creation": arrayCreation,
  "array-input-output": inputOutput,
  "array-function-argument": functionalArgument,

  "array-linear-search": linearSearch,
  "largest-in-array": largestInAnArray,
  "second-largest-in-array": secondLargestInArraySingleLoop,
  "reverse-array": reverseAnArray,
  "check-sorted": checkSortedOrNot,
  "min-increment-k-ops": minIncrementKOpsToEqual,
  "remove-duplicates-sorted": removeDuplicatesFromSorted,
  "rotate-array-by-one": rotateArrayByOne,
  "rotate-array-by-k": rotateArrayByK,
  "move-zeros-to-end": moveAllZerosToEnd,
  "find-missing-number": findMissingNumber,
  "max-consecutive-ones": maxConsecutiveOnes,

  "union-two-sorted-arrays": unionOfTwoSortedArrays,
  "intersection-two-sorted-arrays": intersectionOfTwoSortedArrays,
  "pairs-in-array": pairsInArray,
  "print-all-subarrays": printAllSubarrays,
  "max-subarray-sum-naive": maxSubarraySumNaive,
  "max-subarray-sum-prefix": maxSubarraySumPrefixSum,
  "max-subarray-sum-kadane": maxSubarraySumKadane,

  "trapping-rainwater-theory": trappingRainwaterTheory,
  "trapping-rainwater-code": trappingRainwaterCode,
  "dutch-national-flag-sort": dutchNationalFlagSort,
  "moores-voting-majority-element": mooresVotingMajorityElement,
};

const Arrays = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  const markdown = markdownMap[slug] || "404 - Topic Not Found";
  return <MarkdownWrapper>{markdown}</MarkdownWrapper>;
};

export default Arrays;
