
import React from 'react'
import Axios from 'axios'
import * as config from './../../config'
import { connect } from 'react-redux'
import Table from './../../components/table/Table'

class TableProducts extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            products:[]
        }
    }
    componentDidMount(){
        Axios.post(config.URL_API+'/api/v1/storeProducts',{store_id:this.props.authentication.storeId},{headers:{'Authorization':'Bearer ' + this.props.authentication.token}}).then((response)=>{
            this.setState({
                products:response.data.success
            })
        });
    }
    componentWillUnmount(){

    }
    render(){
        return(
            <div >
                <div style={{height:70}}></div>
                 <Table rows={this.state.products}/>
            </div>
        )
    }
}
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps,mapDispatchToProps)(TableProducts)