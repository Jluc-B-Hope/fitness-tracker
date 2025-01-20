import React, { Component } from 'react';

class WorkoutDetails extends Component {
  state = {
    workout: null,
  };

  componentDidMount() {
    const { workoutId } = this.props.match.params;
    const workout = this.props.workouts.find(w => w.id === workoutId);
    this.setState({ workout });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.workoutId !== this.props.match.params.workoutId) {
      const workout = this.props.workouts.find(w => w.id === this.props.match.params.workoutId);
      this.setState({ workout });
    }
  }

  render() {
    const { workout } = this.state;
    if (!workout) return <p>Loading...</p>;
    return (
      <div>
        <h3>{workout.name}</h3>
        <p>{workout.description}</p>
      </div>
    );
  }
}

export default WorkoutDetails;
