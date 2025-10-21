import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // Bạn có thể đổi sang 'atom-one-dark', 'monokai-sublime', v.v.

type Props = {
  content: string[];
};

export default function MarkdownRenderer({ content }: Props) {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
        {content.join("\n\n")}
      </ReactMarkdown>
    </div>
  );
}
