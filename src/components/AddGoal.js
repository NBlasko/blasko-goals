import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';
import { Button, Form,  Input, InputGroup, InputGroupAddon} from 'reactstrap';
import PropTypes from 'prop-types';

class AddGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
        this.addGoal = this.addGoal.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    addGoal(e) {
        e.preventDefault();
        const { title } = this.state;
        const { user } = this.props;
        goalRef.push({ user, title });
        this.setState({ title: '' });
    }
    handleChange(e) {
        this.setState({ title: e.target.value })
    }

    render() {
        return (
            <div>
                    <h2> Add a Goal </h2>
                <Form onSubmit={this.addGoal}>
                    <InputGroup>
                    <Input type="text" placeholder="Add a goal" value={this.state.title} onChange={this.handleChange} />
                    <InputGroupAddon addonType="append"><Button color="success" > Submit </Button></InputGroupAddon>
                    </InputGroup>
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return { user };
}

AddGoal.propTypes = {
    user: PropTypes.object.isRequired
}

export default connect(mapStateToProps, null)(AddGoal);
