import { FunctionComponent, useState } from "react";
import { useNavigate } from 'react-router-dom'
import avatar from '@/assets/imgs/avatar.jpeg';
import expand from '@/assets/imgs/expand.png';
import { routes } from './define';
import styles from './index.module.scss';
interface IHomeProps {

}



const Home: FunctionComponent<IHomeProps> = () => {

  const [isShowNav, setIsShowNav] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleExpandIconClick = () => {
    setIsShowNav((bool) => !bool)
  }

  const setRoute = (route: string): void => {
    navigate(route)
  }

  return (
    <div className={styles.wrap}>
      <nav className={`${styles.nav} ${isShowNav ? styles['show-nav'] : ''}`}>
        <div className={styles['nav-main']}>
          <div className={styles['avator']}>
            <img src={avatar} alt="" />
          </div>
          <ul>
            {
              routes.map((route: any) => (
                <li onClick={() => setRoute(route.route)}>{route.name}</li>
              ))
            }
          </ul>
        </div>
        <div
          className={styles['show-nav-btn']}
          onClick={handleExpandIconClick}
        >
          <img src={expand} alt="" />
        </div>
      </nav>
      <header>
        <h1>我的主页</h1>
        <p>如你, 才华横溢</p>
        <button id="loginBtn">登录</button>
      </header>
      <main>
        <div className={styles['container']}>
          <h2>关于我的主页</h2>
          <p>闲着没事乱写的</p>
          <h2>啦啦啦</h2>
          <p>让我们唱一首歌吧</p>
          <h2>唱什么歌</h2>
          <p>就唱我们八路军的军歌</p>
        </div>
      </main>
    </div>
  );
}

export default Home;
