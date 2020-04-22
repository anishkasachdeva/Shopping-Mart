import React, {Component} from 'react';
// import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

// import Register from './components/register.component'
// import Login from './components/login.component'
// import UsersList from './components/users-list.component'
// import ProductsList from './components/products-list.component'
import Vendor from './add_product_by_vendor.component'
import ProductsList from './products-list.component'
import PersonalProductsList from './personal_products_of_vendor.component'
import DispatchedGoods from './dispatched_goods_list.component'
import UsersList from './users-list.component'


// import { listenerCount } from 'cluster';
// import Customer from './components/customer.component'
// import Vendor_HomePage from './vendor_homepage.component'

export default class Vendor_HomePage extends Component {
    render() {
        return (
             <Router>
                
            <div className = "Vendor_HomePage">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            {/* <a class="navbar-brand" href="/vendor">Add Product</a> */}
            <Link to="/vendor" class = "navbar-brand"> Add Product </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <Link to="/products_list" class = "navbar-brand"> All Products </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <Link to="/personal_products_list" class = "navbar-brand"> Personal Products </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <Link to="/dispatched_goods" class = "navbar-brand"> Dispatched </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <Link to="/" class = "navbar-brand"> Logout </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <ul class="navbar-nav mr-auto">
                {/* <li class="nav-item active">
                  <a class="nav-link" href="#">All Products<span class="sr-only">(current)</span></a>
                </li> */}
                {/* <li class="nav-item">
                  <a class="nav-link" href="#">View Products</a>
                </li> */}
                {/* <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">View</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div> */}
                {/* </li>} */}
                {/* <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li> */}
              {/* </ul> } */}
              {/* <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form> */}
            </div>
          </nav>
      <Route path = "/" exact component={UsersList}/>
		  <Route path = "/vendor" exact component={Vendor}/>
      <Route path = "/products_list" exact component={ProductsList}/>
      <Route path = "/personal_products_list" exact component={PersonalProductsList}/>
      <Route path = "/dispatched_goods" exact component={DispatchedGoods}/>

      
          </div>
          </Router>
        )
    }
}