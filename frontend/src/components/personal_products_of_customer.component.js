import React, {Component} from 'react';
import axios from 'axios';

export default class PersonalProductsListOfCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
    }
    componentDidMount() {
        axios.post('http://localhost:4000/find_personal_products_of_customer', {
            customer_name : localStorage.getItem("gotname")
        })
             .then(response => {
                 console.log(response.data);
                 this.setState({users: response.data});

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
                            <th>Quantity Ordered</th>
                            <th>Quantity Left</th>
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
                                    <td>{currentUser.quantity}</td>
                                    <td>{currentUser.quantity_left}</td>
                                    <td>{currentUser.vendor_name}</td>
                                    <td>{currentUser.status}</td>
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