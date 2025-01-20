import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false, errorMessage: '' };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({ errorMessage: error.toString() });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error: {this.state.errorMessage}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
