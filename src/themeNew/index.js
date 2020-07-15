import { createMuiTheme } from '@material-ui/core/styles'
// import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'

const themeNew = createMuiTheme({
  palette: {
    primary: {
      main: green[200]
    },
    secondary: {
      main: green[500]
    }
  },
  typography: {}
})

export default themeNew
