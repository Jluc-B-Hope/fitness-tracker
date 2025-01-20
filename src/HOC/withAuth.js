import React from 'react';

function withAuth(Component) {
  return function AuthHOC(props) {
    const isAuthenticated = true; 
    if (!isAuthenticated) {
      return <h1>You must be logged in to view this content.</h1>;
    }

    return <Component {...props} />;
  };
}

export default withAuth;
