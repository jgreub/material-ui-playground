import React from 'react'
import {CssBaseline} from '@material-ui/core'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import {Page} from './Page'

const theme = createMuiTheme({
})

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Page/>
    </ThemeProvider>
  )
}
