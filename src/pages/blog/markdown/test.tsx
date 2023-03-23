import React, { FunctionComponent } from 'react';
import { Markdown, TopProgressBar, Article } from '@/components';
import Test from './test.mdx';
import { markdownStr } from './test.md';
// import { ReactComponent } from './test.md';

interface MarkdownTestProps {

}


const MarkdownTest: FunctionComponent<MarkdownTestProps> = () => {
  return (
    <Article>
      <Markdown markdown={markdownStr} />
    </Article>
    // <Article>
    //   <Test />
    // </Article>
    // <ReactComponent />
    // <div>null</div>
  );
}

export default MarkdownTest;
