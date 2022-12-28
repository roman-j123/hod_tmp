import './Header.css';
import logo_black from '../img/logo_b.svg';
import courses_icon from '../img/courses_icon.svg';
import point_icon from '../img/point_icon.svg';
import login_icon from '../img/login_icon.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo_black} className="header__logo" alt="ХОД" />
      <ul className="header__navigation navigation">
        <li className="navigation__item">
          <img src={courses_icon} className="navigation__icon" alt="Все курсы"/>
          <a href="" className="navigation__link" title="Все курсы">Все курсы</a>
        </li>
        <li className="navigation__item">
          <a href="" className="navigation__link" title="Мероприятия">Мероприятия</a>
        </li>
        <li className="navigation__item">
          <a href="" className="navigation__link" title="Базы знаний">Базы знаний</a>
        </li>
        <li className="navigation__item">
          <a href="" className="navigation__link" title="Карьера">Карьера</a>
        </li>
        <li className="navigation__item">
          <img src={point_icon} className="navigation__icon" alt="Город"/>
          <a href="" className="navigation__link navigation__link_city" title="Выбрать город">Нижний Новгород</a>
        </li>
        <li className="navigation__item">
          <a href="tel:88009503398" className="navigation__link" title="Позвонить нам">8 800 950-33-98</a>
        </li>
        <li className="navigation__item">
          <img src={login_icon} className="navigation__icon" alt="Войти" />
          <a href="" className="navigation__link" title="Войти">Вход</a>
        </li>
      </ul>
      
    </header>
  );
}

export default Header;