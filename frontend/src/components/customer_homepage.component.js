import React, {Component} from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

// import Register from './components/register.component'
// import Login from './components/login.component'
// import UsersList from './components/users-list.component'
// import ProductsList from './products-list.component'
// import Vendor from './ven.component'
import ProductsListForCustomer from './products_list_for_customer.component'
import PersonalProductsListOfCustomer from './personal_products_of_customer.component'
import CustomerSearchForProduct from './customer_search.component'
import UsersList from './users-list.component'


// import { listenerCount } from 'cluster';
// import Customer from './components/customer.component'
// import Vendor_HomePage from './vendor_homepage.component'

export default class Customer_HomePage extends Component {
    render() {
        return (
             <Router>
                
            <div className = "Customer_HomePage">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            {/* <a class="navbar-brand" href="/vendor">Add Product</a> */}
            {/* <Link to="/vendor" class = "navbar-brand"> Add Product </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button> */}

            <Link to="/products_list" class = "navbar-brand"> All Products </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>



            <Link to="/personal_products_list_of_customer" class = "navbar-brand"> Personal Products </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>


          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <Link to="/customer_searches_for_product" class = "navbar-brand"> Search Product </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <Link to="/" class = "navbar-brand"> Logout </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            </div>
          </nav>
      {/* <Route path = "/customer" exact component={Vendor}/> */}
      <Route path = "/" exact component={UsersList}/>      
      <Route path = "/products_list" exact component={ProductsListForCustomer}/>
      <Route path = "/personal_products_list_of_customer" exact component={PersonalProductsListOfCustomer}/>
      <Route path = "/customer_searches_for_product" exact component={CustomerSearchForProduct}/>



          </div>
          </Router>
        )
    }
}