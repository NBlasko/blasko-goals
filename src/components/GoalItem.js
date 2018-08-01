import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { goalRemoveRef } from '../firebase';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

class GoalItem extends Component {
    constructor(props) {
        super(props);
        this.RemoveGoal = this.RemoveGoal.bind(this);
    }

    RemoveGoal() {
        let { title, serverKey } = this.props.goal;
        let { email } = this.props.user;
        goalRemoveRef.push({ title, serverKey, email });
        goalRef.child(this.props.goal.serverKey).remove();
    }

    render() {
        let { title, email, serverKey } = this.props.goal;
        return (
            <div style = {{ margin: '10px'}}>
                <Button onClick={this.RemoveGoal} id={serverKey} color="primary"> Done </Button>
                <span>  </span>
                <strong>{title}</strong> <span className="text-muted">- submitted by </span> <em> {email} </em>
            </div>
        );

    }

}
function mapStateToProps(state) {
    const { user } = state;
    return { user };
}

GoalItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default connect(mapStateToProps, null)(GoalItem);