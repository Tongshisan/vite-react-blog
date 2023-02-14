import { FunctionComponent } from "react";
import Test from './article/test';
import MarkdownTest from './markdown/test';

interface BlogProps {

}

const Blog: FunctionComponent<BlogProps> = () => {
  return (
    <div>
      {/* <Test /> */}
      <MarkdownTest />
    </div>
  );
}

export default Blog;
