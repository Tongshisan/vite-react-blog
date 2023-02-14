
import React, { FunctionComponent, memo } from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
  markdown: any;
}

export const Markdown: FunctionComponent<MarkdownProps> = ({
  markdown
}) => {
  return (
    <ReactMarkdown children={markdown} />
  );
}

export const MarkdownMemo = memo(Markdown);

export default Markdown;
