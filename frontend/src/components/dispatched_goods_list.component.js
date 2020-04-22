import React, {Component} from 'react';
import axios from 'axios';


export default class DispatchedGoods extends Component {
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
                    if (response.data[i].is_dispatched === 1)
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