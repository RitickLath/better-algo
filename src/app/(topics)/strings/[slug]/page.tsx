import MarkdownWrapper from "@/app/component/MarkdownWrapper";
import {
  stringBasics,
  whyImmutable,
  stringBuilder,
  checkPalindrome,
  toUppercase,
  compression,
  largestWord,
  shortestPath,
} from "@/app/markdowns/Strings";

const markdownMap: Record<string, string> = {
  basics: stringBasics,
  "why-immutable": whyImmutable,
  "string-builder": stringBuilder,
  "check-palindrome": checkPalindrome,
  "to-uppercase": toUppercase,
  compression: compression,
  "largest-word": largestWord,
  "shortest-path": shortestPath,
};

export default async function Strings({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const markdown = markdownMap[slug] || "404 - Topic Not Found";
  return <MarkdownWrapper>{markdown}</MarkdownWrapper>;
}
