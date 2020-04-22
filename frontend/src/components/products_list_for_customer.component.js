import React, {Component} from 'react';
import axios from 'axios';

export default class ProductsListForCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
    }
    componentDidMount() {
        axios.get('http://localhost:4000/get_all_products')
             .then(response => {
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
                            {/* <th>Quantity Left</th> */}
                            <th>Vendor Name</th>
                            <th>Status</th>
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
                                    {/* <button type="button" class="btn btn-sucess">Order Item</button> */}
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