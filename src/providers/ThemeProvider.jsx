"use client"

import React, { useContext } from 'react'

export const ThemeProvider = ({children}) => {
    const {theme} = useContext(ThemeProvider)
  return (
    <div className={theme}>{children}</div>
  )
}
