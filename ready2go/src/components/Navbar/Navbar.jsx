import logo from '../../assets/logo.svg';
import styles from './Navbar.module.css';
import menuImg from '../../assets/menu.png';

const Navbar = () => {
  const menuList = document.getElementById('menuList');
  const toggleMenu = () => {
    // This line of code checks whether the max-height property of the menuList element is currently set to 0 pixels. If it is, the following code block will execute.
    // This line of code sets the CSS property max-height of the menuList element to 0 pixels, effectively hiding the element from view.
    if (menuList.style.maxHeight === '0px') {
      // If it is, this line of code sets the max-height property of the menuList element to 130 pixels, causing the element to expand and become visible.
      menuList.style.maxHeight = '130px';
      // This line of code signifies the start of the else code block, which will execute if the condition in line 10 is not true.
    } else {
      menuList.style.maxHeight = '0px';
    }
  };
  return (
    <div className={styles['navbar-container']}>
      <div className={styles['navbar']}>
        <img className={styles['logo']} src={logo} alt="Ready 2 Go Logo" />
        <div className={styles['navbox']}>
          {/* the svg for the black bar behind the menu */}
          <svg
            className="inner"
            viewBox="0 0 800 90"
            preserveAspectRatio="xMinYMin meet"
          >
            <path d="M 200 0 C 250 85 250 110 500 100 L 800 100 L 800 0 L 200 0 " />
          </svg>

          {/* menu list */}
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
          <button className={styles['nav-btn']}>
            <span>Book A Ride</span>
          </button>
          <img
            className={styles['menu-icon']}
            src={menuImg}
            alt="menu icon"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
