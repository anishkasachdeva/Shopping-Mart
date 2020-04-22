import React, {Component} from 'react';
import axios from 'axios';

export default class BuyProductForm extends Component {
    
    constructor(props) {
        super(props);
        console.log(this.props.buy);
        // console.log("yipeeeeeeeeeeee");
        this.state = {
            // is_dispatched: '',
            // username: '',
            // product_name: '',
            // price: '',
            quantity: ''
            // customer_making_order:'',
        }

        // this.onChangeProductName = this.onChangeProductName.bind(this);
        // this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }    
    // onChangeProductName(event) {
        // this.setState({ product_name: event.target.value });
    // }

    // onChangePrice(event) {
    //     this.setState({ price: event.target.value });
    // }

    onChangeQuantity(event) {
        this.setState({ quantity: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.quantity);
        // console.log(this.props.vendor_name);
        // console.log(blallallllllllllllaaaaaaaaa);
        // console.log("yayyyyyyyyyyyyyyyy");

        const newProduct = {
            // is_dispatched : 0,
            // username : localStorage.getItem("gotname"),
            product_name: this.props.buy,
            // vendor_name : this.state.vendor_name,
            // price: this.state.price,
            quantity: this.state.quantity,
            quantity_left : this.props.quantity_ac - this.state.quantity,
            customer_making_order : localStorage.getItem("gotname"),
            vendor_name : this.props.vendor_name,
            status : 'Placed'
            // status : 

        }
        console.log(newProduct);
        console.log(this.props.product_id);
        const send={
            toadd: newProduct,
            pid: this.props.product_id
        }
        console.log("bananananananaanan");
        axios.post('http://localhost:4000/add_customer_buy_details', send)
            .then(res => console.log(res.data));
        // axios.post('http://localhost:4000/changing_quantity_of_products', {
        //     product_id : this.props.product_id,
        //     quantity : this.state.quantity
        // })
        // axios.post('http://localhost:4000/changing_quantity_for_customer', newProduct)
        //     .then(res => console.log(res.data));
        // axios.post('http://localhost:4000/changing_quantity_for_customer', {
        //     // product_id : this.props.product_id,
        //     // quantity_left : this.props.quantity_left
        // })
        
        // .then(res => console.log(res.data));

        this.setState({
            // is_dispatched : '',
            // vendor_name : '',
            // product_name: '',
            // price: '',
            quantity: ''
            // customer_making_order : ''
        });
    }

    render() {
        return (
            <div class="text-center">
                <form onSubmit={this.onSubmit}>
                    {/* <div className="form-group m-2">
                        <label>Product Name: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.product_name}
                               onChange={this.onChangeProductName}
                               />
                    </div> */}
                    {/* <div className="form-group m-2">
                        <label>Price: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.price}
                               onChange={this.onChangePrice}
                               />  
                    </div> */}
                    <div className="form-group m-2">
                        <label>Quantity: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.quantity}
                               onChange={this.onChangeQuantity}
                               />
                    </div>
                    {/* <div className="form-group">
                    <button
                    class="btn btn-primary" type="button"
                    onClick = {() => {
                        console.log("vfjhbcnbhgfcghbjnkhgvcf")
                        console.log(this.state.showComponent)
                        // showComponent : true,
                        axios.post("http://localhost:4000/store_the_order_placed", {
                            // details : currentUser._id
                        })
                    // .then(response => console.log(response))
                    .then(response => {
                        console.log(response.data);
                        this.setState({
                                showComponent: true
                        });
                    })
                    .catch(function(error){
                        console.log(error);
                    });
                    }} >
                    Place Order
                    </button>
                        {/* <input type="submit" value="Place Order" className="btn btn-primary m-3"/> */}
                        {/* <button type="button" class="btn btn-outline-info">Place Order</button> */}
                    {/* </div> */}
                    < div className="form-group">
                        <input type="submit" value="Place Order" class="btn btn-outline-info m-3"/>
                    </div>
                </form>
            </div>
        )
    }
}