import React, {useContext} from 'react'
import { ThemeContext } from '../../../lib/context'

const ThemeToggler = () => {

  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = (e) => {
    e.preventDefault();
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const buttonStyle = {
  background: 'none',
  padding: '0.5rem',
  border: 'none',
  }

  const spanStyle = {
    fontSize: '2rem'
  }

  return (
    <button style={buttonStyle} className="themetoggler" onClick={handleThemeToggle}>
      <span style={spanStyle} role="img" aria-label="switch theme">
        {theme === 'light' ? '🌞' : '🔅'}
      </span>
    </button>
  )

}

export default ThemeToggler
