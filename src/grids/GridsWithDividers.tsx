import React from 'react'
import {Divider, Grid} from '@material-ui/core'

export const GridsWithDividers = () => {
  return (
    <Grid container>
      <Grid item xs>
        <div style={{
          // Demo properties
          height: '400px',
          backgroundColor: 'green'
        }}>
          Left Box
        </div>
      </Grid>
      <Divider
        orientation="vertical"
        flexItem
        style={{backgroundColor: "red", margin: "20px 0", width: "5px"}}
      />
      <Grid item xs={3}>
        <div style={{
          // Demo properties
          height: '600px',
          backgroundColor: 'blue'
        }}>
          Right Box
        </div>
      </Grid>
    </Grid>
  )
}