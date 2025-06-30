import MarkdownWrapper from "@/app/component/MarkdownWrapper";
import {
  intro,
  customStack,
  customQueue,
  balancedParentheses,
  queueWith2Stacks,
} from "@/app/markdowns/StackAndQueue";

const markdownMap: Record<string, string> = {
  intro: intro,
  "custom-stack": customStack,
  "custom-queue": customQueue,
  "balanced-parentheses": balancedParentheses,
  "queue-with-2-stacks": queueWith2Stacks,
};

export default async function SQDPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const markdown = markdownMap[slug] || "404 - Topic Not Found";
  return <MarkdownWrapper>{markdown}</MarkdownWrapper>;
}
