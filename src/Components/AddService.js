import React, { Component } from "react";
import {connect} from "react-redux";
import {addService} from "../redux/reducers/serviceReducer";

class AddService extends Component {
    constructor() {
        super();
        this.state = {
            service_description: "",
            category_id: 0
        };
    };

    handleMenuChange = e => {
        this.setState({ category_id: +e.target.value });
    };

    handleInputChange = e => {
        this.setState({service_description: e.target.value});
    };

    handleSubmit = () => {
        const {category_id, service_description} = this.state;
        const {user_id} = this.props;
        const newService = {category_id: category_id, user_id, service_description: service_description }
        console.log(category_id)

        console.log(newService)
        if (user_id) {
            this.props.addService(newService);
        }
    };


    render() {
        return (
            <div>
                <div>
                    <h1>Add a Service</h1>
                </div>
                <div>
                    <label>Category: </label>
                    <select onChange={this.handleMenuChange} >
                        <option value="0">Pick a category</option>
                        <option value="1">HotShot</option>
                        <option value="2">Graphic Design</option>
                    </select>
                </div>
                <br />
                <div>
                    <label>Service Description:</label>
                    <form onSubmit={this.handleSubmit}>
                        <textarea 
                        rows="4" 
                        cols="30" 
                        placeholder="Please provide a description of your service" 
                        required
                        value={this.state.service_description} 
                        onChange={this.handleInputChange}/>
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
        )
    };
};

const mapPropsToState = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id
    };
};

export default connect(mapPropsToState, {addService})(AddService);