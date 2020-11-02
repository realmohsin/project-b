import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Container, Typography } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'
import rightInfoSection1Bg from '../../assets/images/services-page/right-info-section-1-bg.jpg'

const useStyles = makeStyles(theme => ({
  example: {
    // ...mobile first styles,
    [theme.breakpoints.up('sm')]: {
      //...sm and up styles
    },
    [theme.breakpoints.up('md')]: {
      //...md and up styles
    },
    '@media (min-width: 1320px)': {
      //...rules for above 1320px
    }
  },
  rightInfoSection1: {
    paddingTop: '23rem',
    backgroundImage: `url(${rightInfoSection1Bg})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    height: '84rem',
    color: 'white'
  }
}))

const RightInfoSection1 = props => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <section className={classes.rightInfoSection1}>
      <Container>
        <Grid container>
          <Grid item xs={0} md={6} />
          <Grid item xs={12} md={6}>
            <ThemedContentBox
              title='Designing. Building. Delivering.'
              subtitle='Design / Build'
              onDarkBg
            >
              <Typography variant='body1' gutterBottom>
                Minimizing owner risk and reducing the delivery schedule by
                overlapping the design and construction phases requires a team
                of construction professionals who understand how to effectively
                combine design, permit, and construction schedules. Our
                design/build team not only understands the process, they
                appreciate the intricacies of pulling critical schedules
                together in a coherent and economical manner.
              </Typography>
              <Typography variant='body1' gutterBottom>
                This system has several positive results including guaranteed
                outcome, turnkey solution, single-source accountability,
                fast-track option, and a guaranteed maximum price.
              </Typography>
            </ThemedContentBox>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default RightInfoSection1