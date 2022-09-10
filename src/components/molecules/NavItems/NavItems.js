import React from 'react'
import { Link } from 'gatsby'
import * as styles from '@organisms/Navigation/Navigation.module.scss'

const NavItems = () => {
  return (
    <div>
        <Link
            to='/' 
            className={styles.item}
            activeClassName={styles.active}
        >/</Link>
        <Link
            to='/projects' 
            className={styles.item}
            activeClassName={styles.active}
        >/projects</Link>
        <Link
            to='/uses' 
            className={styles.item}
            activeClassName={styles.active}
        >/uses</Link>
    </div>
  )
}

export default NavItems