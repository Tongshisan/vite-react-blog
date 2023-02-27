import React, { FunctionComponent, ReactNode, memo } from "react";
import { useNavigate } from 'react-router-dom';
import { TopProgressBar } from '../top-progress-bar';
import styles from './index.module.scss';

interface ArticleProps {
  children: ReactNode
}

const Article: FunctionComponent<ArticleProps> = ({ children }) => {

  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1)
  }

  return (
    <div className={styles['article-wrap']}>
      <div className={styles['article-main']}>
        <div className={styles.header}>
          <span
            className={styles['header-back']}
            onClick={handleNavigateBack}
          >
            返回
          </span>
        </div>
        <TopProgressBar>
          {
            children
          }
        </TopProgressBar>
      </div>
    </div>
  );
}

export const ArticleMemo = memo(Article);

export default Article;
