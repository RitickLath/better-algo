import MarkdownWrapper from "@/app/component/MarkdownWrapper";
import {
  CountNumberOfDigits,
  TimeComplexityInBaseConversion,
  reverseNumber,
  checkNumberIsPalindrome,
  armstrongNumber,
  divisorOfANumber,
  numberIsPrime,
  gcdUsingEuclideanAlgo,
  findingGCDNative,
} from "@/app/markdowns/Maths";

const markdownMap: Record<string, string> = {
  "count-digits-in-number": CountNumberOfDigits,
  "convert-number-base": TimeComplexityInBaseConversion,
  "reverse-a-number": reverseNumber,
  "check-number-palindrome": checkNumberIsPalindrome,
  "armstrong-number-check": armstrongNumber,
  "find-divisors-of-number": divisorOfANumber,
  "is-number-prime": numberIsPrime,
  "gcd-using-euclidean-algorithm": gcdUsingEuclideanAlgo,
  "gcd-using-brute-force": findingGCDNative,
};

export default async function BasicMaths({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const markdown = markdownMap[slug] || "404 - Topic Not Found";
  return <MarkdownWrapper>{markdown}</MarkdownWrapper>;
}
