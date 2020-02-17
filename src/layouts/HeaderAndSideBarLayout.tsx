import React from 'react'
import {AppBar, Container, Drawer, Toolbar} from '@material-ui/core'

export const HeaderAndSideBarLayout = () => {
  return (
    <div style={
      {
        // Layout properties
        marginTop: '64px', // Height of top bar
        marginLeft: '80px' // Width of side bar
      }
    }>
      <Container>

        <AppBar style={
          {
            // Layout properties
            zIndex: 1201 // More than Drawer's z-index
          }
        }>
          <Toolbar>
            This is the navbar
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" PaperProps={{style:
          {
            // Layout properties
            marginTop: '64px', // Height of top bar
            bottom: 0,
            height: 'unset',
            width: '80px', // Can be any width

            // Demo properties
            backgroundColor: 'blue'
          }
        }}>
           This is the side bar
        </Drawer>

        <div style={
          {
            // Demo properties
            height: '400px',
            backgroundColor: 'green'
          }
        }>
          This is the content
        </div>

      </Container>
    </div>
  )
}