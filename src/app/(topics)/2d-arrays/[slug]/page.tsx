import MarkdownWrapper from "@/app/component/MarkdownWrapper";
import {
  spiralMatrix,
  diagonalSum,
  searchInMatrix,
  basics,
} from "@/app/markdowns/2dArrays";

const markdownMap: Record<string, string> = {
  "2d-basics": basics,
  "spiral-matrix": spiralMatrix,
  "diagonal-sum": diagonalSum,
  "search-in-matrix": searchInMatrix,
};

export default async function TwoDArrays({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const markdown = markdownMap[slug] || "404 - Topic Not Found";
  return <MarkdownWrapper>{markdown}</MarkdownWrapper>;
}
