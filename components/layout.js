import React from 'react'

import styles from './layout.module.css'

// eslint-disable-next-line react/prop-types
export default function Layout ({ children }) {
  return <div className={styles.container}>{children}</div>
}
