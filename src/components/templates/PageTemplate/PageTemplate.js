import React from 'react';
import gsap from 'gsap';
import * as styles from './PageTemplate.module.scss';

import 'styles/global.scss';
import Navigation from 'components/organisms/Navigation/Navigation';

const PageTemplate = ({ children }) => {
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    gsap.fromTo(
      wrapperRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.2 }
    );
  }, []);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.content}>
        <Navigation />
        {children}
      </div>
    </div>
  );
};

export default PageTemplate;
