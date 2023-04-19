import React from 'react'

const useStickyState = <T>(defaultValue: T, key: string): [T, React.Dispatch<T>] => {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key)
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
  })
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue]
}

export default useStickyState
