import MarkdownWrapper from "@/app/component/MarkdownWrapper";
import {
  arraylistBasics,
  sortingComparator,
  twoDArrayList,
  pairSum1,
  pairSum2,
  containerMostWater,
} from "@/app/markdowns/ArrayList";

const markdownMap: Record<string, string> = {
  basics: arraylistBasics,
  "sorting-comparator": sortingComparator,
  "2d-arraylist": twoDArrayList,
  "pair-sum-1": pairSum1,
  "pair-sum-2": pairSum2,
  "container-most-water": containerMostWater,
};

export default async function Arraylist({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const markdown = markdownMap[slug] || "404 - Topic Not Found";
  return <MarkdownWrapper>{markdown}</MarkdownWrapper>;
}
