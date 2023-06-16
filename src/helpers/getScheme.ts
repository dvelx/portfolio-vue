export default function () {
  const lsScheme = localStorage.getItem('user-scheme')
  const darkSchemeLocal = window.matchMedia('(prefers-color-scheme: dark)').matches
  const lightSchemeLocal = window.matchMedia('(prefers-color-scheme: light)').matches
  let scheme = '',
    checked = true

  if (darkSchemeLocal) {
    localStorage.setItem('user-theme', 'dark')
    document.documentElement.className = 'dark'
    console.log('dark')
    scheme = 'dark'
    checked = true
  }
  if (lightSchemeLocal) {
    localStorage.setItem('user-theme', 'light')
    document.documentElement.className = 'light'
    console.log('light')
    scheme = 'dark'
    checked = true
  }
  return {
    scheme,
    checked
  }
}
