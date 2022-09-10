import React from 'react'
import * as styles from './PageTemplate.module.scss'

import '@styles/global.scss';
import Navigation from '@organisms/Navigation/Navigation'

const PageTemplate = ({children}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.content}>
            <Navigation />
            {children}
        </div>
    </div>
  )
}

export default PageTemplate