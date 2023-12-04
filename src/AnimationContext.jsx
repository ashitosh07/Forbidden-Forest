// AnimationContext.jsx
import React, { createContext, useContext, useState } from 'react'

const AnimationContext = createContext()

export const AnimationProvider = ({ children }) => {
  const [isSwordAnimating, setIsSwordAnimating] = useState(false)

  const startSwordAnimation = () => {
    setIsSwordAnimating(true)
  }

  const resetSwordAnimation = () => {
    setIsSwordAnimating(false)
  }

  return (
    <AnimationContext.Provider
      value={{ isSwordAnimating, startSwordAnimation, resetSwordAnimation }}
    >
      {children}
    </AnimationContext.Provider>
  )
}

export const useAnimation = () => {
  const context = useContext(AnimationContext)
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider')
  }
  return context
}
