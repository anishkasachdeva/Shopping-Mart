import React, {Component} from 'react';
import axios from 'axios';

export default class Customer extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            user_type: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeUserType = this.onChangeUserType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    onChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    onChangeUserType(event) {
        this.setState({ user_type: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            password: this.state.password,
            user_type: this.state.user_type
        }

        axios.post('http://localhost:4000/add', newUser)
             .then(res => console.log(res.data));

        this.setState({
            username: '',
            password: '',
            user_type: ''
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
                               onChange={this.onChangeUsername}
                               />
                    </div>
                    <div className="form-group m-2">
                        <label>Password: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.password}
                               onChange={this.onChangePassword}
                               />  
                    </div>
                    <div className="form-group m-2">
                        <label>UserType: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.user_type}
                               onChange={this.onChangeUserType}
                               />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary m-3"/>
                    </div>
                </form>
            </div>
        )
    }
}