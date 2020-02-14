import React from 'react'
import {AppBar, Container, Toolbar} from '@material-ui/core'

export const Page = () => {
  return (
    <Container fixed>

      <AppBar>
        <Toolbar>

        </Toolbar>
      </AppBar>
      <Toolbar/>

      <div style={{height: 400, backgroundColor: 'green'}}>
      </div>

      <AppBar style={{top: 'unset', bottom: 0}}>
        <Toolbar>

        </Toolbar>
      </AppBar>

    </Container>
  )
}