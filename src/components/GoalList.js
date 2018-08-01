import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';
import { setGoals, deletedGoals } from '../actions';
import GoalItem from './GoalItem';

import PropTypes from 'prop-types';
class GoalList extends Component {

    componentDidMount() {
        goalRef.on("child_added", snapshot => {

            let { title, user } = snapshot.val(); 
            let { email } = user;
            let serverKey = snapshot.key;
            let goals = { title, email, serverKey };
            this.props.setGoals(goals);
        });
        goalRef.on("child_removed", snapshot => {
            let { key } =snapshot;
            this.props.deletedGoals(key);
        })

    }

    render() {
        let inversedArray = this.props.goals.slice().reverse();
        return (
            <div> <h1 className="text-primary"> List of goals </h1>
                {   
                    
                    inversedArray.map(goal =>
                    { return (<GoalItem key={goal.serverKey} goal={goal} />) })
                }
            </div>
        );

    }

}

function mapStateToProps(state) {
    const { goals } = state;
    return { goals };
}

GoalList.propTypes = {
     goals: PropTypes.array.isRequired
}


export default connect(mapStateToProps, { setGoals, deletedGoals })(GoalList);