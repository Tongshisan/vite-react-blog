import { FunctionComponent } from "react";
import Test from './article/test';

interface BlogProps {

}

const Blog: FunctionComponent<BlogProps> = () => {
  return (
    <div>
      <Test />
    </div>
  );
}

export default Blog;
