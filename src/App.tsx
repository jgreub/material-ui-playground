import React from 'react'
import {CssBaseline} from '@material-ui/core'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import {HamburgerLayout} from './layouts/HamburgerLayout'
import {HeaderAndSideBarLayout} from './layouts/HeaderAndSideBarLayout'

const theme = createMuiTheme({
})

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {/*<HamburgerLayout/>*/}
      <HeaderAndSideBarLayout/>
    </ThemeProvider>
  )
}
