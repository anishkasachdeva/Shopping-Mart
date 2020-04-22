import React, {Component} from 'react';
import axios from 'axios';

export default class Vendor extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            is_dispatched: '',
            is_canceled : '',
            username: '',
            product_name: '',
            price: '',
            quantity: ''
        }

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeProductName(event) {
        this.setState({ product_name: event.target.value });
    }

    onChangePrice(event) {
        this.setState({ price: event.target.value });
    }

    onChangeQuantity(event) {
        this.setState({ quantity: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newProduct = {
            is_dispatched : 0,
            is_canceled : 0,
            username : localStorage.getItem("gotname"),
            product_name: this.state.product_name,
            price: this.state.price,
            quantity: this.state.quantity
        }

        axios.post('http://localhost:4000/add_product', newProduct)
             .then(res => console.log(res.data));

        this.setState({
            is_dispatched : '',
            is_canceled : '',
            username : '',
            product_name: '',
            price: '',
            quantity: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group m-2">
                        <label>Product Name: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.product_name}
                               onChange={this.onChangeProductName}
                               />
                    </div>
                    <div className="form-group m-2">
                        <label>Price: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.price}
                               onChange={this.onChangePrice}
                               />  
                    </div>
                    <div className="form-group m-2">
                        <label>Quantity: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.quantity}
                               onChange={this.onChangeQuantity}
                               />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Product" className="btn btn-primary m-3"/>
                    </div>
                </form>
            </div>
        )
    }
}