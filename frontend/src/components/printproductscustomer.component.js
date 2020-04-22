import React, {Component} from 'react';
import axios from 'axios';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";



import BuyProductForm from './buy_product_details.component'

export default class FindVendors extends Component {
    constructor(props) {
        // console.log("ghjkljhgfrftgyhjihygtfrderfgyhjhygtfrffrtgyhhygtfrtghhygtfrhgfghjk");
        super(props);
        // showComponent : false
        // showComponent2 : false,
        // showComponent1 : false,
        this.state = {
            showComponent : false,
            users: []}
    }
    componentDidMount() {
        axios.get('http://localhost:4000/find_vendors')
             .then(response => {
                 console.log(response.data);
//                  this.setState({users: response.data});
// // console.log("hbdsihvbdjcbajd");

//              })
//              .catch(function(error) {
//                  console.log(error);
//              })
                for(let i = 0; i < response.data.length; i++)
                {
                    // console.log(response.data[i].is_dispatched);
                    // console.log("wuhuuuuuuuuuuuuuu");
                    if (response.data[i].is_dispatched === 0 && response.data[i].is_canceled === 0 && response.data[i].quantity > 0 && response.data[i].price > 0)
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
    // }
    
    render() {
        return (
            // <Router>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Vendor Name</th>
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

                                    {/* <button onclick={this.handleClick(currentUser._id)} type="button" class="btn btn-warning">Buy Product</button> */}
                                    {/* <button type="button" class="btn btn-outline-info btn-sm">Buy</button> */}
                                    {/* <Link to="/buy_details" class = "navbar-brand"> Buy </Link>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                    </button> */}

                                    <td>
                                    <button
                                    class="btn btn-primary" type="button"
                                    onClick = {() => {
                                        // console.log("vfjhbcnbhgfcghbjnkhgvcf")
                                        console.log(currentUser._id);
                                        // console.log(this.state.showComponent)
                                        // showComponent : true,
                                        axios.post("http://localhost:4000/store_the_purchased_product_details", {
                                            // console.log();
                                            // params:{
                                            details : currentUser._id
                                            // }
                                        })
                                    .then(response => {
                                        console.log(response.data[0]);
                                        // console.log(response.data);
                                        // console.log(showComponent);
                                        this.setState({
                                            buy : response.data[0].product_name, 
                                            vendor_name : response.data[0].username,
                                            product_id : response.data[0]._id,
                                            quantity_ac : response.data[0].quantity,
                                            // quantity : response.data.product_name[0].quantity,
                                            showComponent: true
                                        });
                                    })
                                    .catch(function(error){
                                        console.log(error);
                                    });
                                    // axios.post("http://localhost:4000/store_the_purchased_product_details", {
                                    //         details : currentUser._id
                                    //     })
                                    // .then(response => {
                                    //     console.log(response.data[0]);
                                    //     this.setState({
                                    //         buy : response.data[0].product_name, 
                                    //         vendor_name : response.data[0].username,
                                    //         showComponent: true
                                    //     });
                                    // })
                                    // .catch(function(error){
                                    //     console.log(error);
                                    // });
                                    }} >
                                    Buy
                                    </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {/* <Route path = "/buy_details" exact component={BuyProductForm}/> */}
                    </tbody>
                </table>
                {this.state.showComponent && <BuyProductForm buy={this.state.buy} vendor_name={this.state.vendor_name} product_id={this.state.product_id} quantity_ac={this.state.quantity_ac}/>}
            </div>
            // {/* </Router> */}
        )
    }
}
