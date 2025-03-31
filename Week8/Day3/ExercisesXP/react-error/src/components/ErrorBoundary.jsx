import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError = (error) => {
    return { error };
  };

  componentDidCatch = (error, errorInfo) => {
    console.log("error=>", error);
    console.log("errorInfo=>", errorInfo);
  };

  render() {
    if (this.state.error) return <h3>I crashed</h3>;
    if (this.state.errorInfo) return <h3>I crashed</h3>;
    return this.props.children;
  }
}

export default ErrorBoundary;