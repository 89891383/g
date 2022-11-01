import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap';
import debounce from 'lodash.debounce';

import MobileMenu from 'components/organisms/MobileMenu/MobileMenu';
import NavItems from 'components/molecules/NavItems/NavItems';

import * as styles from './Navigation.module.scss';
import logo from 'images/logo.svg';
import menuicon from 'images/menuicon.svg';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const navRef = React.useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 450) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();

    gsap.fromTo(
      navRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5 }
    );

    window.addEventListener('resize', debounce(handleResize, 150));
  }, []);

  return (
    <div className={styles.wrapper} ref={navRef}>
      <div>
        <Link to="/">
          <img src={logo} alt="Revku Logo" />
        </Link>
      </div>

      {isMobile ? (
        <div>
          <img
            src={menuicon}
            alt="Otwórz menu"
            onClick={() => setIsMenuOpen(true)}
          />
          {isMenuOpen ? <MobileMenu setIsMenuOpen={setIsMenuOpen} /> : null}
        </div>
      ) : (
        <div>
          <NavItems
            itemClassName={styles.item}
            activeClassName={styles.active}
            type={'desktop'}
          />
        </div>
      )}
    </div>
  );
};

export default Navigation;
