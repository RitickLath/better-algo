import MarkdownWrapper from "@/app/component/MarkdownWrapper";
import {
  singlyIntro,
  singlyClass,
  insertFirst,
  printList,
  insertLast,
  insertIndex,
  deleteFirst,
  tempNodeDoubts,
  doublyIntro,
  insertDelete,
  printReverse,
  circularIntro,
  iterativeSearch,
  recursiveSearch,
  reverseLL,
  removeNthFromEnd,
  addTwoNumbers,
  oddEven,
  detectCycle,
  removeCycle,
} from "@/app/markdowns/LinkedList";
import { checkPalindrome } from "@/app/markdowns/Strings";

const markdownMap: Record<string, string> = {
  intro: singlyIntro,
  class: singlyClass,
  "insert-first": insertFirst,
  "print-list": printList,
  "insert-last": insertLast,
  "insert-index": insertIndex,
  "delete-first": deleteFirst,
  "temp-node-doubts": tempNodeDoubts,

  "doubly-intro": doublyIntro,
  "insert-delete": insertDelete,
  "print-reverse": printReverse,

  "circular-intro": circularIntro,

  "iterative-search": iterativeSearch,
  "recursive-search": recursiveSearch,
  "reverse-ll": reverseLL,
  "remove-nth-from-end": removeNthFromEnd,
  "check-palindrome": checkPalindrome,
  "add-two-numbers": addTwoNumbers,
  "odd-even": oddEven,

  "detect-cycle": detectCycle,
  "remove-cycle": removeCycle,
};

export default async function LinkedListPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const markdown = markdownMap[slug] || "404 - Topic Not Found";
  return <MarkdownWrapper>{markdown}</MarkdownWrapper>;
}
