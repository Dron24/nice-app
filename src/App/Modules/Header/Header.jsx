import { useRef, useLayoutEffect } from "react";
import './HeaderFix.css'
import st from './Header.module.css';

import Logo from '../Logo/Logo';

function Header() {
  const stickyHeader = useRef();

  useLayoutEffect(() => {
    const header = document.getElementById('header');
    let fixedTop = stickyHeader.current.offsetTop;

    const stickyHeaderEvent = () => {
      if (window.pageYOffset > fixedTop) {
        header.classList.add('sticky-header');
      } else {
        header.classList.remove('sticky-header');
      }
    };
    window.addEventListener('scroll', stickyHeaderEvent);
  }, []);

  return (
    <div className={st.header} id='header' ref={stickyHeader}>
      <div className={st.headerBox}>
        <div className={st.item}>
          <Logo />
        </div>
        <div className={st.item}>
          Пустой бокс
        </div>
        <div className={st.item}>
          Меню
        </div>
      </div>
    </div>
  );
}

export default Header;