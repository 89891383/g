import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import debounce from 'lodash.debounce';

import MobileMenu from 'components/organisms/MobileMenu/MobileMenu';
import NavItems from 'components/molecules/NavItems/NavItems';

import * as styles from './Navigation.module.scss';
import logo from 'images/logo.svg';
import menuicon from 'images/menuicon.svg';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const handleResize = () => {
    if (window.innerWidth < 450) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  window.addEventListener('resize', debounce(handleResize, 150));

  useEffect(() => {
    handleResize();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div>
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>

      {isMobile ? (
        <div>
          <img src={menuicon} onClick={() => setIsMenuOpen(true)} />
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
