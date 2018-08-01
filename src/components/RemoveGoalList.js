import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRemovedGoals, deleteRemovedGoals } from '../actions';
import { goalRemoveRef } from '../firebase';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

class RemoveGoalList extends Component {
    constructor(props) {
        super(props);
        this.deleteFinishedGoal = this.deleteFinishedGoal.bind(this);
    }

    componentDidMount() {
        goalRemoveRef.on("child_added", snapshot => {
            let { title, email } = snapshot.val();
            let serverKeyElement = snapshot.key;
            let goalsRemoved = { title, email, serverKeyElement };
            this.props.setRemovedGoals(goalsRemoved);
        }
        );
        goalRemoveRef.on("child_removed", snapshot => {
            let { key }  = snapshot;
            this.props.deleteRemovedGoals(key)
        })


    }

    deleteFinishedGoal(e) {
        goalRemoveRef.child(e.target.id).remove();
    }


    render() {
        let inversedArray = this.props.goalsRemoved.slice().reverse();
        return (<div> <h1 className="text-warning"> List of completed Goals </h1>
            {
                inversedArray.map((goalValue) => {
                    return (
                        <div style = {{ margin: '10px'}} key={goalValue.serverKeyElement}>
                            <Button onClick={this.deleteFinishedGoal} id={goalValue.serverKeyElement} color="warning"> Remove </Button>
                            <span>  </span>            
                            <strong>{goalValue.title}</strong>
                            <span className="text-muted"> - done by </span> <em> {goalValue.email} </em>
                        </div>
                    )
                })
            }

        </div>);


    }

}
function mapStateToProps(state) {
    const { goalsRemoved } = state;
    return { goalsRemoved };
}

RemoveGoalList.propTypes = {
     goalsRemoved: PropTypes.array.isRequired
}

export default connect(mapStateToProps, { setRemovedGoals,  deleteRemovedGoals })(RemoveGoalList);