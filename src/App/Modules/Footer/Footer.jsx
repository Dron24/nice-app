import st from './Footer.module.css';
import fakeImg from './fake.jpg'

function Footer() {
  return (
    <div className={st.footer}>
        <div className={st.footerBox}>
          <div className={st.item}>
            &copy; 2023 Степанов А. А. <span>All rights reserved</span>
          </div>
          <div className={st.item}>
            Пустой бокс
          </div>
          <div className={st.item}>
            <img src={fakeImg} alt="fakeImg"/>
          </div>
        </div>
    </div>
  );
}

export default Footer;