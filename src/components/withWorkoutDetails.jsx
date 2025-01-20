import React from 'react';

const withWorkoutDetails = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withWorkoutDetails;
