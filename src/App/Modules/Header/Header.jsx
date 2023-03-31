import st from './Header.module.css';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <div className={st.header}>
      <div className={st.headerBox}>
        <div className={st.item}>
          <Logo/>
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