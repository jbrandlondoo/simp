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

/**
 * @description se encarga de enviar los datos al BackEnd
 * @param {values} {'name','document_number','city','province','address','phone' }
 * @returns {null}
 */
const onSubmit = values => {
    console.log('values', values);
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
        'address',
        'phone'
    ]
    requirements.map(item => {
        if (!values[item]) {
            errors[item] = 'Required';
        }
        return item;
    })
    return errors;
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


const userRegister = props => {
    const [value, setValue] = React.useState('Almacen');
    let { handleSubmit, pristine, submitting } = props;
    let classes = useStyles();

    function handleChange(event) {
        setValue(event.target.value);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.userRegisterDivMain}>
                <div className={classes.userRegisterDiv}>
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
                            label="Documento"
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
                </div>
            </div>
        </form>
    );
}
export default reduxForm({
    form: 'userRegister',
    validate
})(userRegister);