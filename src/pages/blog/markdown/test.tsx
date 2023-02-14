import React, { FunctionComponent } from 'react';
import { Markdown } from '@/components';
import Test from './test.mdx';

interface MarkdownTestProps {

}

const a = `# test`;

const MarkdownTest: FunctionComponent<MarkdownTestProps> = () => {
  return (
    // <Markdown markdown={test} />
    <Test />
    // <div>null</div>
  );
}

export default MarkdownTest;
