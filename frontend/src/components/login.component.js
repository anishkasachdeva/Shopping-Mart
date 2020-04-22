import React, {Component} from 'react';
import axios from 'axios';

export default class Login extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
            // user_type: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        // this.onChangeUserType = this.onChangeUserType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    onChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    // onChangeUserType(event) {
        // this.setState({ user_type: event.target.value });
    // }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:4000/login', newUser)
        .then(function(res){
            console.log(res)
            if(res.data == '1')
            {
                console.log("Invalid username. Please register");
                window.location = '/register'
            }
            else if(res.data == '2')
            {
                console.log("Invalid password");
                window.location = '/login'
            }
            else if(res.data == '3')
            {
                console.log("User exists");
                console.log("Go to customer page");
                localStorage.setItem("gotname",newUser.username);
                // var loc_customer_username = localStorage.getItem("gotname");
                // console.log("register",localStorage.getItem("gotname"));
                window.location = '/customer_homepage'
                // window.location = '/'
            }
            else
            {
                console.log("User exists");
                console.log("Go to vendor page");
                localStorage.setItem("gotname",newUser.username);
                // var loc_vendor_username = localStorage.getItem("gotname");
                // console.log("register",localStorage.getItem("gotname"));
                window.location = '/vendor_homepage'
            }
        });


        // axios.post('http://localhost:4000/login', newUser)
        //      .then(res => console.log(res.data));

        this.setState({
            username: '',
            password: ''
            // user_type: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group m-2">
                        <label>Username: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.username}
                            //    console.log(value);
                               onChange={this.onChangeUsername}
                               />
                    </div>
                    <div className="form-group m-2">
                        <label>Password: </label>
                        <input type="password" 
                               className="form-control" 
                               value={this.state.password}
                               onChange={this.onChangePassword}
                               />  
                    </div>
                    {/* <div className="form-group">
                        <label>UserType: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.user_type}
                               onChange={this.onChangeUserType}
                               />
                    </div> */}
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary m-3"/>
                    </div>
                </form>
            </div>
        )
    }
}