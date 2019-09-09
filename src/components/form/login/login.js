import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// import { makeStyles } from '@material-ui/core/styles'
import { styleLogin } from './style'
// import Visibility from '@material-ui/icons/Visibility'
// import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { connect } from 'react-redux'
import { login } from './../../../store/action/index'
import * as config from './../../../config'

/**
 * @description se encarga de enviar los datos al BackEnd
 * @param {values} {'name','document_number','city','province','address','phone' }
 * @returns {null}
 */

const onSubmit = async values => {
  // let res = ''
  // let token = ''
  // try{
  //   res = await fetch(config.URL_API+':'+config.PORT_API,config.HEADERS)
  //   this.props.login({ token:res.data.success.token,error:'',userId:1,name:'juan', storeName:'kakashi'})
  //   localStorage.setItem('authentication', this.props.authentication)
  // }catch(err){
  //   console.log(err)
  // }
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
  if (values.password) {
    if (values.password.split('').length < 6) {
      errors.password = 'Minimo 6 caracteres'
    }
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
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );

const renderPasswordField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
    <TextField
      label={label}
      type={'password'}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );

const Login = props => {
  let { handleSubmit, pristine, submitting } = props
  let classes = styleLogin()
  console.log('props', props)
  return (
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
          component={renderPasswordField}
          label="Contraseña"
        />
      </div>

      <div>
        <Button type="submit" disabled={pristine || submitting} variant="contained" color="primary" className={classes.button} >
          Ingresar
            </Button >
      </div>

    </form>
  );
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(login(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'Login',
  validate
})(Login));
