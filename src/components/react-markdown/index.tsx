
import React, { FunctionComponent, memo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'


interface MarkdownProps {
  markdown: any;
}

export const Markdown: FunctionComponent<MarkdownProps> = ({
  markdown
}) => {
  return (
    <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
  );
}

export const MarkdownMemo = memo(Markdown);

export default Markdown;
