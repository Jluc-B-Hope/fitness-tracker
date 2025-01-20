import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <div>Что-то пошло не так!</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;