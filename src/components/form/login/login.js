import React,{ useEffect } from 'react'
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
import Axios from 'axios'

/**
 * @description se encarga de enviar los datos al BackEnd
 * @param {values} {'name','document_number','city','province','address','phone' }
 * @returns {null}
 */

/**
 * @description 
 * @param {*} values 
 */
const validate = values => {
  const errors = {}
  let requirements = [
    'password',
    'email'
  ]
  requirements.map(item => {
    if (!values[item]) {
      errors[item] = 'Required'
    }
    return item
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Correo inválido'
  }
  if (values.password) {
    if (values.password.split('').length < 6) {
      errors.password = 'Minímo 6 caracteres'
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
/**
 * @description esta funcion se encarga de enviar las credenciales al api rest y guardar la respuesta en redux y cache
 * @param {} values 
 */
  const onSubmit = async values => {
    Axios.post(`${config.URL_API}/api/v1/login`,values).then(async (response)=>{
      let data = response.data.success;
      await props.login({storeName:data.store[0]?data.store[0].name:'',token:data.token,error:'',userId:data.id,name:data.name,storeId:data.store[0]?data.store[0].id:''})
      localStorage.setItem('authentication', JSON.stringify({storeName:data.store[0]?data.store[0].name:'',token:data.token,error:'',userId:data.id,name:data.name,storeId:data.store[0]?data.store[0].id:''}))
    })
  }

  useEffect(()=>{
    let auth = JSON.parse(localStorage.getItem('authentication'))
    let tem = auth?props.login(auth):null
  })

  let { handleSubmit, pristine, submitting } = props
  let classes = styleLogin()
  return (
    <form style={{display:props.visible?'block':'none'}} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Field
          className={classes.textField}
          name="email"
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
export default reduxForm({
  form: 'Login',
  validate
})(connect(mapStateToProps, mapDispatchToProps)(Login));
