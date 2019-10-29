import React from 'react'
import Axios from 'axios'
import * as config from './../../config'
import { connect } from 'react-redux'
import Table from './../../components/table/Table'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = {
    addProduct: {
        fontFamily: 'Roboto',
        fontSize: 24,
        width: '100%',
        textAlign: 'center',
        height: 30,
        padding: 5,
        margin: 10,
    },

    addButton: {
        background: '#574F7D',
        color: '#FFFFFF',
        margin: 10

    },

    inputText: {
        width: 200,
        height: 20,
        margin: 20,
    }

}

class TableProducts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            name: "",
            quantity: "",
            price: "",
            
        }
    }

    addProduct() {
        Axios.post(config.URL_API + '/api/v1/createProduct', { store_id: this.props.authentication.storeId, name: this.state.name, price: this.state.price, quantity: this.state.quantity }, { headers: { 'Authorization': 'Bearer ' + this.props.authentication.token } }).then((response) => {
            this.getData();
            this.setState({
                name: "",
                quantity: "",
                price: "",})

        });

        

    }

    getData() {
        Axios.post(config.URL_API + '/api/v1/storeProducts', { store_id: this.props.authentication.storeId }, { headers: { 'Authorization': 'Bearer ' + this.props.authentication.token } }).then((response) => {
            this.setState({
                products: response.data.success
            })
        });
    }



    componentDidMount() {
        this.getData();

    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div >


                <div style={{ height: 70 }}></div>

                <div>

                    <TextField value={this.state.name} placeholder={"nombre"} style={styles.inputText} onChange={text => this.setState({ name: text.target.value })} />


                    <TextField value={this.state.price} placeholder={"precio"} style={styles.inputText} onChange={text => this.setState({ price: text.target.value })} />


                    <TextField value={this.state.quantity} placeholder={"cantidad"} style={styles.inputText} onChange={text => this.setState({ quantity: text.target.value })} />


                </div>


                <Button style={styles.addButton} onClick={this.addProduct.bind(this)}>Añadir Producto</Button>

                <Table isView rows={this.state.products} />
            </div>
        )
    }
}
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(TableProducts)