import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { Typography, Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  }
}))

const Footer = (props) => {
  const { className, ...rest } = props

  const classes = useStyles()

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography variant="body1">
        &copy;{' '}
        <Link
          component="a"
          href="https://andrewkeithly.github.io/"
          target="_blank">
          Andrew Keithly
        </Link>
        . 2020
      </Typography>
      <Typography variant="caption">
        Just trying out React and Material-UI!
      </Typography>
    </div>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer
