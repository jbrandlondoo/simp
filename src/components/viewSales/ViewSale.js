import React from 'react'
import { connect } from 'react-redux'
import Sale from './Sale'
import TableSales from './TableSales'
import * as config from './../../config'
import Axios from 'axios'

class ViewSale extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sale:'',
            rows:''
        }
    }
    componentDidMount(){
        Axios.get(`${config.URL_API}/api/v1/getBills/${
            this.props.authentication.storeId}`,{headers:{'Authorization':'Bearer ' + this.props.authentication.token}}).then(async (response)=>{
            this.setState({
                rows: response.data
            })
          })
    }
    componentWillUnmount(){

    }
    render(){
    return(<div>
        <div style={{height:70}}></div>
        {/* <Sale products={this.sale?this.sale.products:null}/> */}
        <TableSales rows={this.state.rows} showSale={sale=>this.setState({sale})}/>
    </div>)
    }
}
const mapDispatchToProps = dispatch => ({

})
const mapStateToProps = state => state
export default connect(mapStateToProps,mapDispatchToProps)(ViewSale)