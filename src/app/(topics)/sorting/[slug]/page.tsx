import MarkdownWrapper from "@/app/component/MarkdownWrapper";
import {
  sorting,
  bubbleSort,
  selectionSort,
  insertionSort,
  inbuilt,
  bubbleSortWithRecursion,
  selectionSortWithRecursion,
} from "@/app/markdowns/Sorting";

const markdownMap: Record<string, string> = {
  "what-is-sorting": sorting,
  "bubble-sort": bubbleSort,
  "selection-sort": selectionSort,
  "insertion-sort": insertionSort,
  "inbuilt-sort": inbuilt,
  "bubble-rec": bubbleSortWithRecursion,
  "selection-rec": selectionSortWithRecursion,
};

export default async function Sorting({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const markdown = markdownMap[slug] || "404 - Topic Not Found";
  return <MarkdownWrapper>{markdown}</MarkdownWrapper>;
}
