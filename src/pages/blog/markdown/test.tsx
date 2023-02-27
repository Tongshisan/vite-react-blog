import React, { FunctionComponent } from 'react';
import { Markdown, TopProgressBar, Article } from '@/components';
import Test from './test.mdx';
// import ReactComponent from './test.md';
// import { ReactComponent } from './test.md';

interface MarkdownTestProps {

}

const a = `# test`;

const md = `
  # md
  + 1
  + 2
  + 3


  > 这是一段描述文字

  *斜体*

  **加粗**

  ***加粗斜体***

  ---
  zhe ~~这行文字带有删除线~~
  - [ ] 1
  - [ ] 2
`

const MarkdownTest: FunctionComponent<MarkdownTestProps> = () => {
  return (
    // <Markdown markdown={md} />
    <Article>
      <Test />
    </Article>
    // <ReactComponent />
    // <div>null</div>
  );
}

export default MarkdownTest;
