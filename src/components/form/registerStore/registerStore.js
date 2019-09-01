import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

/**
 * @description se encarga de enviar los datos al BackEnd
 * @param {values} {'name','document_number','city','province','address','phone' }
 * @returns {null}
 */
const onSubmit = values => {
    console.log('values',values)
  }

/**
 * @description 
 * @param {*} values 
 */
const validate = values => {
    const errors = {}
    let requirements = [
        'name',
        'document_number',
        'city',
        'province',
        'address',
        'phone'
    ]
    requirements.map(item => {
        if (!values[item]) {
          errors[item] = 'Required'
        }
        return item
      })
      return errors
}

const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      label={label}
    //   style={{background:'rgba(51, 51, 51, 0.06)',borderRadius:'8px 8px 0px 0px'}}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        background:'#574F7D'
    },
    textField: {
        margin: theme.spacing(0.1),
        flexBasis: 200,
    },
}))


const RegisterStore = props =>{
    let {handleSubmit, pristine, submitting} = props
    let classes = useStyles()
    return(
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <Field 
            className={classes.textField}
            name="name"
            component={renderTextField}
            label="Nombre"
            />
        </div>

        <div>
            <Field
            className={classes.textField}
            name="document_number"
            component={renderTextField}
            label="Docuemento"
            />
        </div>

        <div>
            <Field
            className={classes.textField}
            name="province"
            component={renderTextField}
            label="Departamento"
            />
        </div>

        <div>
            <Field
            className={classes.textField}
            name="city"
            component={renderTextField}
            label="Ciudad"
            />
        </div>

        <div>
            <Field
            className={classes.textField}
            name="address"
            component={renderTextField}
            label="Dirección"
            />
        </div>

        <div>
            <Field
            className={classes.textField}
            name="phone"
            component={renderTextField}
            label="Teléfono"
            />
        </div>
        <div>
            <Button type="submit" disabled={pristine || submitting} variant="contained" color="primary" className={classes.button} >
                Registarse
            </Button >
        </div>
 
    </form>
)
}
export default reduxForm({
    form:'RegisterStore',
    validate
})(RegisterStore)