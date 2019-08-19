import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// import { makeStyles } from '@material-ui/core/styles'
import { styleLogin } from './style'
// import Visibility from '@material-ui/icons/Visibility'
// import VisibilityOff from '@material-ui/icons/VisibilityOff'

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
        'password',
        'mail'
    ]
    requirements.map(item => {
        if (!values[item]) {
          errors[item] = 'Required'
        }
        return item
      })
      if (values.mail && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)
      ) {
        errors.mail = 'Correo invalido'
      }
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

//   const renderPasswordField = ({
//     label,
//     input,
//     meta: { touched, invalid, error },
//     ...custom
//   }) => (
//       <div>
//   <InputLabel htmlFor="adornment-password">Password</InputLabel>
//         <Input
//           id="adornment-password"
//           type={values.showPassword ? 'text' : 'password'}
//           value={values.password}
//           onChange={handleChange('password')}
//           endAdornment={
//             <InputAdornment position="end">
//               <IconButton
//                 aria-label="toggle password visibility"
//                 onClick={handleClickShowPassword}
//                 onMouseDown={handleMouseDownPassword}
//               >
//                 {values.showPassword ? <Visibility /> : <VisibilityOff />}
//               </IconButton>
//             </InputAdornment>
//           }
//         />
//         </div>
//   )




const Login = props =>{
    let {handleSubmit, pristine, submitting} = props
    let classes = styleLogin()
    return(
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <Field 
            className={classes.textField}
            name="mail"
            component={renderTextField}
            label="Email"
            />
        </div>

        <div>
            <Field
            className={classes.textField}
            name="password"
            component={renderTextField}
            label="Contraseña"
            />
        </div>

        <div>
            <Button type="submit" disabled={pristine || submitting} variant="contained" color="primary" className={classes.button} >
                Ingresar
            </Button >
        </div>
 
    </form>
)
}
export default reduxForm({
    form:'Login',
    validate
})(Login)