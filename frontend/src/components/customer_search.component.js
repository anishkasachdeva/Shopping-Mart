import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

// import { BrowserRouter as Router, Route} from "react-router-dom";

import axios from 'axios';


export default class CustomerSearchForProduct extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            // username: '',
            product_name: '',
            sort_by : ''
            // price: '',
            // quantity: ''
        }
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeSortBy = this.onChangeSortBy.bind(this);

        // this.onChangePrice = this.onChangePrice.bind(this);
        // this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeProductName(event) {
        this.setState({ product_name: event.target.value });
    }

    onChangeSortBy(event) {
        this.setState({ sort_by: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newProduct = {
            product_name: this.state.product_name,
            sort_by : this.state.sort_by
        }
        console.log(newProduct);

        axios.post('http://localhost:4000/search_product_add_global', newProduct)
            .then(function(res){
                console.log(res)
                localStorage.setItem("searched_product",newProduct.product_name);
                console.log(localStorage.getItem("searched_product"));
                window.location = '/pageforrelevantvendors';

            });
            
            

        this.setState({
            // username : '',
            product_name: '',
            sort_by: ''
            // price: '',
            // quantity: ''
        });
    }

    // axios.post('http://localhost:4000/login', newUser)
    //     .then(function(res){
    //         console.log(res)

    render() {
        return (
            // <Router>
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group m-2">
                        <label>Product Name: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.product_name}
                            //    localStorage.setItem("searched_product",newUser.username);
                               onChange={this.onChangeProductName}
                               />
                    </div>

                        <div className="form-group m-2">
                        <label>Sort by: price/quantity : </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.sort_by}
                               onChange={this.onChangeSortBy}
                               />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Search" className="btn btn-primary m-3"/>
                    </div>
                </form>
            
          </div> 
        //   </Router>             
        )
    }
}