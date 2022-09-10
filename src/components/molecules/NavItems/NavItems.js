import React from 'react'
import { Link } from 'gatsby'

import { navItems } from '@src/config/navItems'

const NavItems = ({itemClassName, activeClassName, type}) => {
  return (
    <>
        {navItems.map(item => {
            return (
                <Link
                    to={item.url}
                    className={itemClassName}
                    activeClassName={activeClassName}
                    key={item.url}
                >{type == 'desktop' ? item.titleDesktop : item.titleMobile}</Link>
            )
        })}
    </>
  )
}

export default NavItems