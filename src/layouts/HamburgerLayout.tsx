import React from 'react'
import {AppBar, Container, Toolbar} from '@material-ui/core'

export const HamburgerLayout = () => {
  return (
    <div style={
      {
        // Layout properties
        marginTop: '64px', // Height of top bar
        marginBottom: '64px', // Height of bottom bar
      }
    }>
      <Container>

        <AppBar>
          <Toolbar>
            This is the navbar
          </Toolbar>
        </AppBar>

        <div style={
          {
            // Demo properties
            height: '400px',
            backgroundColor: 'green'
          }
        }>
          This is the content
        </div>

        <AppBar style={{top: 'unset', bottom: 0}}>
          <Toolbar>
            This is the bottom bar
          </Toolbar>
        </AppBar>

      </Container>
    </div>
  )
}