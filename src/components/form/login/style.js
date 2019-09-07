import { makeStyles } from '@material-ui/core/styles'

export const styleLogin = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        background:'#574F7D'
    },
    textField: {
        margin: theme.spacing(0.1),
        flexBasis: 200,
    },
}));