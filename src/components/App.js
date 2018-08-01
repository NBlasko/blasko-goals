import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import RemoveGoalList from './RemoveGoalList.js';
import { goalRef } from '../firebase';
import { goalRemoveRef } from '../firebase';
import { connect } from 'react-redux';
import { deleteAll } from '../actions';
import { Button, Container } from 'reactstrap';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.deleteAll();
    goalRemoveRef.off();
    goalRef.off();
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        <Container>
        <div> <AddGoal /> </div>
        <div> <GoalList /> </div>
        <div> <RemoveGoalList /> </div>
        <Button color="danger" onClick={this.signOut}> Sign Out </Button>
        </Container>
      </div>
    );
  }
}


export default connect(null, { deleteAll })(App);
