import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'



const useStyles = makeStyles(theme => ({
    
}));


const AdminMenu = props => {
    let classes = useStyles();
    return (
        <form  style={{display:!props.visible?'block':'none'}}>

            <button>
                Agregar Producto
            </button>

            <button>
                Agregar Cajero
            </button>

            <button>
                Registrar dictribuidor
            </button>

            <button>
                Hacer Pedidos
            </button>

            <button>
                Historial de ventas
            </button>
            
                    

               
        </form>
    );
}
export default reduxForm({
    form: 'AdminMenu'
})(AdminMenu);