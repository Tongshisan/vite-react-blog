import { FunctionComponent } from "react";
import { useNavigate } from 'react-router-dom';
import Test from './article/test';
import MarkdownTest from './markdown/test';
import styles from './index.module.scss';

interface BlogProps {

}

const Blog: FunctionComponent<BlogProps> = () => {

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  }

  return (
    <div className={styles.wrap}>
      {/* <header className={styles.header}>
        <span onClick={handleBackClick}>返回</span>
      </header> */}
      {/* <Test /> */}
      <MarkdownTest />
    </div>
  );
}

export default Blog;
