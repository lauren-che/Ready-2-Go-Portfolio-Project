import logo from '../../assets/logo.svg';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles['navbar-container']}>
      <div className={styles['navbar']}>
        <img className={styles['logo']} src={logo} alt="Ready 2 Go Logo" />
        <div className={styles['navbox']}>
        <nav>
          <ul id="menuList">
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </nav>
      <button className={styles['nav-btn']}>Book A Ride</button>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
