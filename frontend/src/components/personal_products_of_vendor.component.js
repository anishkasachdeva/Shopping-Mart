import React, {Component} from 'react';
import axios from 'axios';

export default class PersonalProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []}
    }
    componentDidMount() {
        axios.post('http://localhost:4000/find_personal_products_of_vendors', {
                username: localStorage.getItem('gotname')
            })
        .then(response => {
            console.log(response.data);
            console.log(response.data.length);
                for(let i = 0; i < response.data.length; i++)
                {
                    console.log(response.data[i].is_dispatched);
                    // console.log("wuhuuuuuuuuuuuuuu");
                    if (response.data[i].is_dispatched === 0 && response.data[i].is_canceled === 0 && response.data[i].quantity >= 0 && response.data[i].price > 0)
                    {
                        this.setState({
                            users: this.state.users.concat(response.data[i])
                        });
                    }
                }
            })
            .catch(function(error) {
                console.log(error);
            });
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
                            <th>Orders</th>
                            <th>Dispatch</th>
                            <th>Cancel</th>
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
                                    <td>{currentUser.quantity}</td>
                                    <td>
                                    <button
                                    class="btn btn-warning" type="button"
                                    onClick={() => {
                                        // console.log(helllllllllo);
                                        axios.post("http://localhost:4000/set_dispatch_to_true", {
                                            details : currentUser._id,
                                            // product_name : currentUser.product_name,    
                                        })
                                    .then(response => console.log(response))
                                    .catch(function(error){
                                        console.log(error);
                                    });
                                    }} >
                                    Dispatch Item
                                    </button>
                                    </td>
                                    <td>
                                    <button
                                    class="btn btn-danger" type="button"
                                    onClick={() => {
                                        axios.post("http://localhost:4000/set_cancel_to_true", {
                                                details : currentUser._id,
                                                logged_in : localStorage.getItem("gotname")
                                        })
                                        .then(response => console.log(response))
                                        .catch(function(error){
                                            console.log(error);
                                        });
                                        // axios.post("http://localhost:4000/cancel_products_from_customer_database",{
                                        //     details:currentUser._id
                                        // })
                                        // .then(response => console.log(response))
                                        // .catch(function(error){
                                        //     console.log(error);
                                        // });
                                    }} >
                                    Cancel
                                    </button>
                                    </td>
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