import React, { Component } from "react";



export default class EditCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service_description: "",
            edit: false,
            contactButton: false
        };
    };

    handleEdit = (service_description) => {
        this.setState({ edit: true, service_description });
    };

    handleEditChange = e => {
        this.setState({ service_description: e.target.value })
    };

    handleSubmit = (category_id, service_id) => {
        const serviceInfo = { category_id, service_id, service_description: this.state.service_description };

        this.props.editService(serviceInfo);

        this.setState({ edit: false });
    };

    handleCancel = () => {
        this.setState({ edit: false, contactButton: false });
    };

    handleDelete = (service_id, category_id) => {
        this.props.deleteService(service_id, category_id);
    };

    render() {
        const {service} = this.props;

        return (
            <div key={this.props.key}>
                
                    {!this.state.edit ?
                        <div>
                            <h1>{service.name}</h1>
                            <h3>{service.service_description}</h3>
                        </div>
                        :
                        <div>
                            <input
                                value={this.state.service_description}
                                onChange={this.handleEditChange} />
                            <div>
                                <button onClick={() => this.handleSubmit(service.category_id, service.service_id)}>SUBMIT</button>
                                <button onClick={this.handleCancel}>CANCEL</button>
                            </div>
                        </div>
                    }
                    {
                        this.props.userId === service.user_id ? (
                            <div>
                                <button onClick={() => this.handleEdit(service.service_description)}>EDIT</button>
                                <button onClick={() => this.handleDelete(service.service_id, service.category_id)}>DELETE</button>
                            </div>
                        ) : <button onClick={() => this.setState({contactButton: true})}>CONTACT</button>
                    }
                {!this.state.contactButton ?
                        null
                        :
                        <div>
                            <label>Phone Number:</label>
                            <input />
                            <div>
                                <label>Message:</label>
                                <input />
                                <button>Send</button>
                                <button onClick={this.handleCancel}>Cancel</button>
                            </div>
                        </div>
                }
                {/* contact form. service.user_phone */}
                {

                }
            </div>
        )
    };
};