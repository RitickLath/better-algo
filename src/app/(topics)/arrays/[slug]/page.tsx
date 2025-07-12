import MarkdownWrapper from "../../../component/MarkdownWrapper";
import fs from "node:fs";
import path from "node:path";
import { arrayMarkdownMapping } from "../../../lib/arrayMarkdownMapping";

export default async function Arrays({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug);
  const filePath = path.join(
    process.cwd(),
    "public/markdowns/ArrayMod/",
    `${arrayMarkdownMapping[slug]}`
  );

  let data = "404 - Topic Not Found";
  if (fs.existsSync(filePath)) {
    data = fs.readFileSync(filePath, "utf-8");
  }
  return <MarkdownWrapper>{data}</MarkdownWrapper>;
}
