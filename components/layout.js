import React from 'react'

import styles from './layout.module.scss'

// eslint-disable-next-line react/prop-types
export default function Layout ({ children }) {
  return <div className={styles.container}>{children}</div>
}
