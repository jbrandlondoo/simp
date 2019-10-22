import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import * as config from './../../config'
import { connect } from 'react-redux'

import Axios from 'axios'
import { login } from './../../store/action/index'




/**
 * @description 
 * @param {*} values 
 */
const validate = values => {
    const errors = {}
    let requirements = [
        'name',
        'document_number',
        'address',
        'phone'
    ]
    requirements.map(item => {
        if (!values[item]) {
            errors[item] = 'Required';
        }
        return item;
    })

    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Correo invalido'
    }
    if (values.password) {
        if (values.password.split('').length < 6) {
            errors.password = 'Minimo 6 caracteres'
        }
    }
    return errors;
}

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
    );

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        background: '#574F7D'
    },
    textField: {
        margin: theme.spacing(0.1),
        flexBasis: 200,
    },

    formControl: {
        margin: theme.spacing(3),
    },
    group: {
        margin: theme.spacing(1, 0),
    },

    botones: {
        display: 'inline-block',

    },

    userRegisterDivMain: {
        borderRadius: '8px 8px 0px 0px',
        // display: 'inline-block',
        display: 'inline-flex',
        background: 'blue',
        marginLeft: '35%',
        marginRight: '35%',
        marginTop: '10%',
        // width: 'auto',
        // height: 'auto',
        textAlign: 'center',
    },

    userRegisterDiv: {
        display: 'inline-flexbox',
        textAlign: 'center',
        // width: 'auto',
        height: '90%',
        Top: '100px',
        background: 'white',
        // background: 'red',
        marginTop: '10%',


    },
}));


const UserRegister = props => {
    const [value, setValue] = React.useState('Almacen');
    let { handleSubmit, pristine, submitting } = props;
    let classes = useStyles();

    /**
 * @description se encarga de enviar los datos al BackEnd
 * @param {values} {'name','document_number','city','province','address','phone' }
 * @returns {null}
 */
    // let onSubmit = values => {
    //     console.log(values)
    //     values.address = `${values.address},${values.city},${values.province}`
    //     Axios.post(`${config.URL_API}/api/v1/createStore`,values).then(async (response)=>{
    //         let data = response.data.success;
    //         console.log(data)
    //       })
    // }

    const onSubmit = async values => {
        values.role_id = 2
        Axios.post(`${config.URL_API}/api/v1/register`, values).then(async (response) => {
            let data = response.data.success;
            await props.login({storeName:'',token:data.token,error:'',userId:data.id,name:data.name,storeId:''})
            localStorage.setItem('authentication', JSON.stringify({storeName:'',token:data.token,error:'',userId:data.id,name:data.name,storeId:''}))
        });
    }

    function handleChange(event) {
        setValue(event.target.value);

    }
    return (
        <form style={{ display: !props.visible ? 'block' : 'none' }} onSubmit={handleSubmit(onSubmit)}>

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
                    name="lastname"
                    component={renderTextField}
                    label="Apellido"
                />
            </div>

            <div>
                <Field
                    className={classes.textField}
                    name="document_number"
                    component={renderTextField}
                    label="Cedula"
                />
            </div>

            <div>
                <Field
                    className={classes.textField}
                    name="email"
                    component={renderTextField}
                    label="Correo"
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
                <Field
                    className={classes.textField}
                    name="password"
                    component={renderPasswordField}
                    label="Contraseña"
                />
            </div>



             <div>
                <Field
                    className={classes.textField}
                    name="c_password"
                    component={renderPasswordField}
                    label="Repetir Contraseña"
                />
            </div>

            <div className={classes.botones}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">tipo negocio</FormLabel>
                    <RadioGroup
                        className={classes.botones}
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Almacen" control={<Radio />} label="Almacen" />
                        <FormControlLabel value="Proveedor" control={<Radio />} label="Proveedor" />
                    </RadioGroup>
                </FormControl>
            </div>

            <div>
                <Button type="submit" disabled={pristine || submitting} variant="contained" color="primary" className={classes.button} >
                    Registrarse
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
    form: 'userRegister',
    validate
})(connect(mapStateToProps, mapDispatchToProps)(UserRegister));