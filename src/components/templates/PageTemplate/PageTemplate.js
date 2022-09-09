import React from 'react'
import * as styles from './PageTemplate.module.scss'

import '@styles/global.scss';

const PageTemplate = ({children}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.content}>
            {children}
        </div>
    </div>
  )
}

export default PageTemplate