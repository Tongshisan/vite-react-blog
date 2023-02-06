import { FunctionComponent, ReactNode } from "react";
import './index.css';

interface TopProgressBarProps {
  children: ReactNode
}

export const TopProgressBar: FunctionComponent<TopProgressBarProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default TopProgressBar;
