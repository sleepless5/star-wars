
export const changeCssVariables = theme => {
  const root = document.querySelector(':root')
  root.style.setProperty(`--theme-default-header`, `var(--theme-${theme}-header)`)

  root.style.setProperty(`--theme-default-bgImage`, `var(--theme-${theme}-bgImage)`)
  const cssVariables = ['header', 'bgImage']

  cssVariables.forEach(element => {
    root.styles.setProperty(`--theme-default-${element}`, `var(--theme-${theme}-${element})`)
  })

}