// import React from 'react';
import React, {Component} from 'react';
//  import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Register from './components/register.component'
import Login from './components/login.component'
import UsersList from './components/users-list.component'
import ProductsList from './components/products-list.component'
import Vendor from './components/add_product_by_vendor.component'
import Customer from './components/customer.component'
import Vendor_HomePage from './components/vendor_homepage.component'
import FindVendors from './components/printproductscustomer.component'
import Customer_HomePage from './components/customer_homepage.component'

class App extends Component {
	render() {
		return (
				<Router>
					<div className="App" class="text-center">
					{/* <h1 class="display-5">Welcome to BuyBulk</h1> */}
					{/* <Switch> */}
						{/* <Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} /> */}
						{/* <Redirect from="/" to="login" /> */}
          {/* </Switch> */}
          

          <Link to="/">App</Link>
          <br></br>
		  <br></br>

		  {/* <Link to="/vendor">Products List</Link>
          <br></br>
		  <br></br> */}

          <Link to="/register" className="btn btn-success m-3">Register</Link>
          <Link to="/login" className="btn btn-success m-3">Login</Link>
          
		  <Route path = "/pageforrelevantvendors" exact component = {FindVendors}/>
          <Route path = "/" exact component={UsersList}/>
          <Route path = "/register" exact component={Register}/>
          <Route path = "/login" component={Login}/>
		  <Route path = "/customer" exact component={Customer}/>
		  <Route path = "/vendor" exact component={Vendor}/>
		  <Route path = "/vendor_homepage" exact component={Vendor_HomePage}/>
		  <Route path = "/customer_homepage" exact component={Customer_HomePage}/>
		  <Route path = "/product_list" exact component={ProductsList}/>
		  {/* <Route path = "/page_for_relevant_vendors" exact component = {FindVendors}/> */}

		  {/* <Route path = "/vendor" exact component={ProductsList}/> */}

					</div>
				</Router>
		);
	}
}
// export default App;

export default App;
