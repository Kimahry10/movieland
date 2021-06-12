import React from 'react'
import styles from './Button.module.scss';

const Button = ({children, ...rest}) => {
  return (
    <button className={`button ${styles.sbButton}`} {...rest}>
      {children}
    </button>
  )
}

export default Button
