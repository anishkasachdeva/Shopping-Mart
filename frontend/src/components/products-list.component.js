import React, {Component} from 'react';
import axios from 'axios';

export default class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
    }
    componentDidMount() {
        axios.get('http://localhost:4000/get_all_products')
             .then(response => {
                // console.log(response.data.length);//  console.log(response.data[12].product_name)
                // console.log(response.data);
                
                 this.setState({users: response.data});
// console.log("hbdsihvbdjcbajd");
             })
             .catch(function(error) {
                 console.log(error);
             })
    }
    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Vendor Name</th>
                            <th>Is Dispatched</th>
                            <th>Is Canceled</th>
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        this.state.users.map((currentUser, i) => {
                            return (
                                <tr>
                                    <td>{currentUser.product_name}</td>
                                    <td>{currentUser.price}</td>
                                    <td>{currentUser.quantity}</td>
                                    <td>{currentUser.username}</td>
                                    <td>{currentUser.is_dispatched}</td>
                                    <td>{currentUser.is_canceled}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}